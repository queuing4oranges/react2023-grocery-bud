import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

//components:
import Form from "./Form";
import Items from "./Items";

const App = () => {
 const [items, setItems] = useState("")

  useEffect(() =>{
    const storedItems = localStorage.getItem('items')
    if(storedItems){
      setItems(JSON.parse(storedItems))
    }
    }, [])

  useEffect(() => {
    const saveItems = localStorage.setItem('items', JSON.stringify(items))
    console.log(localStorage)
    }, [items])



 const removeItem = async (id) => {
  try {
    const removeArray = items.filter((item) => item.id !== id);
    setItems(removeArray)
    toast.success("Item deleted", {
      autoClose: 1500, 
      pauseOnHover: true, 
      icon: "☠️"
    })
    } catch(error) {
    console.log(error)
    }
  }


  return (
  <div>
    <ToastContainer position="top-center" />
    <h2>Grocery Bud</h2>
    <Form setItems={setItems} items={items}/>
    <Items items={items} removeItem={removeItem} /> 
  </div>
  )
};

export default App;
