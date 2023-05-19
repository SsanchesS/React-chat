import React, { FC,useContext } from 'react';
import "./App.css"
import {BrowserRouter} from "react-router-dom"
import AppRoute from './Pages/AppRoute';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import Loader from './components/Loader';

const App:FC=() =>{
  const {auth} = useContext(Context)
  const [user,loading,error] = useAuthState(auth)
  if(loading){
    return <Loader/>
  }
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
