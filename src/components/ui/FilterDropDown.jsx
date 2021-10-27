import { useState } from 'react/cjs/react.development';
import './FilterDropDown.css'

const FilterDropDown = ({expenses, handleFilteredExpense}) => {
  const [selectedYear, setSelectedYear] = useState('');
  
  const handleSelectOnChange = (e) => {
    setSelectedYear(e.target.value)
    handleFilteredExpense(e.target.value);
  }

  const expenseYears = [...new Set(expenses.map((expense) => expense.date.getFullYear()))]

  return (
    <section className='filter'>
      <article className='filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear ? selectedYear : 'Select a Year'} onChange={handleSelectOnChange}>
        {expenseYears.map((year) => (
          <option key={Math.random()} value={year}>{year}</option>
        ))}
        </select>
      </article>
    </section>
  )
}

export default FilterDropDown;