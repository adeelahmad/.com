// _app.tsx
// Language: typescript

import '@/styles/app.css';

import { AppProps } from 'next/app';

import Background from '@/components/Background';
import Layout from '@/components/Layout';
import LowPolySVG from '@/components/LowPolySVG';
import Navigation from '@/components/Navigation';
import MDX from '@/utils/MdxProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout as="section" layout="page">
        <Navigation />

        <MDX>
          <Component {...pageProps} />
        </MDX>

        <LowPolySVG />
      </Layout>
      <Background />
    </>
  );
}
