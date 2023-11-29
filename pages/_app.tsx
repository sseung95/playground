import Layout from '@/src/components/Layout/Layout';
import { globalStyles } from '@/styles/global';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <Global styles={globalStyles} />
      {router.pathname === '/interactive/forward' ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
