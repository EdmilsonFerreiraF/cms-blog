import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../pages";
import { graphCMSImageLoader } from "../util";

type Props = {
  relatedPosts: Post[];
};

const RelatedPostsList = ({ relatedPosts }: Props) => {
  return (
    <>
      {relatedPosts.map((post: Post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={graphCMSImageLoader}
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              unoptimized
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPostsList;
