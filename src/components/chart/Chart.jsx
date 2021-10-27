import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({data}) => {
  const values = data.map((datum) => datum.value);
  const highestValue = Math.max(...values)

  return (
    <article className="chart">
      {data.map((datum) => 
          <ChartBar 
            key={datum.id}
            value={datum.value}
            maxValue={highestValue}
            label={datum.label}
          />
        ) 
      }
    </article>
  )   
}

export default Chart;