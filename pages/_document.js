import Document, {
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Lora:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <meta name="p:domain_verify" content="5d091b94430706ce79dfe57f8dda0bb0"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
