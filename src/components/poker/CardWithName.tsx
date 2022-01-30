import { Text } from "rebass";
import { Card } from "./Card";

interface Props {
  name: string;
  selectedNumber: number | null;
}
export const CardWithName = ({ name, selectedNumber }: Props): JSX.Element => {
  return (
    <div>
      {/* align vertical */}
      <div style={{
        textAlign: "center",
      }}>
        <Card
          text={selectedNumber === null ? "?" : selectedNumber}
          borderColor={"primary"}
          selected={selectedNumber !== null}
        />
        <Text fontSize={[1, 2]}>{name}</Text>
      </div>
    </div>
  );
};
