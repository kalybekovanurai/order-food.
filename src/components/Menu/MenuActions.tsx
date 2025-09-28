import { useRef } from "react";
import Plus from "../UI/Plus";
import Button from "../UI/Button";
import type { MenuTypes } from "../../App";



function MenuActions(props: {
  onAdd: (food: MenuTypes) => void;
  id: string;
    title: string; 
  description: string; 
  price: number; 

}){

  const { onAdd, id, title, description, price } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

const amount = inputRef?.current?.value;
    const food = {
     amount : amount ? amount:'1',
     id:id,
     title:title,
     description:description,
     price:price,
    };

    onAdd(food);
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-end">
      <div className="flex items-center justify-end gap-[32px] mb-[16px]">
        <p>Amount</p>
        <input
          ref={inputRef}
          defaultValue={1}
          type="number"
          min="1"
          className="border border-[#d6d6d6] rounded-md w-[60px] px-[12px] py-[4px]"
        />
      </div>
      <Button type="submit" variant="primary" size="large" leftIcon={<Plus />}>
        Add
      </Button>
    </form>
  );
}

export default MenuActions;
