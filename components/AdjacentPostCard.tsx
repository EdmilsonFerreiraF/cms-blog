import Link from "next/link";
import { Post } from "../pages";
import LeftArrowBtn from "./LeftArrowBtn";
import PostImageContrasted from "./PostImageContrasted";
import PostTitle from "./PostTitle";
import RightArrowBtn from "./RightArrowBtn";

type Props = {
  post: Post;
  position: "LEFT" | "RIGHT";
};

const AdjacentPosts = ({ post, position }: Props) => {
  return (
    <div className="relative carousel-button-group">
      <div className="relative h-72 mb-14">
        <PostImageContrasted postImage={post.featuredImage.url} />
        <PostTitle post={post} />
        <Link href={`/post/${post.slug}`}>
          <>
            {position === "LEFT" && <LeftArrowBtn />}
            {position === "RIGHT" && <RightArrowBtn />}
          </>
        </Link>
      </div>
    </div>
  );
};

export default AdjacentPosts;
