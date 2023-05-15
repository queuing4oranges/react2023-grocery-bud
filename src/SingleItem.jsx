import React, { useState }  from 'react'

export default function SingleItem({ name, id, completed, removeItem }) {

const [isChecked, setIsChecked] = useState(completed)
   
    const dynamicStyle = {
        textDecoration: isChecked ? "line-through" : "none"
    }

    return (
        <div>
            <p  style={dynamicStyle}>{name}</p>
            <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={()=>setIsChecked(!isChecked)}
            />
            <button type='button' onClick={()=>removeItem(id)}>Remove Item</button>
        </div>
    )
}
