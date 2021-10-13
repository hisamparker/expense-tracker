import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [form, setForm] = useState({
    title: "",
    amount: 0.00,
    date: new Date(),
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const expenseData = {
      title: form.title,
      amount: form.amount,
      date: new Date(form.date)
    };

    console.log(expenseData);
  };
  
  return (

    <form onSubmit={handleSubmit}>
    <div className="controls">
      <div className="control">
        <label>Title</label>
        <input 
          type="text" 
          name="title"
          value={form.title}
          onChange={handleForm}
        />
      </div>
      <div className="control">
        <label>Amount</label>
        <input
          name='amount'
          value={form.amount}
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
          value={form.date}
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