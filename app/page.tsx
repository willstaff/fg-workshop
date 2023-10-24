import Link from "next/link";
import api from "@/api";
import ProductCard from "@/components/ProductCard";
import Grid from "@/components/Grid";

const HomePage = async () => {
  const products = await api.product.list();
  return (
    <Grid>
      {products.map((product, index) => (
        <Link key={index} href={`/product/${product.handle}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </Grid>
  );
};

export default HomePage;