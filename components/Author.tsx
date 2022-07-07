import Image from "next/image";
import React from "react";

type Author = {
  photo: {
    url: string;
  };
  name: string;
  bio: string;
};

type Props = {
  author: Author;
};

const Author = ({ author }: Props) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative">
      <div className="absolute left-0 right-0 -top-12">
        <Image
          unoptimized
          src={author.photo.url}
          height="100px"
          width="100px"
          alt={author.name}
          className="align-middle rounded-full"
        />
      </div>
      <div className="text-white my-4 text-xl font-bold">{author.name}</div>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
