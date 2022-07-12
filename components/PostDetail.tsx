import Image from "next/image";
import { graphCMSImageLoader } from "../util";
import Author from "./Author";
import { Category } from "./Header";
import PostDate from "./PostDate";
import PostText from "./PostText";

export type PostDetailType = {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  categories: Category[];
  content: {
    raw: {
      children: JSX.Element[];
    } & any;
  };
};

type Props = {
  post: PostDetailType;
};

const PostDetail = ({ post }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              loader={graphCMSImageLoader}
              src={post.author.photo.url}
              alt={post.author.name}
              unoptimized
              height="30px"
              width="30px"
              className="align-middle rounded-full"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <PostDate postDate={post.createdAt} />
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <PostText postText={post.content.raw} />
      </div>
    </div>
  );
};

export default PostDetail;
