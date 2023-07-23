import React, { useState } from "react";
import Styles from './calci.module.css';
const Calci=()=> {
    const [input,setInput]=useState("");
    const [result,setResult]=useState(0);
    const [AcActivate, setAcActivate]=useState(false);
    const HandleAcActivate=()=>{
        setAcActivate(!AcActivate);
    }
    
    const calculateResult = (input) => {
        
          const result = new Function('return '+input)();
          return isNaN(result) ? "Invalid Expression" : result;
        
    }
    return(
            <div className={Styles.Container}>
            <input style={{backgroundColor: AcActivate ? "black" : "lightblue"}} type="text" name="Expression" value={AcActivate ? ' ' : input } onChange={(e)=>setInput(e.target.value)}/><br/><br/>
            <button onClick={()=>setResult(calculateResult(input))} className={Styles.result}>Result</button>
            <h1>Result: {result}</h1>    
            <div className={Styles.Buttons}>
            <div className={Styles.Operands}>
            <button onClick={()=>setInput(input+"1")} >1</button>
            <button onClick={()=>setInput(input+"2")} >2</button>
            <button onClick={()=>setInput(input+"3")} >3</button>
            <button onClick={()=>setInput(input+"4")} >4</button>
            <button onClick={()=>setInput(input+"5")} >5</button>
            <button onClick={()=>setInput(input+"6")} >6</button>
            <button onClick={()=>setInput(input+"7")} >7</button>
            <button onClick={()=>setInput(input+"8")} >8</button>
            <button onClick={()=>setInput(input+"9")} >9</button>
            <button onClick={()=>setInput("")} >Clr</button>  
            <button onClick={()=>setInput(input+"0")} >0</button>
            <button style={{backgroundColor: AcActivate ? "red" : "Green"}} onClick={HandleAcActivate} >AC</button>
            </div>
            <div className={Styles.Operators}>
            <button onClick={()=>setInput(input+"+")} >+</button>
            <button onClick={()=>setInput(input+"-")} >-</button>
            <button onClick={()=>setInput(input+"*")} >*</button>
            <button onClick={()=>setInput(input+"/")} >/</button>
            </div>            
            </div>     
        </div>
    )
}
export default Calci;