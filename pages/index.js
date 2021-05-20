import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturePosts } from "../lib/post-utils";

function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featurePosts = getFeaturePosts();

  return {
    props: {
      posts: featurePosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
