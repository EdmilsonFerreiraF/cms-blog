import Image from "next/image";
import { Post } from "../pages";
import PostImageContrasted from "./PostImageContrasted";
import PostTitle from "./PostTitle";

type Props = {
  post: Post;
};

const FeaturedPostCard = ({ post }: Props) => {
  return (
    <>
      <PostImageContrasted postImage={post.featuredImage.url} />
      <PostTitle post={post} />
      <div className="flex text-white text-lg absolute bottom-4 left-1/2 translate-x-[-50%]">
        <Image
          unoptimized
          width="32px"
          height="32px"
          className="rounded-full w-8 mr-2"
          src={post.author.photo.url}
          alt="User profile"
        />
        <h4 className="ml-3">{post.author.name}</h4>
      </div>
    </>
  );
};

export default FeaturedPostCard;
