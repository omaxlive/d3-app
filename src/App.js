import './App.css';
import BarChart from './components/BarChart';
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
      {!loading && (
        <div className='chart-container'>
          <BarChart id='chart1' data={data} />
          <BarChart id='chart2' data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
