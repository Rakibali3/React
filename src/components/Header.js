import { useContext, useEffect, useState } from "react";
import { LOGO_LINK } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//header component
const Header = () => {
    const [btnLogin, setbtnLogin] = useState("Login");
    const { userInfo } = useContext(userContext);

    const cartItems = useSelector((state) => state.cart.items);

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between border-2 border-black h-40">
            <div className="mt-3">
                <img className="w-52 h-36" src={LOGO_LINK} />
            </div>
            <div className="m-10 p-10">
                <ul className="flex gap-10 text-x1">
                    <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="hover:underline "><Link to="/">Home</Link></li>
                    <li className="hover:underline"><Link to="/about">About Us</Link></li>
                    <li className="hover:underline"><Link to="/contact">Contact Us</Link></li>
                    <li className="hover:underline"><Link to="/grocery">Grocery</Link></li>
                    <li> <Link to="/cart"><i className="fa-solid fa-cart-shopping fa-lg"></i> ({cartItems.length}-Items)</Link></li>

                    <li className="hover:underline"><button href="#"  onClick={() => {
                        btnLogin == "Login" ? setbtnLogin("Logout") : setbtnLogin("Login")
                    }}>{btnLogin}</button></li>
                    {/* <li>{userInfo}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;