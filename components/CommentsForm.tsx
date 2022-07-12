import { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";

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
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          placeholder="Comment"
          name="comment"
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
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
    </div>
  );
};

export default CommentsForm;
