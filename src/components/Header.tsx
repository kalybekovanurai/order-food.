import Basket from "./Basket";
import type { OrderTypes } from "../App";

function Header(props: { countOfFood: OrderTypes[] }) {
  const { countOfFood } = props;

  const getBasketFoodCount = () => {
    return countOfFood.reduce((acc, item) => acc + item.amount, 0);
  };

  return (
    <header className="bg-[#8A2B06] w-full fixed z-10">
      <div className="flex items-center justify-between text-white py-[21px] w-[1000px] m-auto">
        <h1 className="text-3xl font-bold">ReactMeals</h1>
        <Basket countOfFood={getBasketFoodCount()} />
      </div>
    </header>
  );
}

export default Header;
