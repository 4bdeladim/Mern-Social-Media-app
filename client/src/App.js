import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom';
import Posts from './pages/posts';
import Login from './pages/login';
import Register from './pages/register'
import Profile from './pages/profile';

function App() {
  
  return (
    <>
      <Route path='/posts' component={Posts} exact /> 
      <Route path='/' component={Login} exact /> 
      <Route path='/register' component={Register} exact /> 
      <Route path='/profile' component={Profile} exact /> 
    </>
  );
}

export default App;
