import './FilterDropDown.css'

const FilterDropDown = ({expenses, handleFilteredExpense}) => {
  const handleSelectOnChange = (e) => {
    console.log('selected',e.target.value);
    handleFilteredExpense(e.target.value);
  }

  return (
    <section className='filter'>
      <article className='filter__control'>
        <label>Filter by year</label>
        <select onChange={handleSelectOnChange}>
        {expenses.map((expense) => (
          <option key={Math.random()} value={expense.date.getFullYear()}>{expense.date.getFullYear()}</option>
        ))}
        </select>
      </article>
    </section>
  )
}

export default FilterDropDown;