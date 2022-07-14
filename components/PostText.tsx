import Image from "next/image";
import React from "react";
import { graphCMSImageLoader } from "../util";

type Props = {
  postText: {
    children: JSX.Element[];
  } & any;
};

type Type = "heading-three" | "paragraph" | "heading-four" | "image";

const PostText = ({ postText }: Props) => {
  const switchContentType = (
    modifiedText: any,
    obj: any,
    index: number,
    type?: Type
  ) => {
    const mappedModifiedText =
      type &&
      modifiedText.map((item: any, i: number) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ));

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {mappedModifiedText}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {mappedModifiedText}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {mappedModifiedText}
          </h4>
        );
      case "image":
        return (
          <Image
            loader={graphCMSImageLoader}
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  const getContentFragment = (
    index: number,
    text: string,
    obj: any,
    type?: Type
  ) => {
    let modifiedText: any = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    return switchContentType(modifiedText, obj, index, type);
  };

  return (
    <>
      {postText?.children.map((typeObj: any, index: number) => {
        const children = typeObj?.children.map((item: any, itemIndex: any) =>
          getContentFragment(itemIndex, item.text, item)
        );
        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </>
  );
};

export default PostText;
