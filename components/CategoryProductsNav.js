import Link from "next/link";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
];
const CategoryProductsNav = () => {
  return (
    <div className="bg-slate-50">
      <div className="text-xl pl-5 pt-5">Other Categories</div>
      <div className="flex flex-col pl-5 pt-3">
        {categories.map((item, index) => {
          return (
            <Link href={`/category/${item}`} className="capitalize p-2 hover:bg-blue-500 hover:text-white rounded">{item.replace("-", " ")}</Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProductsNav;
