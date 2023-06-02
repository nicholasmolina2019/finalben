import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import { useState } from 'react';
import Container from "@components/container";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import defaultOG from "../public/img/opengraph.jpg";
import { postquery, configQuery } from "@lib/groq";
import GetImage from "@utils/getImage";
import PostList from "@components/postlist";
import MerakiUIContent from "components/MerakiUIContent.js"; // Replace with the correct path to the MerakiUIContent.js file
import AlertBox from '../components/AlertBox';


export default function Post(props) {
  const { postdata, siteconfig, preview } = props;
  const router = useRouter();
  
  

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });

  const ogimage = defaultOG?.src;

  return (
    <>
      {posts && siteConfig && (
        <Layout {...siteConfig} alternate={true} searchinput={true}>
          <NextSeo
            title={`${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [
                {
                  url: ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "5BENEFITS"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <MerakiUIContent />
          <Container>
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.slice(2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="square"
                />
              ))}
            </div>
            <AlertBox />
          </Container>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const limit = 8;
  const post = await getClient(preview).fetch(postquery, { limit });
  const config = await getClient(preview).fetch(configQuery);

  return {
    props: {
      postdata: post,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
