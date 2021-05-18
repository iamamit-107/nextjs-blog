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

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
