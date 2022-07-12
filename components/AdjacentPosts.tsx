import { useEffect, useState } from "react";
import { Post } from "../pages";
import { getAdjacentPosts } from "../services";
import AdjacentPostCard from "./AdjacentPostCard";

type Props = {
  createdAt: string;
  slug: string;
};

const AdjacentPosts = ({ createdAt, slug }: Props) => {
  const [adjacentPosts, setAdjacentPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result: any) => {
      console.log(result);
      setAdjacentPosts([result.previous, result.next]);
    });
  }, [createdAt]);

  return (
    <div className="adjacent-post">
      {adjacentPosts[0] && (
        <AdjacentPostCard post={adjacentPosts[0]} position="LEFT" />
      )}
      {adjacentPosts[1] && (
        <AdjacentPostCard post={adjacentPosts[1]} position="RIGHT" />
      )}
    </div>
  );
};

export default AdjacentPosts;
