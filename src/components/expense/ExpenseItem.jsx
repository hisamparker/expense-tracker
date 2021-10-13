import Date from '../ui/Date';
import Card from '../ui/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = ({title, amount, date, key}) => {
   // function handleOnClick() {}
   const [isTitle, setIsTitle] = useState(title);
   console.log('ExpenseItem evaluated by React');
   
   const handleOnClick = () => {
    setIsTitle('Updated!');
     console.log(isTitle);
   };
  return (
    <Card key={key} className="expense-item">
      <Date date={date} />
      <section className="expense-item__description">
        <h2>{isTitle}</h2>
        <Card className="expense-item__price"><p>${amount}</p></Card>
      </section>
      <button onClick={handleOnClick}>Change Title</button>
    </Card>
  );
};
  

export default ExpenseItem;