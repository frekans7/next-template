import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/app.css';

import Provider from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="a NEXTjs template created by @frekans7"
        />
        <meta name="robots" content="index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
