import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import GridList from '../GridList';
import { withStyles } from '@material-ui/core/styles';
import FloatingActionButtonZoom from '../TabContainer';
import ButtonBases from '../ButtonBases';

import { fetchCalendarEvents as fetchCalendarEventsAction } from '../../actions/UserActions';

const styles = theme => ({
  flex: {
    display: 'flex',
  },
});

/** The component that shows the home page containt */
export class HomePageContainer extends Component {
  static a = 0;

  /**
   * d
   * @param {object} nextProps d
   * @param {object} preState d
   * @return {object} return the next state
   */
  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.user.jwt && !preState.isLoadEvents && HomePageContainer.a === 0) {
      nextProps.fetchCalendarEvents(nextProps.user.jwt);
      HomePageContainer.a = 1;
      return { isLoadEvents: true };
    }
    return null;
  }

  state = {
    isLoadEvents: false,
  };

  /**
   * @return {jsx} return jsx
   */
  render() {
    const { user } = this.props;
    return (
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
  }
}

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
  fetchCalendarEvents: jwt => dispatch(fetchCalendarEventsAction(jwt)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePageContainer));
