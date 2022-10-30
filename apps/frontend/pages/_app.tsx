import { AppProps } from 'next/app';
import Head from 'next/head';
import store from '../redux/store';
import { Provider } from 'react-redux';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Employee Manager</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
