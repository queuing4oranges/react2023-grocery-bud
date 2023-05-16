import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

//components:
import Form from "./Form";
import Items from "./Items";

const App = () => {
 const [items, setItems] = useState("")

//getting items on first render
  useEffect(() =>{
    const storedItems = localStorage.getItem('items')
    if(storedItems){
      setItems(JSON.parse(storedItems))
    }
    }, [])

//setting items dep on whether items change
  useEffect(() => {
    const saveItems = localStorage.setItem('items', JSON.stringify(items))
    console.log(localStorage)
    }, [items])

//updating items with completed props
const updatedComplete = (itemID) => {
  const storedItems = JSON.parse(localStorage.getItem('items')) || []

  const updatedItems = storedItems.map((item) => {
    if(item.id === itemID) {
      return {
        ...item, 
        completed: !item.completed
      };
    }
    return item;
  })
  setItems(updatedItems)  //setting items again to updated items
  localStorage.setItem('item', JSON.stringify(updatedItems)) //saving updated version in localstorage
}

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
  <div className="grocery-container">
    <ToastContainer position="top-center" />
    <h2 className="title">Grocery Bud</h2>
    <Form setItems={setItems} items={items}/>
    <Items items={items} removeItem={removeItem} updatedComplete={updatedComplete}/> 
  </div>
  )
};

export default App;
