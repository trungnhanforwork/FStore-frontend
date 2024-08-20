import CategoryBoxes from "./components/CategoryBoxes";
import Hero from "./components/Hero";
import HomeProducts from "./components/HomeProducts";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <CategoryBoxes />
        <HomeProducts />
      </Layout>
    </>
  );
};
export default App;
