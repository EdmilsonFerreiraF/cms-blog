import Link from "next/link";
import { Category } from "./Header";

type Props = {
  categories: Category[];
  className: string;
};

const CategoryList = ({ categories, className }: Props) => {
  return (
    <>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className={className}>{category.name}</span>
        </Link>
      ))}
    </>
  );
};

export default CategoryList;
