import type { MenuTypes } from "../App";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

interface OrderProps {
  onClose: () => void;
  orders: MenuTypes[];
  onPlus: (id: string) => void;
  onMinus: (id: string) => void;
}

function Orders({ onClose, orders, onPlus, onMinus }: OrderProps) {
  const renderOrders = () =>
    orders.map((item) => (
      <OrderItem {...item} key={item.id} onPlus={onPlus} onMinus={onMinus} />
    ));

  return (
    <div className="max-w-[671px] w-[600px] bg-white rounded-2xl p-[32px] overscroll-contain">
      {renderOrders()}
      <OrderTotal onClose={onClose} orders={orders}/>
    </div>
  );
}

export default Orders;
