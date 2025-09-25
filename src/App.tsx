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

export interface FoodTypes {
  id: string;
  amount: string;
}

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

  const [order, setOrder] = useState<OrderTypes[]>([]);

  const addOrderHandler = (params: FoodTypes) => {
    const { id, amount } = params;
    const food = meals.find((item) => item.id === id);
    if (!food) return;

    const existingFood = order.find((item) => item.id === id);

    if (!existingFood) {
      const newFood = { ...food, amount: Number(amount) };
      setOrder((prev) => [...prev, newFood]);
    } else {
      const updatedOrder = order.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount + Number(amount) }
          : item
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
