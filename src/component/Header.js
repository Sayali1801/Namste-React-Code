import {useState} from 'react';
import '../styles/Header.css';
function Header(){
    const[login,setLogin]=useState("Log In");
    const detLogOut=()=>{
        (login==="Log In")? setLogin("Log Out"):setLogin("Log In")
    }
    return(
        <section className="header-main">
            <div className="header-left">
                <a href="/">
                <img src="https://static.vecteezy.com/system/resources/previews/006/395/395/original/food-point-logo-symbol-and-icon-template-to-show-the-location-of-the-food-seller-vector.jpg" alt=""/>
                </a>
            </div>
            <div className="header-center">

            </div>
            <div className="header-right">
                    <ul className="header-right-list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button onClick={detLogOut}
                        >{login}</button>
                    </ul>
            </div>
        </section>
    )
}
export default Header;