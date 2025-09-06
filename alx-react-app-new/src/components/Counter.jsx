import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div style={{display:'flex',justifyContent:'center',alignContent:'center',gap:10}}>
             <button style={{backgroundColor:'green',border:'none',color:'white',borderRadius:5}} onClick={()=>setCount(prev=>prev+1)}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}>
                    <span>Increment</span>
                    <span>+</span>
                </div>
            </button>
            <button style={{backgroundColor:'red',border:'none',color:'white',borderRadius:5}} onClick={()=>setCount(prev=>prev-1)}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}>
                    <span>Decrement</span>
                    <span>-</span>
                </div>
            </button>
            <button style={{backgroundColor:'orange',border:'none',color:'white',borderRadius:5}} onClick={()=>setCount(0)}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}>
                    <span>Reset</span>
                    <span>0</span>
                </div>
            </button>
            <div>
                <p>Counter is {count}</p>
            </div>
        </div>
    )
}

export default Counter
