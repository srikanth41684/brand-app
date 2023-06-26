"use client";
import React from "react";
import { getCategoryData } from "../../../../utils";

const CategoryDetails = async ({ params }) => {
  const category = await getCategoryData(params.cateName);
  console.log("category--->", category);
  return (
    <div>
      <h1>CategoryDetails: {params.cateName}</h1>
    </div>
  );
};

export default CategoryDetails;
