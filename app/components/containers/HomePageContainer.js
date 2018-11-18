import React, { Fragment } from 'react';
import Card from '../Card';
import GridList from '../GridList';
import { withStyles } from '@material-ui/core/styles';
import FloatingActionButtonZoom from '../TabContainer';
import ButtonBases from '../ButtonBases';


const styles = theme => ({
  flex: {
    display: 'flex',
  },
});

/* The component that shows the home page containt */
export const HomePageContainer = ({ classes }) => (
  <Fragment>
        <br />
    <br />
    <ButtonBases></ButtonBases>
    <GridList />
    <div className={classes.flex}>
      <Card
        image="https://s7d3.scene7.com/is/image/LaCrosse/37440?$lacrosse_large_thumb_2x$"
        title="Hiking Boots"
        desc="Hiking Boots are essential"
      />
      <Card
        image="https://s7d3.scene7.com/is/image/LaCrosse/37440?$lacrosse_large_thumb_2x$"
        title="Hiking Boots"
        desc="Hiking Boots are essential"
      />
      <Card
        image="https://s7d3.scene7.com/is/image/LaCrosse/37440?$lacrosse_large_thumb_2x$"
        title="Hiking Boots"
        desc="Hiking Boots are essential"
      />            
    </div>  
    <FloatingActionButtonZoom>
    <Card
        image="https://s7d3.scene7.com/is/image/LaCrosse/37440?$lacrosse_large_thumb_2x$"
        title="Hiking Boots"
        desc="Hiking Boots are essential"
      />
    </FloatingActionButtonZoom>
  </Fragment>
);
export default withStyles(styles)(HomePageContainer);
