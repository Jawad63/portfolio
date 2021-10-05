import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { navbar } from "../data/navbar";


const Menu = () => {
   const [isOpen, setIsOpen] = useState(false);
   // eslint-disable-next-line
   const [links, setLinks] = useState(navbar)
   return (
      <>
         
         <div className="menu-btn">
            <button onClick={() => setIsOpen(!isOpen)}>
               <FiMenu />
            </button>
         </div>

         
         <header className={`${isOpen ? "header open" : "header"}`}>
            <nav>
               <ul>
                  {links.map((links) => {
                     const { id, title, url } = links;
                     
                     return (
                        <li key={id} onClick={() => setIsOpen(false)}>
                           <Link to={url}>{title}</Link>
                        </li>
                     )
                  })}
               </ul>
            </nav>
         </header>
         
      </> 
   )
}

export default Menu
