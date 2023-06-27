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
    <div>
      <div>
        <div>
          {product?.images?.map((item, index) => {
            return (
              <button key={index} onClick={() => imagesetHandler(item)}>
                <Image src={item} width={100} height={100} alt="product" />
              </button>
            );
          })}
        </div>
        <div>
          <Image src={commObj.imgUrl} width={500} height={700} alt="product" />
        </div>
        <div>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>
            <button onClick={() => cartHandler(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
