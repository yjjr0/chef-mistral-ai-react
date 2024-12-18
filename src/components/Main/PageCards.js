import pageInfo from "./pageInfo";

function PageCards(props) {
    const cards = pageInfo.map(info => <Cards key={info.id} {...info} setView={props.setView} />);

    return (
        <div className="row my-4">
            {cards}
        </div>
    )
}

function Cards(props) {
    return (
        <div className="col-md-6">
            <div className="card mb-3">
                <img src={props.img} className="card-img-top" alt="Card Image" />
                <div className="card-body">
                    <h5 className="card-title text-warning">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a
                        href="#"
                        className="btn btn-primary"
                        onClick={props.id === 1
                                    ? () => props.setView("shoppingList")
                                    : () => props.setView("recipeGenerator")}>
                            Try it out!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PageCards;