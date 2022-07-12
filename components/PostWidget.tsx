import { useEffect, useState } from "react";
import { Post } from "../pages";
import { getRecentPosts, getSimilarPosts } from "../services";
import RelatedPostsList from "./RelatedPostsList";

type Props = {
  categories?: string[];
  slug?: string;
};

const PostWidget = ({ categories, slug }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories as string[], slug).then((result: any) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result: any) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <RelatedPostsList relatedPosts={relatedPosts} />
    </div>
  );
};

export default PostWidget;
