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
  background: {
    boxShadow: '1px 1px 2px 0 #d0d0d0',
    background: 'transparent',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderColor: '#e4e4e4 #bebebd #bebebd #e4e4e4',
    padding: 10,
    marginTop: 120,
    marginLeft: 40,
    marginRight: 40,
    paddingLeft: 40,
    paddingRight: 40,
  }
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
      <div className={this.props.classes.background}>
        <ButtonBases
          handleActiviteClick={this.handleActiviteClick}
        />
        {suggestionList && <GridList suggestionList={suggestionList} />}
      </div>
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
