import React, { useState, useEffect } from "react";
 
const SecondsCounter = () => {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
    
    return (
<h1 className="counter">{count}</h1>
    );
};
 
export default SecondsCounter;