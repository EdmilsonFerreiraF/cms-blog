import Image from "next/image";
import { Post } from "../pages";
import { graphCMSImageLoader } from "../util";

type Props = {
  post: Post;
};

const PostImage = ({ post }: Props) => {
  return (
    <Image
      loader={graphCMSImageLoader}
      src={post.author.photo.url}
      alt={post.author.name}
      unoptimized
      height="30px"
      width="30px"
      className="align-middle rounded-full"
    />
  );
};

export default PostImage;
