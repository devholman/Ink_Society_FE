import React from 'react';

import InkLogo from '../assets/InkLogo.svg';

const Nav = () => (
  <div className="p-2">
    <nav className="flex flex-rows justify-between">
      <InkLogo height="125" />
      <ul className="flex flex-row space-x-4 self-center">
        <li>about</li>
        <li>sign in</li>
        <li>books</li>
      </ul>
    </nav>
  </div>
);

export default Nav;
