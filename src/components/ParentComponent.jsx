import { useState } from "react";
import  UseColor  from "../UseContext";
import ChildComponent from './ChildComponent';

// Create Parent Component
function ParentComponent(){
    const [color,setColor] = useState('#000000');
    return(<>
        <div style={{margin:'50px 100px'}}>
            <h1>Select Color <span>&#128150; &#128153; &#128154; &#128155; &#128156;</span> </h1>
            <input  
                type="color" 
                style={{
                    width:'100px',
                    height:'50px',
                }}
                onChange={(e)=>{
                    setColor(e.target.value);
                }}
                value={color} 
            />
            <div style={{margin:'50px 100px'}}>
                <UseColor.Provider value={color}>
                    <ChildComponent/>
                </UseColor.Provider>
            </div>
        </div>
    </>)
}

export default ParentComponent;