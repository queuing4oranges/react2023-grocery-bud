import React from 'react'
import SingleItem from './SingleItem'

export default function Items({ items, removeItem, updatedComplete }) {

  return (
    <div>
        {items.length !== 0 ? 
        <div className='items-container'> 
        {items.map((item) =>(
        <section key={item.id}>
            <SingleItem 
            item={item}
            removeItem={removeItem}
            updatedComplete={updatedComplete} />
        </section>
        ))}
        </div>
        : false
        }


    </div>
  )
}
