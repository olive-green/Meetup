import {BrowserRouter as Router,Route ,Switch} from "react-router-dom"

import AllMeetups from "./pages/AllMeetups"
import NewMeetup from "./pages/newMeetup"
import Favourites from "./pages/Favourites"
import MainNavigation from "./components/layout/MainNavigation"
import classes from "./App.module.css"


function App() {
  return (
    <Router>
      <MainNavigation></MainNavigation>
          <div className={classes.main}>
      <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
// 4px 3px 13px 5px #b1adad;