interface OrderItemInfoProps{
    title:string;
    price:number;
    amount:string;
}

function OrderItemInfo({title, price, amount}: OrderItemInfoProps) {
  return (
    <div className="flex flex-col border-b border-[#d6d6d6] p-6">
      <p className="text-lg font-bold">{title}</p>
      <div className="flex flex-row mt-3 gap-[47px]">
        <p className="text-[#ad5502] text-xl font-bold">${price}</p>
        <div className="rounded-[6px] w-[46px] h-[36px] text-base font-bold flex items-center justify-center border">
          {amount}x
        </div>
      </div>
    </div>
  );
}
export default OrderItemInfo;
