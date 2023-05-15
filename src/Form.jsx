import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";

export default function Form({ setItems, items }) {
    const [input, setInput] = useState("") //init with empty string or empty array?

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input)
        try {
            if (input==="") {   //validation dep. on array or str
            console.log("value empty")
            toast.success("No item to add yet", {
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
                autoClose: 1500, 
                pauseOnHover: true, 
            })
            }
        } catch(error) {
            console.error("Failed to copy text: ", error)
        }

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setInput(e.target.value)} type="text" />
            <button type="submit">Add Item</button>
        </form>

    </div>
  )
}
