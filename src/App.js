import { BrowserRouter, Route, Switch } from "react-router-dom";

// This is coming from components:
import Homepage from "./components/Homepage";

// This is coming from pages:
import Projects from "./pages/Projects";
import Error from "./pages/Error";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="*">
          <Error />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
