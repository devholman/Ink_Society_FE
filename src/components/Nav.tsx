import React from 'react';

// import InkLogo from '../assets/InkLogo.svg';

const Nav = () => (
  <div id="navbar" className="p-1 fixed w-full">
    <nav className="flex flex-rows justify-between block">
      {/* <InkLogo height="100" /> */}
      <div className="flex flex-row space-x-4 self-center">
        <a>about</a>
        <a>sign in</a>
        <a>books</a>
      </div>
    </nav>
  </div>
);

export default Nav;
