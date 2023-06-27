import React from "react";
import { getCategoryData, getProductData } from "../../../../../utils";
import ProductDetailsCard from "../../../../../components/ProductDetailsCard";
import Link from "next/link";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
  const product = await getProductData(params.product);
  const relatedProducts = await getCategoryData(params.cateName);
  return (
    <div className="bg-slate-50">
      <div className="px-5 max-w-[1400px] m-auto pb-10">
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
        <div className="mt-10 bg-white shadow p-5">
          <div className="text-3xl pb-5">Related Products</div>
          <div className="flex flex-wrap">
            {relatedProducts?.products?.map((item, index) => {
              return (
                <div key={index} className="w-[20%] pr-5 pb-5">
                  <Link href={`/category/${item.category}/${item.id}`}>
                    <div className="bg-white shadow hover:shadow-lg h-[341px] p-3 rounded">
                      <div className="w-90% h-56 relative">
                        <Image
                          src={item.thumbnail}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[100%] h-[230px]"
                          alt="nex products"
                        />
                      </div>
                      <div className="pt-5">
                        <div>${item.price}</div>
                        <div className="capitalize pt-1">{item.title}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
