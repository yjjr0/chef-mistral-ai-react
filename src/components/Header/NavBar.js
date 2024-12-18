function NavBar(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Logo setView={props.setView}/>
            <Menu view={props.view} setView={props.setView}/>
        </div>
    </nav>)
}

function Logo(props) {
    return (
    <a className="navbar-brand" href="#" onClick={() => props.setView("home")}>
        <img style={{"width": "75px", "height": "75px"}} src="/static/chef_mistral_ai.jpg" alt="Chef Mistral AI"/>
    </a>)
}

function Menu(props) {
    return (
    <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item" onClick={() => props.setView("home")}>
                    <a className={props.view === "home" ? "nav-link active" : "nav-link"} href="#">Home</a>
                </li>
                <li className="nav-item" onClick={() => props.setView("shoppingList")}>
                    <a className={props.view === "shoppingList" ? "nav-link active" : "nav-link"} href="#">Shopping List</a>
                </li>
                <li className="nav-item" onClick={() => props.setView("recipeGenerator")}>
                    <a className={props.view === "recipeGenerator" ? "nav-link active" : "nav-link"} href="#">Recipe Generator</a>
                </li>
            </ul>
        </div>
    </>)
}

export default NavBar;