import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const Menu = () => {
   return (
      <> 
         <header>

            <div className="menu-btn">
               <button>
                  <FiMenu />
               </button>
            </div>

            <nav>
               <ul>
                  <li>
                     <Link to="/">Homepage</Link>
                  </li>

                  <li>
                     <Link to="/projects">Projects</Link>
                  </li>

                  <li>
                     <Link to="/contact-me">Contact Me</Link>
                  </li>
               </ul>
            </nav>

         </header>
      </> 
   )
}

export default Menu
