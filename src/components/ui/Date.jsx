import Card from './Card';
import './Date.css'

const Date = ({ date }) => {
  const day = date.toLocaleString('en-US', {day: '2-digit'});
  const month = date.toLocaleString('en-US', {month: 'long'});
  const year = date.getFullYear();

  return (
    <Card className="date">
      <p className="date__day">{day}</p>
      <p className="date__month">{month}</p>
      <p className="date__year">{year}</p>
    </Card>
  )
};

export default Date;