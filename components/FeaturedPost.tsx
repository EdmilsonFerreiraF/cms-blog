import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Post } from "../pages";
import { getFeaturedPosts } from "../services";
import ButtonGroup from "./ButtonGroup";
import FeaturedPostCard from "./FeaturedPostCard";

export const FeaturedPost = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
    });
  }, []);

  return (
    <Carousel
      responsive={responsive}
      ssr
      infinite
      containerClass="carousel-container mb-8"
      itemClass="carousel-item h-full rounded-lg px-4 h-full h-[18rem] relative"
      arrows={false}
      customButtonGroup={<ButtonGroup />}
    >
      {featuredPosts.map((post: Post) => (
        <FeaturedPostCard post={post} />
      ))}
    </Carousel>
  );
};

export default FeaturedPost;
