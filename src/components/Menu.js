import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const Menu = () => {
   const [isOpen, setIsOpen] = useState(false);
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
                  <li onClick={() => setIsOpen(false)}>
                     <Link to="/">Homepage</Link>
                  </li>

                  <li onClick={() => setIsOpen(false)}>
                     <Link to="/projects">Projects</Link>
                  </li>

                  <li onClick={() => setIsOpen(false)}>
                     <Link to="/contact-me">Contact Me</Link>
                  </li>
               </ul>
            </nav>
         </header>
         
      </> 
   )
}

export default Menu
