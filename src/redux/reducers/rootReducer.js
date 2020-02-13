export default function rootReducer(
  currentState = {
    pokemonImages: [],
    checkerArr: []
  },
  action
) {
  switch (action.type) {
    case 'CLEAR_ROOT_REDUCER':
      return { ...currentState, aferoAttribute: action.aferoAttribute };

    case 'GET_IMAGES_SUCCESS':
      return { ...currentState, pokemonImages: action.pokemonImages };

    //case 'CHECKER_ARRAY':
    // console.log('root', action.checkerArr);
    //return { ...currentState, checkerArr: action.checkerArr };

    default:
      return currentState;
  }
}
