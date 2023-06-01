import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import React, { useState, useEffect } from "react";
import { useNextSanityImage } from "next-sanity-image";
import Container from "@components/container";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription
} from "@lib/sanity";
import ErrorPage from "next/error";
import defaultOG from "../../public/img/opengraph.jpg";
import {
  postsbyauthorquery,
  configQuery,
  authorsquery // Add this import
} from "@lib/groq";
import PostList from "@components/postlist";

export default function Author(props) {
  const { postdata, siteconfig, preview } = props;
  const router = useRouter();
  const { author } = router.query;

  // Call useNextSanityImage unconditionally
  const imageProps = useNextSanityImage(client, siteconfig?.openGraphImage);
  const ogimage = imageProps?.src || defaultOG?.src;

  const { data: fetchedPosts } = usePreviewSubscription(
    postsbyauthorquery,
    {
      params: { slug: author },
      initialData: postdata,
      enabled: preview || router.query.preview !== undefined
    }
  );

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });

  const [filteredArticles, setFilteredArticles] =
    useState(fetchedPosts);
  console.log("Initial filtered articles:", filteredArticles);

  useEffect(() => {
    setFilteredArticles(fetchedPosts);
  }, [fetchedPosts]);

  if (!router.isFallback && !fetchedPosts.length) {
    return <ErrorPage statusCode={404} />;
  }

  const authorName =
    (
      fetchedPosts &&
      Array.isArray(fetchedPosts[0]?.author) &&
      fetchedPosts[0].author.filter(e => e.slug.current === author)[0]
    )?.name || author;

    return (
    <>
      {fetchedPosts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${authorName} - ${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${authorName} - ${siteConfig?.title}`,
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
          <Container>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl dark:text-white">
                {authorName}
              </h1>
              <p className="mt-1 text-gray-600">
                {fetchedPosts.length} Articles
              </p>
            </div>
            <div
  className="grid mt-20 lg:
:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
  {filteredArticles && filteredArticles.map(post => (
    <PostList
      key={post._id}
      post={post}
      aspect="square"
    />
  ))}
</div>

          </Container>
        </Layout>
      )}
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postsbyauthorquery, {
    slug: params.author,
  });
  console.log("Posts by author:", post);
  const config = await getClient(preview).fetch(configQuery);

  if (!post || post.length === 0 || !config) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postdata: post,
      siteconfig: { ...config },
      preview,
    },
    revalidate: 10,
  };
}


export async function getStaticPaths() {
  const authors = await client.fetch(authorsquery);
  console.log("Authors:", authors);

  if (!authors || authors.length === 0) {
    return {
      paths: [],
      fallback: true,
    };
  }

  return {
    paths: authors
      .filter((author) => author.slug && author.slug.current)
      .map((author) => ({
        params: {
          author: author.slug.current,
        },
      })),
    fallback: true,
  };
}

