import api from "@/api";
import Stack from "@/components/Stack";
import ProductCard from "@/components/ProductCard";
import Rating from "@/components/Rating";
import { AddToCart } from "@/app/AddToCart";
import { Suspense } from "react";

type Props = {
  params: Record<string, string>;
};

const ProductPage = async ({ params }: Props) => {
  const product = await api.product.fetch(params?.product!);
  return (
    <Stack>
      <ProductCard product={product} />
      <Rating value={5} />
      <Suspense fallback={<p>Loading...</p>}>
        <AddToCart handle={product.handle} />
      </Suspense>
    </Stack>
  );
};

export default ProductPage;