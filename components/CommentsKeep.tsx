import { LegacyRef } from "react";

type Props = {
  storeDataEl: LegacyRef<HTMLInputElement>;
};

const CommentsKeep = ({ storeDataEl }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      <>
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
      </>
    </div>
  );
};

export default CommentsKeep;
