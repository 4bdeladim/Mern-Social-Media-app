import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom';
import Posts from './pages/posts';
import Login from './pages/login';
import Register from './pages/register'
import Profile from './pages/profile';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPostsforAccess } from './actions/posts'
import Logout from './pages/logout';
import Singlepost from './pages/singlepost';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.auth)
  const message = useSelector(state => state.posts.message)
  useEffect(() => {
    dispatch(getMyPostsforAccess())
  }, [])
  return (
    <>
      <Route path='/feed/:id' component={ Singlepost} exact /> 
      <Route path='/profile/posts/:id' component={ Singlepost} exact /> 
      <Route path='/' component={ auth ? Posts : Login} exact /> 
      <Route path='/logout' component={Logout} exact />
      {
        auth ? <Route path='/profile' component={Profile} exact /> : ''
      }
      {
        auth ? <Route path='/feed' component={Posts} exact />  : ''
      }
      {
        auth ? '' : <Route path='/register' component={Register} exact /> 
      }    
    </>
  );
}

export default App;
