import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../../components";
import { getCategories, getCategoryPosts } from "../../services";

interface Category {
  name: string;
  slug: string;
}

interface Author {
  name: string;
  bio: string;
  id: string;
  photo: {
    url: string;
  };
}

export interface Post {
  author: Author;
  categories: Category[];
  length: number;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  createdAt: string;
  slug: string;
  title: string;
}

const CategoryPost = ({ posts }: { posts: { node: Post }[] }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post) => (
            <PostCard post={post?.node} key={post?.node.title} />
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

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const posts = (await getCategoryPosts(params.slug)) || [];

  return {
    props: { posts },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = (await getCategories()) || [];

  return {
    paths: categories.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

export default CategoryPost;
