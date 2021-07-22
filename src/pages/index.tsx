import React from 'react';

import Nav from 'components/Nav';
// import InkLogo from '../assets/InkLogo';

// import { Meta } from '../layout/Meta';
// import { Main } from '../templates/Main';

const Index = () => (
  // <Main
  //   meta={(
  //     <Meta
  //       title="ink Society"
  //       description="ink Society is a bookclub management site"
  //     />
  //   )}
  // >
  //   <h1 className="font-bold text-2xl">
  //     Boilerplate code for your Nextjs project with Tailwind CSS
  //   </h1>
  // </Main>
  <div className="h-screen bg-black">
    <Nav />
    {/* <InkLogo/> */}
    <div className="absolute bottom-0 left-0 m-8 md:m-16 h-1/4">
      <h1 className="text-white text-3xl md:text-6xl extrabold">
        The last bookclub manager you&apos;ll need.
      </h1>
    </div>
  </div>
);

export default Index;
