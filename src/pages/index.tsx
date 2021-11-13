import { About } from "../components/organisms/About";
import { Layout } from "../components/molecules/Layout";
import { Footer } from "../components/molecules/Footer";
import { Header } from "../components/molecules/Header";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </Layout>
  );
}
