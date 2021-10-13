import ExpenseItem from "./components/ExpenseItem";

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
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </div>
  );
}

export default App;