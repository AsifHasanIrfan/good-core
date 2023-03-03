import Head from 'next/head';
import Home from '../views/Home/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Good Core</title>
      </Head>
      <Home />
    </>
  );
}
