import {  NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <nav className="font-bold flex justify-center gap-8 text-2xl">
             <NavLink to="/about">About</NavLink>
             <NavLink to="/contract">Contract</NavLink>
             <NavLink to="/users">users</NavLink>
        </nav>
    );
};

export default Header;