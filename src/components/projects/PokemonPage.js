import React from 'react';
import PokemonComponent from './PokemonComponent';

export default function PokemonPage({ history }) {
  return (
    <div>
      <PokemonComponent history={history} />
    </div>
  );
}
