import type { MenuTypes } from "../App";
import Basket from "./Basket";

interface HeaderProps {
  countOfFood:MenuTypes[];
  showOrder: ()=> void;
}

function Header(props: HeaderProps) {
  const { countOfFood, showOrder } = props;

const getBasketFoodCount = () => {
  return countOfFood.reduce((acc, item) => {
    return acc + Number(item.amount ?? 0);
  }, 0);
};


  return (
    <header className="bg-[#8A2B06] w-full fixed z-10">
      <div className="flex items-center justify-between text-white py-[21px] w-[1000px] m-auto">
        <h1 className="text-3xl font-bold">ReactMeals</h1>
        <Basket countOfFood={getBasketFoodCount()} showOrder={showOrder} />
      </div>
    </header>
  );
}

export default Header;
