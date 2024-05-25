import { Slot } from "@/types";
import { Container } from "./styles";

type SlotLevelProps = {
  slotLevel: Slot;
  index: number;
  reduceUsedSlot: () => void;
};

export function SlotLevel(props: SlotLevelProps) {
  const { slotLevel, index, reduceUsedSlot } = props;

  const getSlotClassName = (index: number, available: number) => {
    return index + 1 > available ? "square unfilled" : "square";
  };

  return (
    <Container className="flex_ccc" onClick={() => reduceUsedSlot()}>
      <p className="level">Nv.{index + 1}</p>
      <div className="slots flex_csr">
        {Array(slotLevel.max)
          .fill(null)
          .map((_, i) => (
            <div key={i} className={getSlotClassName(i, slotLevel.available)} />
          ))}
      </div>
    </Container>
  );
}
