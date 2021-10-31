import About from "../components/organisms/About";
import Layout from "../components/components/Layout";
import Footer from "../components/components/Footer";
import Header from "../components/components/Header";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </Layout>
  );
}
