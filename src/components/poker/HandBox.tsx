import { Cards } from "./Cards";
interface Props {
  list: number[];
  backgroundColor: string;
  onChangeSelected: Parameters<typeof Cards>[0]["onChangeSelected"];
}
export const HandBox = ({
  list,
  backgroundColor,
  onChangeSelected,
}: Props): JSX.Element => {
  return (
    <div className="hand-box" style={{ backgroundColor, padding: "10px 15px" }}>
      <Cards list={list} onChangeSelected={onChangeSelected} />
    </div>
  );
};
