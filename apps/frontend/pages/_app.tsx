import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from '../redux/store';
import './styles.css';
import { ViewModeProvider } from '../context/ViewModeContext';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Employee Manager</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <ViewModeProvider>
            <SnackbarProvider maxSnack={3}>
              <Component {...pageProps} />
            </SnackbarProvider>
          </ViewModeProvider>
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
