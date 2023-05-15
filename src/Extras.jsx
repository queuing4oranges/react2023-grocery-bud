
const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        //if the list exist - parse it 
        list = JSON.parse(localStorage.getItem('list'))
    }else {
        //if not - make at least an empty array out of it!
        list = [];
    }
}

//written as a one-liner:
// const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const setLocalStorage = () => {
    localStorage.setItem('list', JSON.stringify(items))
}



const App = () => {
    const [items, setItems] = useState(getLocalStorage)

    //for one-liner:
    // const [items, setItems] = useState(defaultList)

    const addItem = (itemName) => {
        //
        setItems(newItems);
        setLocalStorage(newItems);
    }

    const removeItem = (itemName) => {
        //
        setItems(removeArray);
        setLocalStorage(removeArray);
    }

    const editItem = (itemId) => {
        const newItems = items.map((item) => {
            if(item.id === itemId) {
                const newItem = {...item, completed:!item.completed} //set it opposite to the current value
                return newItem;
            }
            //if id doesnt match, we dont do anything
            return item
        })
        setItems(newItems);
        setLocalStorage(newItems);
    }

    return (
        <div>
        {/* something here */}
        <Items items={items} removeItem={removeItem} editItem={editItem}/>
        </div>
    )



}

//all passed down to SingleItem
 const SingleItem = ({ item, removeItem, editItem }) => {

    //delete local state here - isChecked

    return(
        <div>
            {/* //checked={item.completed}
            //onChange={()=>editItem(item.id)} */}
        </div>
    )

 }