import {useState} from 'react';
import './counterApp.css';
function CounterApp() {
    let [a,seta] = useState(0);
 
    return (
      <div className="App">
          <h1 style={{color:a<=25?'red':'green'}}>{a}</h1>
          <button onClick={()=>{if(a-1>=0)seta(a-1)}}>Decrement</button>
          <button onClick={()=>{seta(0)}}>set to 0</button>
          <button onClick={()=>{if(a+10<=50)seta(a+10)}}>Increment</button>
      </div>
    
    );
}

export default CounterApp;