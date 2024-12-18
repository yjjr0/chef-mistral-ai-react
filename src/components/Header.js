import HeaderContent from "./Header/HeaderContent";
import NavBar from "./Header/NavBar";

function Header(props) {
    return (
    <>
        <HeaderContent />
        <NavBar view={props.view} setView={props.setView} />
    </>)
}

export default Header;