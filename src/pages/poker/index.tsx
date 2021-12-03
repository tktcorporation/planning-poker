import { Layout } from "../../components/molecules/Layout";
import { Poker } from "../../components/poker/Poker";
import { Header } from "../../components/molecules/Header";

export default function App(): JSX.Element {
  return (
    <Layout>
      <Header></Header>
      <Poker></Poker>
    </Layout>
  );
}
