import ContactUs from "./Footer/ContactUs";
import QuickLinks from "./Footer/QuickLinks";
import FollowUs from "./Footer/FollowUs";

function Footer(props) {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <ContactUs />
                    <QuickLinks setView={props.setView}/>
                    <FollowUs />
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="mb-0">2024 Chef Claude</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;