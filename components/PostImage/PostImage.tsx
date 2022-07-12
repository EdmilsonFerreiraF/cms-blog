import React from "react";
import { Post } from "../../pages";

type Props = {
  postImage: string;
};

const PostImage = ({ postImage }: Props) => {
  return (
    <div
      className="w-full h-full rounded-lg"
      style={{
        background: `url("${postImage}"), #0000003b center top no-repeat`,
        backgroundSize: "cover",
        backgroundBlendMode: "color",
      }}
    ></div>
  );
};

export default PostImage;
