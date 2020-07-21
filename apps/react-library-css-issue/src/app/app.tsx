import React from 'react';

import './app.scss';

import { Foo } from '@react-library-css-issue/foo';
import { PublishableFoo } from '@react-library-css-issue/publishable-foo';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <h1 className="app-text">App title</h1>
      <Foo/>
      <PublishableFoo/>
    </div>
  );
};

export default App;
