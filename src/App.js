import { BrowserRouter, Route, Switch } from "react-router-dom";

// This is coming from components:
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";

// This is coming from pages:
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";


const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch> {/* Switch locates the fastest path that matches and renders it. */}

        <Route path="/" exact>
          
          <Homepage />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact-me">
          <Contacts />
        </Route>

        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
