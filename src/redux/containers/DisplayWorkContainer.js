import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DisplayWorkPage from '../../components/main/DisplayWorkPage';
import displayWorkProcess from '../thunks/displayWorkProcess';

function mapStateToProps(state, ownProps) {
  return {
    displayWork: state.displayWork
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    display_work: displayWork => {
      dispatch(displayWorkProcess(displayWork));
    }
  };
}

const withlifecycle = lifecycle({
  componentDidMount() {
    let cur_displayWork = localStorage.getItem('cur_displayWork');

    let { history } = this.props;
    if (cur_displayWork) {
      this.props.display_work(cur_displayWork);
    } else {
      history.push(`/`);
    }
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(DisplayWorkPage));
