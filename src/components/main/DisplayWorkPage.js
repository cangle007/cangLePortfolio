import React from 'react';
import DisplayWorkComponent from './DisplayWorkComponent';

export default function DisplayWorkPage({ history, displayWork }) {
  return (
    <div>
      <DisplayWorkComponent history={history} displayWork={displayWork} />
    </div>
  );
}
