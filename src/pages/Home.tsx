import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Project from "../components/Project";
import Story from "../components/Story";
import Why from "../components/Why";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Why />
      <Project />
      <Product />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
