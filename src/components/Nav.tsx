import React from 'react';

const Nav = () => (
  <div className="text-white p-6">
    <nav className="flex flex-rows justify-between">
      <div>logo</div>
      <ul className="flex flex-row space-x-4">
        <li>about</li>
        <li>sign in</li>
        <li>books</li>
      </ul>
    </nav>
  </div>
);

export default Nav;
