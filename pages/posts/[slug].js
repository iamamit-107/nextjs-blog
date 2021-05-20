import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-utils";

function PostSinglePage({ postData }) {
  return <PostContent post={postData} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      postData: postData,
    },
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostSinglePage;
