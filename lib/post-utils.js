import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, "");

  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((post) => {
    return getPostData(post);
  });

  const sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPost;
}

export function getFeaturePosts() {
  const allPosts = getAllPosts();

  const featurePosts = allPosts.filter((post) => post.isFeature);

  return featurePosts;
}
