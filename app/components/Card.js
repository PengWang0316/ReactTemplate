import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import SimpleModalWrapped from './Modal';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
    margin: 100,
  },
  media: {
    height: 300,
  },
};


function MediaCard({ classes, image, title, desc }) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
					className={classes.media}
					image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
           {desc} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SimpleModalWrapped>

        </SimpleModalWrapped>
      </CardActions>
    </Card>
    

  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
