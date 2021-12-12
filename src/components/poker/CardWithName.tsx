import { Text } from "rebass";
import { Card } from "./Card";

interface Props {
  name: string;
  selectedNumber: number | null;
}
export const CardWithName = ({ name, selectedNumber }: Props): JSX.Element => {
  return (
    <div>
      <div>
        <Text>{name}</Text>
      </div>
      <Card
        text={selectedNumber === null ? "?" : selectedNumber}
        borderColor={"primary"}
        selected={selectedNumber !== null}
      />
    </div>
  );
};
