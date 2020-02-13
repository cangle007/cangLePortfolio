import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainPage from '../../components/main/MainPage';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const withlifecycle = lifecycle({
  /*LifeCycle: Birth/Mounting*/
  //static getDerivedStateFromProps(props, state) {},
  componentDidMount() {}
  /*LifeCycle: Growth/Update*/
  //static getDerivedStateFromProps(props, state) {},
  // getSnapshotBeforeUpdate(prevProps, prevState) {},
  // componentDidUpdate(prevProps, prevState) {},
  /*LifeCycle: Death/Unmount*/
  // componentWillUnmount() {}
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(MainPage));
