import ExpenseItem from "./ExpenseItem";
import './ExpenseContainer.css'
import Card from "../ui/Card";
import FilterDropDown from "../ui/FilterDropDown";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const ExpenseContainer = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('');

  const handleFilteredExpense = (selectedYear) => {
      setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  return (
    <>
      <Card className="expenses">
        <h1>Expenses</h1>
        <FilterDropDown handleFilteredExpense={handleFilteredExpense} expenses={expenses} />
        <ExpensesList isSelected={filteredYear} items={filteredExpenses} />
      </Card>
    </>
  );
}

export default ExpenseContainer;