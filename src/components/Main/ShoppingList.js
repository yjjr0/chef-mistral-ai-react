import {useState} from "react";
import {nanoid} from "nanoid";

function ShoppingList(props) {
    const shoppingList = props.items.map(item =>
    <ShoppingItems key={item.id} {...item} {...props}/>);

    return (
    <>
        <ShoppingForm {...props}/>
        {props.items.length > 0 &&
        <>
            <h3 className="mt-3">Things to buy!</h3>
            <ul className="list-group">
                {shoppingList}
            </ul>
        </>}
    </>)
}

function ShoppingForm(props) {
    function handleAdd(formData) {
        const newItem = {id: `item-${nanoid()}`, name: formData.get("addItem"), useIngredient: false};
        props.setItems(prevItems => [...prevItems, newItem]);
    }

    return (
    <>
        <h2 className="text-warning">Add items:</h2>
        <form className="form-inline mt-4" action={handleAdd}>
            <input className="form-control" name="addItem" type="text" placeholder="e.g eggs" aria-label="add item" />
            <button className="btn btn-outline-success" type="submit">+Add</button>
        </form>
    </>
    );
}

function ShoppingItems(props) {
    const [isEditing, setEditing] = useState(false);

    function handleDelete(id) {
        const remainingItems = props.items.filter(item => id !== item.id);
        props.setItems(remainingItems);
    }

    function handleEdit(formData) {
        const newName = formData.get("editItem");
        const id = formData.get("editItemID");
        const editedItemList = props.items.map(item => {
            return id === item.id ? {...item, name: newName} : item;
        });
        props.setItems(editedItemList);
        setEditing(false);
    }

    const viewTemplate = (
    <>
        <p className="mb-2 font-italic">{props.name}</p>
        <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setEditing(true)}>Edit</button>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    </>);
    
    const editingTemplate = (
    <>
        <form action={handleEdit}>
            <label htmlFor={props.id}>Edit item: </label>
            <input className="form-control border-warning mb-3" name="editItem" type="text" placeholder={props.name} aria-label="edit item"/>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditing(false)}>Cancel</button>
                <button type="submit" className="btn btn-success btn-sm" name="editItemID" value={props.id}>Save</button>
            </div>
        </form>
    </>);

    const styleItems = {
        backgroundColor: "beige",
        borderColor: "bisque",
        borderRadius: "20px",
        borderWidth: "2px",
    }

    return (
        <li className="list-group-item mt-2 mb-2" style={styleItems}>
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    )
}

export default ShoppingList;