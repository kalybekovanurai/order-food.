import "./index.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import Orders from "./orders/Orders";
import Modal from "./components/UI/Modal";

export interface MenuTypes {
  id: string;
  title: string;
  description: string;
  price: number;
  amount?: string;
}

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
  const [order, setOrder] = useState<MenuTypes[]>([]);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal((prevState) => !prevState);
  };

  // логика добавления в корзину
  const addOrderHandler = (params: MenuTypes) => {
    const { id, title, description, price, amount } = params;
    const existingOrder = order.find((item) => item.id === id);

    const totalAmount = order.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );
    if (totalAmount >= 20) return;

    if (!existingOrder) {
      setOrder([
        ...order,
        {
          id,
          title,
          description,
          price,
          amount: amount ? amount : "1", 
        },
      ]);
    } else {
      const updatedOrders = order.map((item) =>
        item.id === id
          ? {
              ...item,
              amount: String(
                Number(item.amount ? item.amount : 0) +
                  Number(amount ? amount : 1)
              ),
            }
          : item
      );
      setOrder(updatedOrders);
    }
  };

  const minusZakaz = (id: string) => {
    const updatedOrders = order
      .map((item) => {
        if (item.id === id) {
          const currentAmount = Number(item.amount || 0);
          return { ...item, amount: String(currentAmount - 1) };
        }
        return item;
      })
      .filter((item) => Number(item.amount) > 0);

    setOrder(updatedOrders);
  };

  const plusZakaz = (id: string) => {
    const totalAmount = order.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );
    if (totalAmount >= 20) return;

    const updatedOrders = order.map((item) => {
      if (item.id === id) {
        const currentAmount = Number(item.amount || 0);
        return { ...item, amount: String(currentAmount + 1) };
      }
      return item;
    });

    setOrder(updatedOrders);
  };

  return (
    <div>
      <Header countOfFood={order} showOrder={modalHandler} />
      <Summary />
      <Menu menu={meals} onAdd={addOrderHandler} />
      <Modal isOpen={modal} onClose={modalHandler}>
        <Orders
          onClose={modalHandler}
          orders={order}
          onPlus={plusZakaz}
          onMinus={minusZakaz}
        />
      </Modal>
    </div>
  );
}

export default App;
