import Image from "next/image";
import React from "react";
import { graphCMSImageLoader } from "../util";

type Props = {
  postText: {
    children: JSX.Element[];
  } & any;
};

const PostText = ({ postText }: Props) => {
  const switchContentType = (
    modifiedText: any,
    index: number,
    obj: any,
    type?: "heading-three" | "paragraph" | "heading-four" | "image"
  ) => {
    if (type === "heading-three") {
      return (
        <h3 key={index} className="text-xl font-semibold mb-4">
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      );
    }
    if (type === "paragraph") {
      return (
        <p key={index} className="mb-8">
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );
    }
    if (type === "heading-four") {
      return (
        <h4 key={index} className="text-md font-semibold mb-4">
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      );
    }
    if (type === "image") {
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
    }

    return modifiedText;
  };

  const getContentFragment = (
    index: number,
    text: string,
    obj: any,
    type?: "heading-three" | "paragraph" | "heading-four" | "image"
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

    switchContentType(modifiedText, index, obj, type);
  };

  return (
    <>
      {postText.children.map((typeObj: any, index: number) => {
        const children = typeObj.children.map((item: any, itemIndex: any) =>
          getContentFragment(itemIndex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </>
  );
};

export default PostText;
