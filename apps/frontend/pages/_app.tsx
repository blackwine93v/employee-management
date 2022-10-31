import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from '../redux/store';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Employee Manager</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <SnackbarProvider maxSnack={3}>
            <Component {...pageProps} />
          </SnackbarProvider>
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
