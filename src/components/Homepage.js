import { FaLinkedin, FaGithub } from "react-icons/fa";

const Homepage = () => {
   return (
      <>
         <section className="homepage">
            <div className="overlay">
               <h1>My Portfolio</h1>
               <p>Full-stack Web Developer</p>

               <ul>
                  <li>
                     <a href="#" target="_blank" rel="noopennernoreferrer"><FaLinkedin /></a>
                  </li>
                  <li>
                     <a href="#" target="_blank" rel="noopennernoreferrer"><FaGithub /></a>
                  </li>
               </ul>
            </div>
         </section>
      </>
   )
}

export default Homepage
