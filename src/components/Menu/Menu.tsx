import type { FoodTypes, MenuTypes } from "../../App";
import MenuItem from "./MenuItem";

function Menu(props: {
  menu: MenuTypes[];
  onAdd: (params: FoodTypes) => void;
}) {
  const { menu, onAdd } = props;

  return (
    <div className="bg-[#3d3939] p-[50px]">
      <ul className="max-w-[1000px] m-auto p-[50px] bg-white rounded-2xl">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            id={item.id}
            price={item.price}
            description={item.description}
            onAdd={onAdd}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
