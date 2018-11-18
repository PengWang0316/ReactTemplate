import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ActiviteCard from '../ActiviteCard';

const styles = theme => ({
  flex: {
    display: 'flex',
  },
});

export const Activites = ({ classes }) => (
  <div className={classes.flex}>
    <ActiviteCard
      image="https://s7d3.scene7.com/is/image/LaCrosse/37440?$lacrosse_large_thumb_2x$"
      title="Hiking Boots"
      desc="Hiking Boots are essential"
    />
    <ActiviteCard
      image="https://s7d3.scene7.com/is/image/LaCrosse/37440?$lacrosse_large_thumb_2x$"
      title="Hiking Boots"
      desc="Hiking Boots are essential"
    />
    <ActiviteCard
      image="https://s7d3.scene7.com/is/image/LaCrosse/37440?$lacrosse_large_thumb_2x$"
      title="Hiking Boots"
      desc="Hiking Boots are essential"
    />
  </div>
);

export default withStyles(styles)(Activites);
