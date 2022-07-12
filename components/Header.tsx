import Link from "next/link";
import CategoryList from "./CategoryList/CategoryList";

export interface Category {
  name: string;
  slug: string;
}

const categories: Category[] = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          <CategoryList
            categories={categories}
            className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
