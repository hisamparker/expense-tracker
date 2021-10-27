import './NewExpense.css';
import Form from '../form/Form';

const NewExpense = ({onAddExpense}) => {
  const handleSubmitExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random()
    }
    onAddExpense(expenseData);
  }
  return (
    <article className="new-expense">
      <Form onSubmitExpenseData={handleSubmitExpenseData} />
    </article>
  )
}

export default NewExpense;