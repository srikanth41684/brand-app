import React from "react";
import { getCategoryData } from "../../../../utils";
import Link from "next/link";
import Image from "next/image";

const CategoryDetails = async ({ params }) => {
  const category = await getCategoryData(params.cateName);
  return (
    <div className="h-[100%]">
      <div className="px-5 max-w-[1400px] m-auto">
        <div className="flex flex-col pt-12">
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
