import { useState,useEffect,useRef } from 'react'
import './App.css'
import { Scroll } from './components/Scroll';

function App() {
  const [count, setCount] = useState(20);
  const intervalRef = useRef(null);

  useEffect(() => {
    const clearUp = () =>{
      handlePause()
    }
    return clearUp;
  }, []);

  const handleStart = () =>{
    intervalRef.current = setInterval(()=>{
      setCount((prevCount)=>{
        if(prevCount <= 0){
          clearInterval(intervalRef.current)
        }
        return prevCount - 1;
      })
    },1000)
  }
  const handlePause = () =>{
    clearInterval(intervalRef.current)
  }
  const handleReset = () =>{
    handlePause()
    setCount(20)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <Scroll />
    </div>
    
  )
}

export default App
