import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";

export default function Form({ setItems }) {
    const [input, setInput] = useState("") //init with empty string or empty array?


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (input==="") {   //validation dep. on array or str
            console.log("value empty")
            toast.success("No item to add.", {
                autoClose: 1500, 
                pauseOnHover: true, 
                icon: "🤯"
            })
            } else {
            console.log("submitted")
            const nano = nanoid();
            const newItem = {
                name: input, 
                completed: false, 
                id: nano
            }
            // console.log(newItem)
            await setItems((prevItems) => [...prevItems, newItem])
            toast.success("item added", {
                autoClose: 500, 
                pauseOnHover: true, 
                icon: "🦁"
            })
            }
        } catch(error) {
            console.error("Failed to copy text: ", error)
        }
        setInput("")
    }


  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
            <button type="submit">Add Item</button>
        </form>

    </div>
  )
}
