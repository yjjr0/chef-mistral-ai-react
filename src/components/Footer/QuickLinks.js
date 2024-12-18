function QuickLinks(props) {
    return (
    <div className="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
            <li><a href="#" className="text-white" onClick={() => props.setView("home")}>Home</a></li>
            <li><a href="#" className="text-white" onClick={() => props.setView("shoppingList")}>Shopping List</a></li>
            <li><a href="#" className="text-white" onClick={() => props.setView("recipeGenerator")}>Recipe Generator</a></li>
        </ul>
    </div>);
}

export default QuickLinks;