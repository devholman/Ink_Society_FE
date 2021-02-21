import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main
    meta={(
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework."
      />
    )}
  >
    <a href="https://github.com/ixartz/Next-js-Boilerplate">
      <img
        src={`${process.env.baseUrl}/assets/images/nextjs-starter-banner.png`}
        alt="Nextjs starter banner"
      />
    </a>
    <h1 className="font-bold text-2xl">
      Boilerplate code for your Nextjs project with Tailwind CSS
    </h1>
  </Main>
);

export default Index;
