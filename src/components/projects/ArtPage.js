import React from 'react';
import ArtComponent from './ArtComponent';

export default function ArtPage({ history }) {
  return (
    <div>
      <ArtComponent history={history} />
    </div>
  );
}
