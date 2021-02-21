import React from 'react';

import { AppProps } from 'next/app';
import { compose } from 'redux';

import { storeWrapper } from '../redux/store';

import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application.
// https://nextjs.org/docs/advanced-features/custom-app
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default compose(storeWrapper.withRedux)(MyApp);
