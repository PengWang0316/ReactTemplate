import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import dialogStyles from '../styles/DialogSytels';

const checkImage = 'https://res.cloudinary.com/dcmiefxk6/image/upload/v1542557108/check-icon.png';
const styles = theme => ({
  ...dialogStyles, // Extending some basic dialog styles from DialogSytels.
  dialogPaper: { ...dialogStyles.dialogPager, minWidth: 300, maxWidth: 1100 },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: 20,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  titleText: {
    marginBottom: 10,
    width: '100%',
    alignText: 'left',
  },
  dialogImage: {
    maxWidth: '80%',
  },
  checkImage: {
    width: 50,
    height: 50,
  },
});

/**
 * The Suggestion component
 * This component is too big should be break down if we still have time.
 */
export class SingleLineGridList extends Component {
  state = {
    isOpen: false,
    suggestionId: null,
    conformIds: {},
  };

  /**
   * Set the isOpen to true
   * @return {null} No return
  */
  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  /**
   * Set the isOpen to false
   * @return {null} No return
  */
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  /**
   * Set the suggestion id
   * @param {string} tileId is the suggestionId
   * @return {null} No return
   */
  handleTileClick = tileId => this.setState({ suggestionId: tileId }, () => this.handleOpen());

  /**
   * Set the conform id
   * @param {string} tileId is the suggestionId
   * @return {null} No return
   */
  handleConform = () => this.setState(({ suggestionId, conformIds }) => ({ conformIds: { ...conformIds, [suggestionId]: true } }), () => this.handleClose());

  /**
   * The Render method
   * @return {jsx} return jsx for the component
   */
  render() {
    const { classes, suggestionList, suggestions } = this.props;
    const { isOpen, suggestionId, conformIds } = this.state;
    const tileData = suggestionList.split(';').map(id => suggestions[id]);
    return (
      <div className={classes.root}>
        <Typography className={classes.titleText} variant="h6">Suggestions</Typography>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} onClick={() => this.handleTileClick(tile.id)}>
              {(conformIds && conformIds[tile.id]) ? <div className={classes.root}><img src={checkImage} alt={tile.title} style={{ width: 130, height: 130 }} /></div> : <img src={tile.photos} alt={tile.title} />}
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={(
                  <IconButton>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                )}
              />
            </GridListTile>
          ))}
        </GridList>
        {suggestions && suggestionId && (
          <Dialog
            fullScreen={false}
            open={isOpen}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">{suggestions[suggestionId].title}</DialogTitle>
            <DialogContent>
              <div className={classes.modalRoot}>
                <img src={suggestions[suggestionId].photos} alt={suggestions[suggestionId].title} className={classes.dialogImage} />
                <Typography variant="subtitle1" id="simple-modal-description">
                  {suggestions[suggestionId].description}
                </Typography>
                <div>
                  <Typography variant="h6" color="primary">${suggestions[suggestionId].price / 100}</Typography>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                CANCEL
              </Button>
              <Button onClick={this.handleConform} color="primary" autoFocus>
                CONFORM
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    );
  }
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  suggestions: state.suggestions,
});
export default connect(mapStateToProps)(withStyles(styles)(SingleLineGridList));
