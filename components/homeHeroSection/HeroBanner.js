"use client";

import Image from "next/image";
import baneer from "/public/hero-banner.png";
import phone from "/public/hero-phone.png";
import { useEffect, useState } from "react";

const baneerImage = [
  {
    id: 1,
    title: "Electronic items",
    res: "Latest trending",
    src: baneer,
  },
  {
    id: 2,
    title: "Best Smartphones",
    res: "Latest delas",
    src: phone,
  },
];

const HeroBanner = () => {
  const [heroImage, setHeroImage] = useState(baneerImage[1]);

  // useEffect(() => {
  //   setTimeout(() => {});
  // });
  return (
    <div className="relative flex">
      <Image src={heroImage.src} alt="banner" />
      <div className="absolute top-12 left-20">
        <div>
          <div></div>
          <div>
            <div className="text-2xl">{heroImage.res}</div>
            <div className="text-3xl font-semibold">{heroImage.title}</div>
            <button className="bg-orange-500 hover:bg-orange-600 mt-5 text-white py-2 px-4 rounded border-0">View more</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroBanner;
