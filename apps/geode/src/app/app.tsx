import React, { useEffect, useState } from 'react';
import { Message } from '@geode/api-interfaces';

import { Route, Routes, Link } from 'react-router-dom';

import { Storybook } from '@geode/storybook';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: 'Under construction...' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img
          width="280"
          src="https://png2.cleanpng.com/sh/dceb1f60e69c1a6174365f8b647442ae/L0KzQYm3VMA6N5JAfZH0aYP2gLBuTfxmaZcyhNHwbz3lgrL1hL1xdJJzjJ98dHXwPbf2jPhiNWZme9Q5N0m8QbbphvM2NmE1UKsDNUO5QYa5U8I2PWIAS6M7Nj7zfri=/kisspng-leaf-logo-brand-plant-stem-folha-5acb07991ebfc5.008985361523255193126.png"
          alt="Hello"
        />
      </div>
      <div>{m.message}</div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/storybook">Storybook</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/storybook" element={<Storybook />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes> */}
      {/* END: routes */}
    </>
  );
};

export default App;
