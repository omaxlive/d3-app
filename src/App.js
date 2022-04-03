import './App.css';
import BarChart from './BarChart';
import { data as dataExample } from './data';
import { useState } from 'react';
function App() {
  const [data, setData] = useState(dataExample);

  return (
    <div className='App'>
      <button
        onClick={() =>
          setData([...data, { year: 2011, sales: 1, efficiency: 100 }])
        }
      >
        Add item
      </button>
      <div className='chart-container'>
        <BarChart data={data} />
        <BarChart data={data} />
      </div>
    </div>
  );
}

export default App;
