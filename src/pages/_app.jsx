import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
