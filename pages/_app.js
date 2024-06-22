import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import { Provider } from 'react-redux';
import makeStore from '../store/store';
import { createWrapper } from 'next-redux-wrapper';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={makeStore()}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
