import React from 'react';
import MainComponent from './MainComponent';

export default function MainPage({ history, display_work }) {
  return (
    <div>
      <MainComponent history={history} display_work={display_work} />
    </div>
  );
}
