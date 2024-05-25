import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseList from "./Components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "car", amount: 100, category: "Cars" },
    { id: 2, name: "bag", amount: 98, category: "Clothes" },
    { id: 3, name: "pen", amount: 250.69, category: "Pens" },
    { id: 4, name: "ihpone", amount: 550, category: "Phones" },
    { id: 5, name: "watch", amount: 1000, category: "Watches" },
  ]);
  return (
    <>
      <ExpenseList
        expenses={expenses}
        Delete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
