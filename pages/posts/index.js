import AllPost from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-utils";

function PostsPage({ posts }) {
  return <AllPost posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}

export default PostsPage;
