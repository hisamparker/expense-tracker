import ExpenseContainer from "./components/expense/ExpenseContainer";
import NewExpense from "./components/expense/NewExpense";

function App() {
  const expenses = [
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
  ]; 
  return (
    <>
      <ExpenseContainer expenses={expenses} />
      <NewExpense />
    </>
  );
}

export default App;