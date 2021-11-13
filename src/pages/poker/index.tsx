import { Layout } from "../../components/molecules/Layout";
import { Footer } from "../../components/molecules/Footer";
import { Poker } from "../../components/poker/Poker";
import { Header } from "../../components/molecules/Header";

export default function App(): JSX.Element {
  return (
    <Layout>
      <Header></Header>
      <Poker></Poker>
      <Footer></Footer>
    </Layout>
  );
}
