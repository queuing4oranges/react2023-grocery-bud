import React from 'react'
import SingleItem from './SingleItem'

export default function Items({ items, removeItem, updatedComplete }) {

  return (
    <div>
        {items.length !== 0 ? 
        <div> 
        {items.map((item) =>(
        <div key={item.id}>
            <SingleItem 
            // name={item.name} 
            // id={item.id} 
            // completed={item.completed} 
            item={item}
            removeItem={removeItem}
            updatedComplete={updatedComplete} />
        </div>
        ))}
        </div>
        : false
        }


    </div>
  )
}
