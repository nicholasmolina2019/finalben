// pages/api/posts.js
import { getClient } from '@lib/sanity';

const postquery = `*[_type == "post"] | order(publishedAt desc) { ... }[$start...$end]{
  // other fields
}`;

export default async function handler(req, res) {
  const { page } = req.query;
  const limit = 8; // Set the number of posts per page
  const start = (page - 1) * limit;
  const end = page * limit;

  const posts = await getClient().fetch(postquery, { start, end });
  res.status(200).json(posts);
}
