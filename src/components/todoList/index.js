import React from 'react';

export default ({items = []}) => (
  <ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
  </ul>
);