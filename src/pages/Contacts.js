import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
   return (
      <>
         
         <section className="contacts">
            <h1>Contact Me</h1>

            <ul>
               <li>
                  <a href="tel:+32465288957">
                     <FaPhone style={{ margin: 5 }}  />
                     +32 465 28 89 57
                  </a>
               </li>

               <li>
                  <a href="mailto:jawadqureshi111@gmail.com">
                     <FaEnvelope style={{ margin: 5 }}  />
                     jawadqureshi111@gmail.com
                  </a>
               </li>
            </ul>
         </section>
      </>
   )
}

export default Contacts
