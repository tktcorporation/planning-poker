import { Cards } from "./Cards";
interface Props {
  list: number[];
  backgroundColor: string;
}
export const HandBox = ({ list, backgroundColor }: Props): JSX.Element => {
  return (
    <div className="hand-box" style={{ backgroundColor, padding: "10px 15px" }}>
      <Cards list={list} />
    </div>
  );
};
