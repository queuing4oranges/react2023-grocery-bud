import React, { Fragment } from 'react'
import BinIcon from './BinIcon'

export default function SingleItem({ item, name, id, completed, removeItem, updatedComplete }) {

    return (
        <Fragment>
            <input 
            type="checkbox" 
            checked={item.completed} 
            onChange={()=>updatedComplete(item.id)}
            />

            <div className="text-container">
            <p  
            style={{
            textDecoration: item.completed && 'line-through'
            }}>{item.name}</p>
            </div>

            <button type='button' onClick={()=>removeItem(item.id)}>
            <BinIcon width={30} height={25}/>
            </button>
        </Fragment>
    )
}
