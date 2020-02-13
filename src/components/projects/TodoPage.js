import React from 'react';
import TodoComponent from './TodoComponent';

export default function TodoPage({ history }) {
  return (
    <div>
      <TodoComponent history={history} />
    </div>
  );
}
