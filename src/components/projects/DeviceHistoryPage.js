import React from 'react';
import DeviceHistoryComponent from './DeviceHistoryComponent';

export default function DeviceHistoryPage({ history }) {
  return (
    <div>
      <DeviceHistoryComponent history={history} />
    </div>
  );
}
