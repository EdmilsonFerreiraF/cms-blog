import moment from "moment";
import React from "react";
import { Post } from "../pages";

type Props = {
  post: Post;
};

const FeaturedPostCard = ({ post }: Props) => {
  return (
    <>
      <div
        className="w-full h-full rounded-lg"
        style={{
          background: `url("${post.featuredImage.url}"), #0000003b center top no-repeat`,
          backgroundSize: "cover",
          backgroundBlendMode: "color",
        }}
      ></div>
      <div className="absolute text-white top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white-100 text-center font-semibold translate[-50%]">
        <span className="text-xs font-semibold mb-4">
          {moment(post.publishedAt).format("MMM DD, YYYY")}
        </span>
        <h5 className="text-2xl">{post.title}</h5>
      </div>
      <div className="flex text-white text-lg absolute bottom-4 left-1/2 translate-x-[-50%]">
        <img
          className="rounded-full w-8 mr-2"
          src={post.author.photo.url}
          alt="User profile"
        />
        <h4>{post.author.name}</h4>
      </div>
    </>
  );
};

export default FeaturedPostCard;
