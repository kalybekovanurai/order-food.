import BasketIcon from "./UI/BasketIcon";

interface BasketProps{
  countOfFood:number;
  showOrder:()=>void;
}

function Basket(props: BasketProps) {
  const { countOfFood, showOrder } = props;

  return (
    <div
      onClick={showOrder}
      className="bg-[#5A1F08] rounded-4xl px-[17px] py-[12px] flex items-center gap-[24px] text-white cursor-pointer"
    >
      <div className="flex items-center gap-[12px]">
        <BasketIcon />
        <p>Your cart</p>
      </div>
      <div className="bg-[#8a2b06] py-[4px] px-[20px] rounded-4xl">
        {countOfFood}
      </div>
    </div>
  );
}

export default Basket;
