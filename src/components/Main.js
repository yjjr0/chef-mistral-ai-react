import {useState} from "react";
import MainContent from "./Main/MainContent";
import PageCards from "./Main/PageCards";
import ShoppingList from "./Main/ShoppingList";
import RecipeGenerator from "./Main/RecipeGenerator";

function Main(props) {
    const [items, setItems] = useState([]);

    function renderMainPage() {
        if (props.view === "home") {
            return (
            <>
                <MainContent />
                <PageCards setView={props.setView} />
            </>)
        } else if (props.view === "shoppingList") {
            return <ShoppingList items={items} setItems={setItems} />
        } else if (props.view === "recipeGenerator") {
            return <RecipeGenerator items={items} setItems={setItems} setView={props.setView} />
        } else {
            return <></>
        } 
    }

    return (
        <main className="container my-5">
            <div className="row">
                <div className="col-lg-8">
                    {renderMainPage()}
                </div>
            </div>
        </main>
    )
}

export default Main;