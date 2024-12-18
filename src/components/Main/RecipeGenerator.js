import {useState, useRef, useEffect} from "react";
import {generateRecipeFromAI} from "./ai";
import ReactMarkdown from "react-markdown";

function RecipeGenerator(props) {
    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null);

    const currentIngredients = props.items.map(item =>
    <IngredientsList key={item.id} {...item} {...props}/>);

    const checkedIngredients = props.items.filter(item => item.useIngredient);

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behaviour: "smooth"})
        }
    }, [recipe])

    function renderRecipeSection() {
        if (props.items.length < 5) {
            return (
            <p>
                <a href="#" onClick={() => props.setView("shoppingList")}>Get</a> more ingredients for a better result
            </p>)
        } else if (checkedIngredients.length < 5) {
            return <p className="text-danger">Select at least 5 ingredients</p>
        } else {
            return <GetRecipe ingredients={checkedIngredients} setRecipe={setRecipe}/>
        }
    }

    return (
    <>
        <div className="container">
            <h2 className="text-warning">Select ingredients to work with:</h2>
            <ul className="list-group">
                {props.items.length === 0 ? "You have no ingredients!" : currentIngredients} 
            </ul>
        </div>

        <div className="container mb-5" ref={recipeSection}>
            {renderRecipeSection()}
        </div>

        <ReactMarkdown>
            {recipe}
        </ReactMarkdown>
    </>
    )
}

function IngredientsList(props) {
    const styleItems = {
        backgroundColor: "beige",
        borderColor: props.useIngredient ? "green" : "bisque",
        borderRadius: "20px",
        borderWidth: "2px",
    }

    function addIngredient(id) {
        const editedIngredientList = props.items.map(item => {
            return id === item.id ? {...item, useIngredient: !item.useIngredient} : item;
        });
        props.setItems(editedIngredientList);
    }

    return (
    <li className="list-group-item mt-2 mb-2" style={styleItems}>
        <div className="container d-flex justify-content-between align-items-center">
        {props.name}
        <input className="form-check-input"
               checked={props.useIngredient}
               type="checkbox"
               onClick={() => addIngredient(props.id)}/>
        </div>
    </li>)
}

function GetRecipe(props) {
    async function generateRecipe() {
        const generatedRecipe = await generateRecipeFromAI(props.ingredients.map(ingredient => ingredient.name));
        props.setRecipe(generatedRecipe);
    }

    return (
    <div className="p-3 mt-5" style={{backgroundColor: "beige"}}>
        <h4>Ready for a recipe?</h4>
        <div className="d-flex justify-content-between">
            <p style={{color: "grey"}}>Generate a recipe from your list of ingredients</p>
            <button className="btn btn-sm" style={{color: "white", backgroundColor: "chocolate", height:"3em"}} onClick={generateRecipe}>Get a recipe</button>
        </div>
    </div>
    )
}

export default RecipeGenerator;