import React from 'react';
import MainComponent from './MainComponent';

export default function MainPage({ history, pokemonImages }) {
  return (
    <div>
      <MainComponent history={history} pokemonImages={pokemonImages} />
    </div>
  );
}
