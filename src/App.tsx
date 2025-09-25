import "./index.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

export interface MenuTypes {
  id: string; 
  title: string; 
  description: string; 
  price: number; 
}

// тип для данных приходящих из формы (id + количество)
export interface FoodTypes {
  id: string;
  amount: number;
}

// тип для элемента заказа
export type OrderTypes = MenuTypes & { amount: number };

function App() {
  const meals: MenuTypes[] = [
    {
      id: "1",
      title: "Sushi",
      description: "finest fish and veggies",
      price: 22.99,
    },
    {
      id: "2",
      title: "Pizza",
      description: "cheesy and delicious",
      price: 16.0,
    },
    {
      id: "3",
      title: "Barbecue",
      description: "smoky grilled meat",
      price: 12.99,
    },
    {
      id: "4",
      title: "Green Bowl",
      description: "healthy and fresh",
      price: 19.99,
    },
  ];

  // состояние корзины
  const [order, setOrder] = useState<OrderTypes[]>([]);

  // логика добавления в корзину
  const addOrderHandler = (params: FoodTypes) => {
    const { id, amount } = params;

    // находим блюдо по id
    const food = meals.find((item) => item.id === id);
    if (!food) return; // если не нашли — выходим

    // проверяем, есть ли уже это блюдо в корзине
    const existingFood = order.find((item) => item.id === id);

    if (!existingFood) {
      // если блюда нет в корзине — добавляем новое
      const newFood: OrderTypes = { ...food, amount };
      setOrder((prev) => [...prev, newFood]);
    } else {
      // если блюдо уже есть в корзине — увеличиваем количество
      const updatedOrder = order.map((item) =>
        item.id === id ? { ...item, amount: item.amount + amount } : item
      );
      setOrder(updatedOrder);
    }
  };

  return (
    <div>
      <Header countOfFood={order} />
      <Summary />
      <Menu menu={meals} onAdd={addOrderHandler} />
    </div>
  );
}

export default App;
