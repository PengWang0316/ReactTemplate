import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


import GridList from '../GridList';
import ButtonBases from '../ButtonBases';

import { fetchCalendarEvents as fetchCalendarEventsAction } from '../../actions/UserActions';
import { fetchSuggestions as fetchSuggestionsAction } from '../../actions/SuggestionActions';
import { fetchActivites as fetchActivitesAction } from '../../actions/ActiviteActions';

const styles = theme => ({
  flex: {
    display: 'flex',
  },
});

/** The component that shows the home page containt */
export class HomePageContainer extends Component {
  static a = 0;

  /**
   * Call the actions
   * @param {object} props values
   * @return {object} return the next state
   */
  constructor(props) {
    super(props);
    if (!props.suggestions) props.fetchSuggestions();
    if (!props.activites) props.fetchActivites();
  }

  /**
   * Call the fetchCalendarEvents action if has jwt
   * @param {object} nextProps values repersent after change
   * @param {object} preState has old state values
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
    suggestionList: null,
  };

  handleActiviteClick = suggestionList => this.setState({ suggestionList });

  /**
   * @return {jsx} return jsx
   */
  render() {
    const { suggestionList } = this.state;
    return (
      <Fragment>
        <ButtonBases
          handleActiviteClick={this.handleActiviteClick}
        />
        {suggestionList && <GridList suggestionList={suggestionList} />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  suggestions: state.suggestions,
  activites: state.activites,
});
const mapDispatchToProps = dispatch => ({
  fetchCalendarEvents: jwt => dispatch(fetchCalendarEventsAction(jwt)),
  fetchSuggestions: () => dispatch(fetchSuggestionsAction()),
  fetchActivites: () => dispatch(fetchActivitesAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePageContainer));
