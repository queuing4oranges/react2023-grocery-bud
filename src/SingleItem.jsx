import React, { useState }  from 'react'

export default function SingleItem({ item, name, id, completed, removeItem, updatedComplete }) {

// const [isChecked, setIsChecked] = useState(completed)
   
    console.log(completed)
    console.log(id)

    // const dynamicStyle = {
    //     textDecoration: item.completed ? "line-through" : "none"
    // }

    return (
        <div>
            {/* <p  style={dynamicStyle}>{item.name}</p> */}
            <p  style={{
                textDecoration: item.completed && 'line-through'
            }}>{item.name}</p>
            <input 
            type="checkbox" 
            checked={item.completed} 
            onChange={()=>updatedComplete(item.id)}
            />
            <button type='button' onClick={()=>removeItem(item.id)}>Remove Item</button>
        </div>
    )
}
