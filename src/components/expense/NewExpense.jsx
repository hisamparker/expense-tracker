import './NewExpense.css';
import Form from '../form/Form';
import { useState } from 'react/cjs/react.development';

const NewExpense = ({onAddExpense}) => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  
  const handleSubmitExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random()
    }
    onAddExpense(expenseData);
  }

  const handleSetIsFormVisible = () => {
    setIsFormVisible(!isFormVisible)
  }
  
  const formView = () => (
    !isFormVisible ?
    (<div><button type="button" onClick={() => setIsFormVisible(!isFormVisible)}>Add a New Expense</button></div>)
    :
    (<Form handleSetIsFormVisible={handleSetIsFormVisible} onSubmitExpenseData={handleSubmitExpenseData} />)
  )
  return (
    <article className="new-expense">
       {formView()}
    </article>
  )
}

export default NewExpense;