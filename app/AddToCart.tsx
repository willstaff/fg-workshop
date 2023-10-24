"use client"

import React, { useEffect, useState } from "react";
import api from "@/api";
import AddToCartComponent from "@/components/AddToCart";

type Props = {
  handle: string;
};

export const AddToCart: React.FC<Props> = ({ handle }) => {
  const [productData, setProductData] = useState<any | null>(null); // Replace 'any' with the actual type of productData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.product.fetch(handle);
        setProductData(data);
        setLoading(false);
      } catch (error) {
        // Handle errors if necessary
      }
    };

    fetchData();
  }, [handle]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productData) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <AddToCartComponent inStock={productData.inStock} />
    </div>
  );
};

