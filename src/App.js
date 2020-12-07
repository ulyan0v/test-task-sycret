import React from 'react';
import NewsList from "./components/newsListPage/NewsList";
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import NewsPage from "./components/newsPage/newsPage";

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/news' exact>
          <NewsList />
        </Route>
        <Route path='/news/:id' exact>
          <NewsPage />
        </Route>
        <Redirect to='/news' />
      </Switch>
    </div>
  );
}

export default App;