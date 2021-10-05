import { v4 as uuidv4 } from "uuid";

export const projects = [
   {
      id: uuidv4(),
      title: "Project One",
      desc: "This is my first project",
      github: "",
      demo: "",
      image: "./images/snakegame.png",
   },

   {
      id: uuidv4(),
      title: "Project Two",
      desc: "This is my second project",
      github: "",
      demo: "",
      image: "./images/weatherapp.png",
   },

   {
      id: uuidv4(),
      title: "Project Three",
      desc: "This is my third project",
      github: "",
      demo: "",
      image: "./images/CRUD.png",
   },
]