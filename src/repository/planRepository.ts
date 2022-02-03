import { Plan, Planner, Point, PlanList } from "../domain/point";

const planList = [
  new Plan(new Planner("planner1"), new Point(1)),
  new Plan(new Planner("planner2"), new Point(2)),
  new Plan(new Planner("planner3"), new Point(3)),
];

export class PlanRepository {
  fetchAll = (): PlanList => new PlanList(planList);

  add = (plan: Plan): void => {
    planList.push(plan);
  };
}
