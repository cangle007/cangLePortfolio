export default function displayWorkProcess(displayWork) {
  return (dispatch, getState) => {
    console.log('displayWork', displayWork);

    localStorage.setItem('cur_displayWork', displayWork);
    dispatch({ type: 'UPDATE_WORK_COMPONENT', displayWork: displayWork });
  };
}
