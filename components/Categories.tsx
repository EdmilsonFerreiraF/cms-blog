import { useEffect, useState } from "react";
import { getCategories } from "../services";
import CategoryList from "./CategoryList";
import { Category } from "./Header";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      <CategoryList
        categories={categories}
        className="cursor-pointer block pb-3 mb-3"
      />
    </div>
  );
};

export default Categories;
