import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
 <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#feauters">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>)
;
function Navbar() {
  const [togelMenu, setTogelMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="log" />
        </div>
        <div className="gpt3__navbar-links_container">
       <Menu />
       
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>sign in </p>
        <button type="button">sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {togelMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setTogelMenu(false)}
          />
         : 
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setTogelMenu(true)}
          />
        }
        {togelMenu &&(
            <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                    <Menu/>
                    <div className="gpt3__navbar-menu_container-links-sgin">
        <p>sign in </p>
        <button type="button">sign up</button>
      </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
