import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  titleText: {
    marginBottom: 10,
    width: '100%',
    alignText: 'left',
  }
});

/**
 * The ButtonBases component
 * @param {object} object contains propps' value
 * @return {jsx} Return jsx
 */
function ButtonBases({
  classes, user, activites, handleActiviteClick,
}) {
  /**
   * Get the images information based on the latest calendar events.
   * This should be refactored.
   * @return {array} return a images array.
   */
  function getImages() {
    const returnArr = [];
    const activiteArr = [user.events.items.pop(), user.events.items.pop(), user.events.items.pop(), user.events.items.pop()];
    activiteArr.forEach(activite => {
      for (let i = 0; i < activites.length; i++) {
        if (activite.summary.includes(activites[i].keywords)) {
          returnArr.push({
            url: activites[i].photo,
            title: activites[i].title,
            suggestIds: activites[i].suggestions,
          });
          break;
        }
      }
    });

    // Adding the with
    let width;
    switch (returnArr.length) {
      case 4:
        width = '25%';
        break;
      case 3:
        width = '33%';
        break;
      case 2:
        width = '50%';
        break;
      default:
        width = '100%';
    }
    return returnArr.map(obj => ({ ...obj, width }));
  }

  let images;
  if (user.events && activites) images = getImages();
  return (
    <div className={classes.root}>
      {/* <Typography className={classes.titleText} variant="h6">Your future activites</Typography> */}
      {images && images.map(image => (
        <ButtonBase
          onClick={() => handleActiviteClick(image.suggestIds)}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  activites: state.activites,
});
export default connect(mapStateToProps)(withStyles(styles)(ButtonBases));
