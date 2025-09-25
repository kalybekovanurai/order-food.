import type { MenuTypes } from "../../App";

function MenuInfo(props:MenuTypes){
  const {title, description, price}=props;
    return (
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-base italic">{description}</p>
        <p className="text-[#ad5502] text-xl font-bold">${price}</p>
      </div>
    );
}
export default MenuInfo;