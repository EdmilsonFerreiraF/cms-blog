import { useEffect, useState } from "react";
import { getComments } from "../services";
import CommentList from "./CommentList";

type Props = {
  slug: string;
};

const Comments = ({ slug }: Props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result: any) => setComments(result));
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          <CommentList comments={comments} />
        </div>
      )}
    </>
  );
};

export default Comments;
