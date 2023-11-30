import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Calderon Dev</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Explore my portfolio showcasing a variety of projects and developments. From custom-built REST APIs to innovative ecommerce platforms, discover how I bring ideas to life." />
      <link rel="icon" href="/development.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
