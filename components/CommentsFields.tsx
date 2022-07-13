import { RefObject } from "react";

type Props = {
  commentEl: RefObject<HTMLTextAreaElement>;
  nameEl: RefObject<HTMLInputElement>;
  emailEl: RefObject<HTMLInputElement>;
};

const CommentsFields = ({ commentEl, nameEl, emailEl }: Props) => {
  const fields = ["name", "email"];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          placeholder="Comment"
          name="comment"
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {fields.map((field) => {
          return (
            <input
              key={field}
              type={field}
              ref={field === "name" ? nameEl : emailEl}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 placeholder:capitalize"
              placeholder={`${field}`}
              name={`${field}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default CommentsFields;
