import parser from "html-react-parser";
import moment from "moment";

type Comment = {
  name: string;
  createdAt: string;
  comment: string;
};

type Props = {
  comments: Comment[];
};

const CommentList = ({ comments }: Props) => {
  return (
    <>
      {comments.map((comment: any) => (
        <div
          key={comment.createdAt}
          className="border-b-border-gray-100 mb-4 pb-4"
        >
          <p className="mb-4">
            <span className="font-semibold">{comment.name}</span> on{" "}
            {moment(comment.createdAt).format("MMM DD, YYYY")}
          </p>
          <p className="whitespace-pre-line text-gray-600 w-full">
            {parser(comment.comment)}
          </p>
        </div>
      ))}
    </>
  );
};

export default CommentList;
