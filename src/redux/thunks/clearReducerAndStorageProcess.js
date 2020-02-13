/*clear out localStroage and rootReducer data when user logs out, and unmonitor+logout promise*/
export default function clearReducerAndStorageProcess() {
  return async (dispatch, getState) => {
    try {
      localStorage.removeItem('accountId');
      dispatch({ type: 'CLEAR_ROOT_REDUCER', aferoAttribute: {} });
    } catch (error) {
      console.log(error);
    }
  };
}
