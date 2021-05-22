import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Post } from "./components/Post/Post";
import { SetPost } from "./components/SetPost/SetPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Post} />
            <Route path="/newPost" component={SetPost} />
            <Route path="/:id" component={SetPost} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
