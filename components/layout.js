import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import GetImage from "@utils/getImage";
import NavbarAlt from "@components/navbaralt";
import { cx } from "@utils/all";




export default function Layout(props) {
  const {children } = props;
  const ogimage = GetImage(props?.openGraphImage)?.src ?? "";

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
        twitter={{
          handle: "@surjithctly",
          site: "@surjithctly",
          cardType: "summary_large_image"
        }}
      />

      <div className={cx(props?.fontStyle, "antialiased text-gray-800 dark:bg-black dark:text-gray-400")}>
        <NavbarAlt {...props} />
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-primary"></h1>
        
        </div>
        <main>{children}</main>
        
      </div>
    </>
  );
}
