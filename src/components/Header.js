import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    let btnName = "login";
    const [buttonName, setButtonName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        console.log("useEffect is called");
    }, [buttonName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    {/* anchor tag regreshed whole page , Link will not */}
                    {/* <li>
                        <a href="/about">About us</a>
                    </li> */}

                    <li>
                        Online status: {onlineStatus? "online" : "offline"}
                    </li>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact us</Link>
                    </li>

                    <li>
                        <Link to="/cart"> Cart</Link>
                    </li>

                    <li>
                        <Link to="/grocery"> Grocery</Link>
                    </li>

                    <button
                        className="login-btn"
                        onClick={() => {
                            buttonName === "Login"
                                ? setButtonName("Logout")
                                : setButtonName("Login");
                        }}
                    >
                        {buttonName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
