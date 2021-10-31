import Layout from "../components/components/Layout";
import Footer from "../components/components/Footer";
import { Poker } from "../components/organisms/Poker";

export default function App(): JSX.Element {
  return (
    <Layout>
      <Poker></Poker>
      <Footer></Footer>
    </Layout>
  );
}
