import moment from "moment";
import Link from "next/link";
import React from "react";
import { Post } from "../pages";
import LeftArrowBtn from "./LeftArrowBtn";
import PostImage from "./PostImage/PostImage";
import RightArrowBtn from "./RightArrowBtn";

type Props = {
  post: Post;
  position: "LEFT" | "RIGHT";
};

const AdjacentPosts = ({ post, position }: Props) => {
  return (
    <div className="relative carousel-button-group">
      <div className="relative h-72 mb-14">
        <PostImage postImage={post.featuredImage.url} />
        <Link href={post.slug}>
          <div className="absolute cursor-pointer text-white top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white-100 text-center font-semibold translate[-50%]">
            <span className="text-xs font-semibold mb-4">
              {moment(post.publishedAt).format("MMM DD, YYYY")}
            </span>
            <h5 className="text-2xl">{post.title}</h5>
          </div>
        </Link>
        <Link href={`/post/${post.slug}`}>
          <div>
            <span className="z-10 cursor-pointer absolute w-full h-full" />

            {position === "LEFT" && <LeftArrowBtn />}
            {position === "RIGHT" && <RightArrowBtn />}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdjacentPosts;
