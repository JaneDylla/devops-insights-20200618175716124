import React from 'react';
import ReactDOM from 'react-dom';
import initMap from './Map';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<initMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});