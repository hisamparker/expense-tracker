import './ExpenseItem.css';

const ExpenseItem = ({title, amount, date, key}) => {
  return (
    <article key={key} className="expense-item">
      <p>{date.toDateString()}</p>
      <section className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"><p>${amount}</p></div>
      </section>
    </article>
  );
};
  

export default ExpenseItem;