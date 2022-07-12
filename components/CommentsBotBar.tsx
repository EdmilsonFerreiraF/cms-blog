import { MouseEventHandler } from "react";

type Props = {
  handleCommentSubmission: MouseEventHandler<HTMLButtonElement>;
  showSuccessMessage: boolean;
};

const CommentsBotBar = ({
  handleCommentSubmission,
  showSuccessMessage,
}: Props) => {
  return (
    <div className="mt-8">
      <button
        type="button"
        className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        onClick={handleCommentSubmission}
      >
        Post Comment
      </button>

      {showSuccessMessage && (
        <span className="text-xl float-right font-semibold mt-3 text-green-500">
          Comment submitted for review
        </span>
      )}
    </div>
  );
};

export default CommentsBotBar;
