import React from 'react';

import Link from 'next/link';

import InkLogo from '../assets/InkLogo.svg';

const Nav = () => (
  <div id="navbar" className="p-1 fixed w-full">
    <nav className="flex flex-rows justify-between block">
      <InkLogo height="100" />
      <ul className="flex flex-row space-x-4 self-center">
        <li>
          <Link href="/">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>signIn</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>books</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
