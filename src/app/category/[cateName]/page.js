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
              <div key={index} className="w-[20%] pr-5 pb-5">
                <Link href={`${item.category}/${item.id}`}>
                  <div className="bg-white shadow hover:shadow-lg h-[341px] p-3 rounded">
                    <div className="w-90% h-56 relative">
                      <Image
                        src={item.thumbnail}
                        layout="fill"
                        objectFit="contain"
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
  );
};

export default CategoryDetails;
