import ReactMarkdown from "react-markdown";

import PostHeader from "./post-heading";
import classes from "./post-content.module.css";

const DUMMY_POSTS = {
  slug: "getting-started-nextjs",
  title: "Getting started next js",
  image: "getting-started-nextjs.png",
  content: "# This is a Test content",
  date: "2022-10-20",
};

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
