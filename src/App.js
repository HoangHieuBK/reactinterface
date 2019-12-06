import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticleList';
function App() {
  return (
    <Router>
       <div className="App">
       <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} exact/>
          <Route path="/article" component={ArticlePage} exact/>
          <Route path="/article-list" component={ArticleList} exact/>
       </Switch>
        </div>
    </Router>
  );
}

export default App;
