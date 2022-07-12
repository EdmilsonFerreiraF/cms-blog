import { GetStaticProps } from "next";
import Head from "next/head";
import { Author, Categories, PostCard, PostWidget } from "../components";
import FeaturedPost, { FeaturedPosts } from "../components/FeaturedPosts";
import { getPosts } from "../services";

interface Category {
  name: string;
  slug: string;
}

export interface Post {
  author: Author;
  categories: Category[];
  excerpt: string;
  featuredImage: {
    url: string;
  };
  createdAt: string;
  slug: string;
  title: string;
}

const Home = ({ posts }: { posts: { node: Post }[] }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
};

export default Home;
