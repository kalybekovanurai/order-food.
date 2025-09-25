import { useRef } from "react";
import Plus from "../UI/Plus";
import Button from "../UI/Button";
import type { FoodTypes } from "../../App";

// Типизация пропсов
type MenuActionsProps = {
  onAdd: (food: FoodTypes) => void;
  id: string;
};

function MenuActions(props: MenuActionsProps) {
  const { onAdd, id } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Берём значение из input, преобразуем в число (строка → number)
    const amount = Number(inputRef.current?.value || 1);

    // Формируем объект по типу FoodTypes
    const food: FoodTypes = {
      amount,
      id,
    };

    // Передаём в родительский компонент
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
