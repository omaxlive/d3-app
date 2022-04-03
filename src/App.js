import './App.css';
import BarChart from './BarChart';
import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { REMOTE_DATA_URL } from './constants';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    d3.json(REMOTE_DATA_URL).then((d) => {
      setData(d);
      setLoading(false);
    });
    return () => undefined;
  }, []);

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
