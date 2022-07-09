import moment from "moment";
import Link from "next/link";
import React from "react";
import { Post } from "../pages";
import "react-multi-carousel/lib/styles.css";

type Props = {
  post: Post;
  position: "LEFT" | "RIGHT";
};

const AdjacentPosts = ({ post, position }: Props) => {
  return (
    <div className="relative carousel-button-group">
      <div className="relative h-72 mb-14">
        <div
          className="w-full h-full rounded-lg"
          style={{
            background: `url("${post.featuredImage.url}"), #0000003b center top no-repeat`,
            backgroundSize: "cover",
            backgroundBlendMode: "color",
          }}
        ></div>
        <Link href={post.slug}>
          <div className="absolute cursor-pointer text-white top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white-100 text-center font-semibold translate[-50%]">
            <span className="text-xs font-semibold mb-4">
              {moment(post.publishedAt).format("MMM DD, YYYY")}
            </span>
            <h5 className="text-2xl">{post.title}</h5>
          </div>
        </Link>
        <Link href={`/post/${post.slug}`}>
          <span className="z-10 cursor-pointer absolute w-full h-full" />
        </Link>
      </div>

      {position === "LEFT" && (
        <div className="absolute adjacent-post arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
      )}
      {position === "RIGHT" && (
        <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default AdjacentPosts;
