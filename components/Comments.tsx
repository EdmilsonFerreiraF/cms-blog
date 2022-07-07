import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState();

  useEffect(() => {
    // getComments(slug)
  }, []);

  return (
    <div>
      <h1>Comments</h1>
    </div>
  );
};

export default Comments;
