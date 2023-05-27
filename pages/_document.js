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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-FHNJY22J82`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FHNJY22J82');
              `,
            }}
          />
   <meta name="p:domain_verify" content="f3af843d1063e954d937cbe50bf7ea42"/>
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
