import '../styles/globals.scss'
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import English from '../content/locales/en.json';
import Spanish from '../content/locales/es.json';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'zh':
        return Chinese;
      case 'es':
        return Spanish;
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
      <IntlProvider
          locale={shortLocale}
          messages={messages}
          onError={() => null}
      >
        <Component {...pageProps} />
      </IntlProvider>);
}

export default MyApp
