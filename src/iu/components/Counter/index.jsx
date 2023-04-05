import { useState } from "react"
import { useEffect } from "react"

const Counter =()=>{
    console.log('El componente se carga');
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    useEffect(() => {
        const intervalo = setInterval(() => {
          setCount(count => count + 1);
        }, 1000);
    
        return () => {
          clearInterval(intervalo);
        };
      }, []);
    return <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
    </div>
}

export default Counter