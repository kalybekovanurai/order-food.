import type { MenuTypes } from "../../App";
import MenuActions from "./MenuActions";
import MenuInfo from "./MenuInfo";

function MenuItem(props: MenuTypes & { onAdd: (params: MenuTypes) => void }) {
  const { title, id, description, price, onAdd } = props;

  return (
    <div className="flex items-center justify-between border-b py-[24px] border-b-[#d6d6d6]">
      <MenuInfo title={title} id={id} description={description} price={price} />
      <MenuActions onAdd={onAdd} id={id} title={title} description={description} price={price}/>
    </div>
  );
}

export default MenuItem;
