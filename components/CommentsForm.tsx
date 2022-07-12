import { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";
import CommentsBotBar from "./CommentsBotBar";
import CommentsFields from "./CommentsFields";
import CommentsKeep from "./CommentsKeep";

type Props = {
  slug: string;
};

type HtmlValue = {
  value: HTMLInputElement["value"];
};

type AreaValue = {
  value: HTMLTextAreaElement["value"];
};

type HtmlChecked = {
  checked: HTMLInputElement["checked"];
};

const CommentsForm = ({ slug }: Props) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const storeDataEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const nameElCurrent = nameEl.current as HTMLInputElement;
    const emailElCurrent = emailEl.current as HTMLInputElement;

    nameElCurrent.value = window.localStorage.getItem("name") as string;
    emailElCurrent.value = window.localStorage.getItem("email") as string;
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment }: AreaValue =
      commentEl?.current as HTMLTextAreaElement;
    const { value: name }: HtmlValue = nameEl?.current as HTMLInputElement;
    const { value: email }: HtmlValue = emailEl?.current as HTMLInputElement;
    const { checked: storeData }: HtmlChecked =
      storeDataEl?.current as HTMLInputElement;

    if (!commentEl || !nameEl || !emailEl) {
      setError(true);

      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage?.setItem("name", name);
      window.localStorage?.setItem("email", email);
    } else {
      window.localStorage?.removeItem("name");
      window.localStorage?.removeItem("email");
    }

    submitComment(commentObj).then((res: any) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <CommentsFields commentEl={commentEl} nameEl={nameEl} emailEl={emailEl} />
      <CommentsKeep storeDataEl={storeDataEl} />
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <CommentsBotBar
        showSuccessMessage={showSuccessMessage}
        handleCommentSubmission={handleCommentSubmission}
      />
    </div>
  );
};

export default CommentsForm;
