import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Card1 from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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


  card: {
    height: 600,
  },

  button: {
    fullWidth: true
  }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>

         
         
          <GridListTile>
         <img src="https://wwwen.uni.lu/var/storage/images/bibliotheque/actualites/examens/1253803-1-fre-FR/examens.jpg" />
  
          </GridListTile>
          <Button className={classes.button}>Click me
          </Button>
          <GridListTile>
            <img src="https://wwwen.uni.lu/var/storage/images/bibliotheque/actualites/examens/1253803-1-fre-FR/examens.jpg" />
          </GridListTile>
          <GridListTile>
            <img src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/870/files/2018/05/Richmond-Night-Market-1600x450-770x365.jpg" />
          </GridListTile>
          <GridListTile>
            <img src="https://wwwen.uni.lu/var/storage/images/bibliotheque/actualites/examens/1253803-1-fre-FR/examens.jpg" />
          </GridListTile>
          <GridListTile>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/1200px-Mount_Rainier_from_west.jpg" />
          </GridListTile>
          <GridListTile>
            <img src="https://wwwen.uni.lu/var/storage/images/bibliotheque/actualites/examens/1253803-1-fre-FR/examens.jpg" />
          </GridListTile>                    
        ))}
      </GridList>
    </div>
    
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
