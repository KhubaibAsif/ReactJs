import { useState } from 'react';
import './App.css';

function App() {
  // const [counter, setCounter] = useState(10);
  const [color, setColor] = useState('black');

  // const incrementCounter = () => {
  //   setCounter(counter + 1);
  // };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div>
        <button onClick={() => changeColor('green')} style={{ marginRight:20}}>Green</button>
        <button onClick={() => changeColor('white')}>white</button>
        <div style={{
          height: 200,
          width: '100%',
          borderStyle:'solid',
          borderColor:'black',  
          marginTop:15,
          backgroundColor: color,
        }}>
        </div>
      </div>
    </>
  );
}

export default App;