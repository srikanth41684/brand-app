"use client";

import Image from "next/image";
import { useContext, useState } from "react";

const ProductDetailsCard = ({ product }) => {
  const [commObj, setCommObj] = useState({
    imgUrl: product.images[0],
  });

  const imagesetHandler = (item) => {
    setCommObj((prev) => ({
      ...prev,
      imgUrl: item,
    }));
  };

  const cartHandler = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-white p-5 shadow rounded">
      <div className="flex gap-5">
        <div className="w-[35%]">
          <div>
            <Image
              src={commObj.imgUrl}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[500px] object-cover rounded"
              alt="product"
            />
          </div>
          <div className="flex gap-3 pt-5 justify-center">
            {product?.images?.map((item, index) => {
              return (
                <button key={index} onClick={() => imagesetHandler(item)}>
                  <Image
                    src={item}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="product"
                    className="w-[70px] h-[70px] rounded"
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-[65%]">
          <div>
            <div>{product.title}</div>
            <div>
              <div>{product.rating}</div>
              <div>{product.stock} Stock</div>
              <div>Free shipping</div>
            </div>
            <div>${product.price}</div>
            <div>{product.description}</div>
          </div>
          <div>
            <button onClick={() => cartHandler(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
