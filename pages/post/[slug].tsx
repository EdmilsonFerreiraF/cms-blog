import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import {
  Author,
  Categories,
  CommentsForm,
  PostDetail,
  PostWidget,
} from "../../components";
import Comments from "../../components/Comments";
import { PostDetailType } from "../../components/PostDetail";
import { getPostDetails, getPosts } from "../../services";

type Props = {
  post: PostDetailType;
};

const PostDetails = ({ post }: Props) => {
  return (
    <div className="container-mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};
