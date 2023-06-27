import React from "react";
import { getCategoryData } from "../../../../utils";
import Link from "next/link";
import Image from "next/image";
import CategoryProductsNav from "../../../../components/CategoryProductsNav";

const CategoryDetails = async ({ params }) => {
  const category = await getCategoryData(params.cateName);
  return (
    <div className="h-[100%]">
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
      <div className="flex gap-5 px-5 max-w-[1400px] m-auto">
        <div className="w-[25%] mt-10">
          <CategoryProductsNav />
        </div>
        <div className="flex flex-col pt-12 w-[75%]">
          {category?.products?.map((item, index) => {
            return (
              <div key={index}>
                <Link href={`${item.category}/${item.id}`}>
                  <div className="flex gap-5">
                    <div>
                      <Image
                        src={item.thumbnail}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[200px] h-[200px] object-cover rounded"
                        alt="product"
                      />
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div>
                        <div>{item.rating}</div>
                        <div>{item.stock} Stock</div>
                        <div>Free shipping</div>
                      </div>
                      <div>${item.price}</div>
                      <div>{item.description}</div>
                    </div>
                  </div>
                </Link>
                <div className="py-7">
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
