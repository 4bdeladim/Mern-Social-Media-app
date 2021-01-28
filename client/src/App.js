import React, { useState, useEffect } from 'react'
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addPost, getPosts, login } from './redux/actions.js'
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/register';
import { Route } from 'react-router-dom';
import Post from './components/Post';


function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state[2].auth)

  return (
    <>
    <Route path="/" component={Login} exact />
    <Route path="/register" component={Register} exact />
    </>
  );
}

export default App;
