export default function sliderProcess() {
  return (dispatch, getState) => {
    let imagesData = ['poke_select', 'poke_build', 'poke_deck', 'poke_screen'];
    dispatch({ type: 'GET_IMAGES_SUCCESS', pokemonImages: imagesData });
  };
}
