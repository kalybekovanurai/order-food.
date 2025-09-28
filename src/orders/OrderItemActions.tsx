import Button from "../components/UI/Button";
import Minus from "../components/UI/Minus";
import Plus from "../components/UI/Plus";

interface OrderItemActionsProps {
  onPlus: () => void;
  onMinus: () => void;
}

function OrderItemActions({ onPlus, onMinus }: OrderItemActionsProps) {
  return (
    <div className="flex items-center gap-[14px]">
      <Button size="small" variant="outline" onClick={onPlus}>
        <Plus />
      </Button>
      <Button size="small" variant="outline" onClick={onMinus}>
        <Minus />
      </Button>
    </div>
  );
}
export default OrderItemActions;
