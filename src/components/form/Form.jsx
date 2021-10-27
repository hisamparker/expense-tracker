import { useState } from 'react';
import './Form.css';

const Form = ({onSubmitExpenseData}) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    // if we use an arrow function inside the useState setter function, we ensure that the previous state is correctly passed in
    // this is a best practice because React manages updates and if we try to pass previous state ourselves, then we could get out of synch with React 
    setForm((previousState) => ({
      // by spreading in the previous state, we ensure that we don't lose the state for the rest of the objects
      ...previousState,
      [name]: value,
    }));
  }

  const clearForm = () => {
    setForm({
      title: "",
      amount: "",
      date: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const expenseData = {
      title: form.title,
      amount: form.amount,
      date: new Date(form.date)
    };

    onSubmitExpenseData(expenseData);

    clearForm();

    console.log(expenseData);
  };

  const {title, amount, date} = form;
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="controls">
      <div className="control">
        <label>Title</label>
        <input 
          type="text" 
          name="title"
          value={title}
          onChange={handleForm}
        />
      </div>
      <div className="control">
        <label>Amount</label>
        <input
          name='amount'
          value={amount}
          type="number"
          min="0.01"
          step="0.01"
          onChange={handleForm}
        />
      </div>
      <div className="control">
        <label>Date</label>
        <input
          name="date"
          value={date}
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={handleForm}
        />
      </div>
    </div>
    <div className="actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
  )
}

export default Form;