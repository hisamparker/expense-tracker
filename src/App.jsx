import { useState } from "react";
import ExpenseContainer from "./components/expense/ExpenseContainer";
import NewExpense from "./components/expense/NewExpense";

const expensesArray = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 8.29,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'sweater',
    amount: 79.49,
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'coffee beans',
    amount: 14.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'groceries',
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'aspirin',
    amount: 250,
    date: new Date(2019, 5, 12),
  },
]; 


function App() {
  const [expenses, setExpenses] = useState(expensesArray);
  const handleAddExpense = (expense) => {
    setExpenses((previousState) => {
      return [...previousState, expense];
    })
  }
  return (
    <>
      <NewExpense onAddExpense={handleAddExpense} />
      <ExpenseContainer expenses={expenses} />
    </>
  );
}

export default App;