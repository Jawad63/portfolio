import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg"
import { projects } from "../data/projects"

const Projects = () => {
   // eslint-disable-next-line
   const [cards, setCards] = useState(projects)

   return (
      <>
         <section className="projects">
            <h1>My Projects</h1>

            <div className="cards">
               {cards.map(({ id, title, desc, github, demo, image }) => (
                  <article key={id}>
                     <img src={image} alt={title} />
                     <h4>{title}</h4>
                     <p>{desc}</p>

                     <ul>
                        <li>
                           <a href={github} target="_blank"
                              rel="noopenner noreferrer"
                              className="github">
                              <FaGithub style={{ margin: 5 }} /> GitHub
                           </a>
                        </li>
                        
                        <li>
                           <a href={demo} target="_blank"
                              rel="noopenner noreferrer"
                              className="demo">
                              <CgWebsite style={{ margin: 5 }}  /> Demo
                           </a>
                        </li>
                     </ul>
                     
                  </article>
               ))}
            </div>
         </section>
      </>
   )
}

export default Projects
