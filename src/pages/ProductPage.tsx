import Footer from "../components/Footer";
import Header from "../components/Header";
import Directory from "../components/Product/Directory";
import Sale from "../components/Product/Sale";
import Tribe from "../components/Product/Tribe";

const ProductPage = () => {
  return (
    <>
      <Header />
      <Tribe />
      <Directory />
      <Sale />
      <Footer />
    </>
  );
};

export default ProductPage;
