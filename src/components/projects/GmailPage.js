import React from 'react';
import GmailComponent from './GmailComponent';

export default function GmailPage({ history }) {
  return (
    <div>
      <GmailComponent history={history} />
    </div>
  );
}
