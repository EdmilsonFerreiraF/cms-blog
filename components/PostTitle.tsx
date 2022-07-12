import moment from "moment";
import Link from "next/link";
import { Post } from "../pages";

type Props = {
  post: Post;
};

const PostTitle = ({ post }: Props) => {
  return (
    <Link href={post.slug}>
      <div className="absolute cursor-pointer text-white top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white-100 text-center font-semibold translate[-50%]">
        <span className="text-xs font-semibold mb-4">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </span>
        <h5 className="text-2xl">{post.title}</h5>
      </div>
    </Link>
  );
};

export default PostTitle;
