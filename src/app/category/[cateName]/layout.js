import Link from "next/link";
import CategoryProductsNav from "../../../../components/CategoryProductsNav";

const CategeryProductsLayout = ({ children, params }) => {
  console.log("CategeryProductsLayout---->", params);
  return (
    <div>
      <div className="bg-slate-50">
        <div className="px-5 max-w-[1400px] m-auto">
          <div className="text-gray-400 py-12">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            -{" "}
            <Link href="/category" className="hover:underline">
              Category
            </Link>{" "}
            -{" "}
            <Link
              href={`category/${params.cateName}`}
              className="capitalize hover:underline"
            >
              {params.cateName}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-5 max-w-[1400px] m-auto">
          <div className="flex">
            <div className="w-[25%] mt-10">
              <CategoryProductsNav />
            </div>
            <div className="w-[75%]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategeryProductsLayout;
