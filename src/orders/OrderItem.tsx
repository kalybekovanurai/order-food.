import type { MenuTypes } from "../App";
import OrderItemActions from "./OrderItemActions";
import OrderItemInfo from "./OrderItemInfo";

interface OrderItemProps extends MenuTypes {
  onPlus: (id: string) => void;
  onMinus: (id: string) => void;
}

function OrderItem({
  id,
  title,
  price,
  amount,
  onPlus,
  onMinus,
}: OrderItemProps) {
  return (
    <div className="flex items-center justify-between">
      <OrderItemInfo price={price} amount={amount || "1"} title={title} />
      <OrderItemActions onPlus={() => onPlus(id)} onMinus={() => onMinus(id)} />
    </div>
  );
}
export default OrderItem;
