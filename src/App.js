import React,{useContext,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login';
import { AuthContext } from './store/Context';


/**
 * ?  =====Import Components=====
 */

function App() {
  const {user}=useContext(AuthContext)
  useEffect(() => {
   
  console.log(user);
 
  }, [])
  
  return (
    <div>
      <Router>
        <Route exact path='/'>
       <Home/>
        </Route>

        <Route path='/signup'>
        <Signup />
        </Route>

        <Route path='/login'>
        <Login />
        </Route>

      </Router>
      
    </div>
  );
}

export default App;
