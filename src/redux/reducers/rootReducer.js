export default function rootReducer(
  currentState = {
    pokemonImages: [],
    displayWork: ''
  },
  action
) {
  switch (action.type) {
    case 'CLEAR_ROOT_REDUCER':
      return { ...currentState, aferoAttribute: action.aferoAttribute };

    case 'GET_IMAGES_SUCCESS':
      return { ...currentState, pokemonImages: action.pokemonImages };

    case 'UPDATE_WORK_COMPONENT':
      return { ...currentState, displayWork: action.displayWork };

    default:
      return currentState;
  }
}
