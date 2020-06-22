import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./assets/Loader.gif";

const Home = React.lazy(() => import("./pages/HomePage"));
const User = React.lazy(() => import("./pages/UserPage"));
const Select = React.lazy(() => import("./pages/SelectPage"));
const Game = React.lazy(() => import("./pages/GamePage"));

const loading = () => (
  <div className="loader">
    <img src={Loader} alt="Loader" />
  </div>
);

function App() {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={300}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/tictactoe" component={Home} />
              <Route path="/user" exact component={User} />
              <Route path="/select" exact component={Select} />
              <Route path="/game" exact component={Game} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </React.Suspense>
    </Router>
  );
}

export default App;
