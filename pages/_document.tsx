import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Browser Memory Game' />
        <meta name='keywords' content='game memory fun browser online' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='icon' href='/--logo.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}