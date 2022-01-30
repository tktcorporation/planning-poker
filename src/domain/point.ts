export class Point {
  constructor(public readonly value: number) {}
}

export class Planner {
  constructor(public readonly name: string) {}
}

export class Plan {
  constructor(
    public readonly planner: Planner,
    public readonly points: Point,
  ) {}
}

export class PlanList {
  constructor(private readonly plans: Plan[]) {}

  getPlans = (): Plan[] => this.plans;
  calculateAverage = (): number =>
    this.plans.reduce((acc, plan) => acc + plan.points.value, 0) /
    this.plans.length;
}
