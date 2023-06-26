import React from "react";

const CategoryDetails = ({ params }) => {
  return (
    <div>
      <h1>CategoryDetails: {params.cateName}</h1>
    </div>
  );
};

export default CategoryDetails;
