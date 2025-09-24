import { useState } from "react";
import type { MealProps } from "./MenuData";

function MealItem({ id, title, description, price }: MealProps) {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex justify-between items-center border-t border-[#3f3f3f] py-6">
      {/* Левая часть */}
      <div>
        <h3 className="font-[600] text-[18px]">{title}</h3>
        <p className="italic text-[16px] font-[400]">{description}</p>
        <span className="text-[#8a2b06] font-[700] text-[20px]">
          ${price.toFixed(2)}
        </span>
      </div>

      {/* Правая часть */}
      <div className="flex flex-col items-end gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor={`amount-${id}`} className="font-[600] text-[18px]">
            Amount
          </label>
          <input
            id={`amount-${id}`}
            type="number"
            min="1"
            max="10"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="w-14 p-1 border rounded text-center"
          />
        </div>

        <button className="bg-orange-800 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
          + Add
        </button>
      </div>
    </div>
  );
}

export default MealItem;
