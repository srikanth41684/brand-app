import React from "react";
import { getProductData } from "../../../../../utils";
import ProductDetailsCard from "../../../../../components/ProductDetailsCard";
import Link from "next/link";

const ProductDetails = async ({ params }) => {
  const product = await getProductData(params.product);
  return (
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
            href={`/category/${params.cateName}`}
            className="capitalize hover:underline"
          >
            {params.cateName.replace("-", " ")}
          </Link>{" "}
          -{" "}
          <Link
            href={`/category/${params.cateName}/${params.product}`}
            className="capitalize hover:underline"
          >
            {params.product}
          </Link>
        </div>
        <ProductDetailsCard product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
