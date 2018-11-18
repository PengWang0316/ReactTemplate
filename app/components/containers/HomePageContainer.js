import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { fetchCalendarEvents as fetchCalendarEventsAction } from '../../actions/UserActions';

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
        {user.jwt}
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
