import React from "react";

const ProductDetails = ({
  params,
}: {
  params: {
    country: string;
  };
}) => {
  return (
    <div>
      <h1>Details of country {params.country}</h1>
    </div>
  );
};

export default ProductDetails;
