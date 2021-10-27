import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = ({items, isSelected}) => {
  if (items.length === 0 && isSelected) {
    return <h2 className='expenses-list__fallback'>No expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;