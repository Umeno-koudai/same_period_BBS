import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count_num, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() =>{
        setCount(count_num+1);
        alert(count_num);
      }}>UpButton</button>

      <button onClick={() =>{
        setCount(count_num-1);
        alert(count_num);
      }}>DownButton</button>
    </div>
  );
}

export default App;
