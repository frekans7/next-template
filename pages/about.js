import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h3>About Page</h3>
      <p>Use Next.js with multiple(Context+Reducer) in this project </p>
      <p>Use Context1 (GlobalState) for Counter</p>
      <p>Use Context2 (AuthState) for Auth</p>
      <p>Use Local Storage with custom Hook</p>
      <p>Custom Light/Dark Theme(Default system theme)</p>
      <p>Create icon components with SVGR</p>
      <p>Use PostCSS</p>
      <p>and Prettier use with ESlint and Airbnb code style</p>
      <Link href="https://github.com/frekans7/next-template">
        <a>Source Code</a>
      </Link>
    </Layout>
  );
}
export default AboutPage;
