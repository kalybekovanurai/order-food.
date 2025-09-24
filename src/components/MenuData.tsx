export type MealProps = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export const DUMMY_MEALS: MealProps[] = [
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];
