import './ExpenseContainer.css'
import Card from "../ui/Card";
import FilterDropDown from "../ui/FilterDropDown";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const ExpenseContainer = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('');

  const handleFilteredExpense = (selectedYear) => {
      setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  const expenseContnet = () => !filteredYear ? <h1>Choose a year to see your expenses:</h1> : <h1>Expenses</h1>

  return (
    <>
      <Card className="expenses">
        {expenseContnet()}
        <FilterDropDown handleFilteredExpense={handleFilteredExpense} expenses={expenses} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList isSelected={filteredYear} items={filteredExpenses} />
      </Card>
    </>
  );
}

export default ExpenseContainer;