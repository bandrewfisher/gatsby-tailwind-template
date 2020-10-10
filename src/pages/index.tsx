import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = (): ReactElement => (
  <Layout>
    <h1>Brett is Awesome</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
