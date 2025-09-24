import { DUMMY_MEALS } from "./MenuData";
import MealItem from "./MenuItem";

function Menu() {
  return (
    <div className="min-h-screen bg-[#3f3f3f] flex items-center justify-center">
      <ul className="bg-white rounded-lg shadow-lg px-6 w-11/12 md:w-3/4 lg:w-2/3">
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} {...meal} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
