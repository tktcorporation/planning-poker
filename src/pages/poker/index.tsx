import { Layout } from "../../components/molecules/Layout";
import { Poker } from "../../components/poker/Poker";
import { Header } from "../../components/molecules/Header";
import { PlanList, Plan } from "../../domain/point";
import { PlanRepository } from "../../repository/planRepository";
// import react
import React from "react";

export default function App(): JSX.Element {
  const list = new PlanRepository().fetchAll();
  const [planList, setPlanList] = React.useState<PlanList>(list);
  return (
    <Layout>
      <Header></Header>
      <Poker planList={planList}></Poker>
    </Layout>
  );
}
