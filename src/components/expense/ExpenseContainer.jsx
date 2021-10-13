import ExpenseItem from "./ExpenseItem";
import './ExpenseContainer.css'
import Card from "../ui/Card";

const ExpenseContainer = ({ expenses }) => {
  return (
    <>
      <Card className="expenses">
        <h1>Expenses</h1>
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </>
  );
}

export default ExpenseContainer;