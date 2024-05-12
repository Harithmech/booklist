import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta property="twitter:image" content="https://www.pagesandpioneer.com/opengraph.png"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:title" content="Pages and Poineer"></meta>
      <meta property="twitter:description" content="The Ultimate Book Lover's Guide: Discovering Your Next Read, Ideal Nooks, and Literary Adventures"></meta>
      <meta property="description" content="The Ultimate Book Lover's Guide: Discovering Your Next Read, Ideal Nooks, and Literary Adventures" />
      <meta property="og:image" content="https://www.pagesandpioneer.com/opengraph.png"></meta>
      <meta property="og:title" content="Pondy Life"></meta>
      <meta property="og:description" content="The Ultimate Book Lover's Guide: Discovering Your Next Read, Ideal Nooks, and Literary Adventures"/>
      <meta property="og:url" content="pagesandpoineer.com"></meta> </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
