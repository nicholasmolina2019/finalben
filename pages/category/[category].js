import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import React, { useState, useEffect } from "react";
import Container from "@components/container";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription
} from "@lib/sanity";
import ErrorPage from "next/error";
import defaultOG from "../../public/img/opengraph.jpg";
import {
  postsbycatquery,
  catpathquery,
  configQuery
} from "@lib/groq";
import GetImage from "@utils/getImage";
import PostList from "@components/postlist";
import CategorySelection from "components/CategorySelection.js"; // Import CategorySelection component

// Add a new query to fetch categories
const categoriesQuery = `*[_type == "category"]{title, slug}`;

export default function Author(props) {
  const { postdata, siteconfig, preview } = props;
  const router = useRouter();
  const { category } = router.query;

  const { data: fetchedPosts } = usePreviewSubscription(
    postsbycatquery,
    {
      params: { slug: category },
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
  const [selectedCategoryNames, setSelectedCategoryNames] =
    useState("");

  useEffect(() => {
    console.log("Filtered articles in parent:", filteredArticles);
  }, [filteredArticles]);

  if (!router.isFallback && !fetchedPosts.length) {
    return <ErrorPage statusCode={404} />;
  }

  const allCategories = siteConfig?.categories || [];
  const categoryTitle = allCategories.find(
    cat => cat.slug.current === category
  )?.title;

  const handleSelectedCategoriesUpdate = updatedCategories => {
    const updatedCategoryNames = allCategories
      .filter(category =>
        updatedCategories.includes(category.slug.current)
      )
      .map(category => category.title)
      .join(", ");

    setSelectedCategoryNames(updatedCategoryNames);
  };

  const ogimage = siteConfig?.openGraphImage
    ? GetImage(siteConfig?.openGraphImage).src
    : defaultOG?.src;
  return (
    <>
      {fetchedPosts && siteConfig && (
        <Layout {...siteConfig} categories={siteConfig.categories}>
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

          <Container>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl dark:text-white">
                {selectedCategoryNames || categoryTitle}
              </h1>
              <p className="mt-1 text-gray-600">
                {filteredArticles.length} Articles
              </p>
            </div>
            <CategorySelection
              articles={fetchedPosts}
              allCategories={siteConfig.categories}
              activeCategory={category}
              onFilterUpdate={setFilteredArticles}
              onSelectedCategoriesUpdate={
                handleSelectedCategoriesUpdate
              }
            />

            <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {filteredArticles.map(post => (
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
  // Fetch posts by category
  const postdata = await getClient(preview).fetch(postsbycatquery, {
    slug: params.category
  });

  // Fetch site config and categories
  const siteconfig = await getClient(preview).fetch(configQuery);
  const categories = await getClient(preview).fetch(categoriesQuery);

  return {
    props: {
      postdata,
      siteconfig: { ...siteconfig, categories },
      preview
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  // Fetch all categories from Sanity CMS
  const categories = await client.fetch(
    `*[_type == "category"]{slug}`
  );

  // Map categories array into an array of objects with `params` keys
  const paths = categories.map(category => ({
    params: { category: category.slug.current }
  }));

  // Return an object with the paths and fallback value
  return { paths, fallback: true };
}