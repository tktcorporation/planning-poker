import { Layout } from "../../components/components/Layout";
import { Footer } from "../../components/components/Footer";
import { Poker } from "./_internal/Poker";
import { Header } from "../../components/components/Header";

export default function App(): JSX.Element {
  return (
    <Layout>
      <Header></Header>
      <Poker></Poker>
      <Footer></Footer>
    </Layout>
  );
}
