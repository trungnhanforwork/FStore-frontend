import ProductCard from "./ProductCard";

const HomeProducts = () => {
  return (
    <section className="px-4 py-6">
      <div className="container m-auto px-20">
        <h2 className="text-3xl font-bold text-black mb-10 text-center">
          All Products
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
