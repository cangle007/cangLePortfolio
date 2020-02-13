import React from 'react';
import InspectorComponent from './InspectorComponent';

export default function InspectorPage({ history }) {
  return (
    <div>
      <InspectorComponent history={history} />
    </div>
  );
}
