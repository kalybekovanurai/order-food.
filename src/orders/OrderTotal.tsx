import type { MenuTypes } from "../App";
import Button from "../components/UI/Button";

function OrderTotal({ onClose, orders }: { onClose: () => void; orders: MenuTypes[] }) {
  const totalAmount = orders.reduce((acc, item) => {
    const amount = Number(item.amount) || 1;
    return Math.round(acc + item.price * amount);
  }, 0 );

  return (
    <div>
      <div className="flex justify-between mt-7 gap-4">
        <div className="font-bold text-2xl">Total Amount</div>
        <div className="text-[#ad5502] text-xl font-bold">${totalAmount}</div>
      </div>
      <div className="flex justify-end mt-6 gap-2">
        <Button size="small" variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button size="small" variant="primary">
          Open
        </Button>
      </div>
    </div>
  );
}
export default OrderTotal;
