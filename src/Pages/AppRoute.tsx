import React,{useContext} from 'react';
import {Route,Routes,Navigate} from "react-router-dom"
import {publicRoutes,authRoutes} from "../routes"
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import ChatPage from "../Pages/ChatPage"
import LoginPage from "../Pages/LoginPage"
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from '..';

const AppRoute = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
   return (
      user?(
      <Routes>
        {authRoutes.map(el=><Route key={el.path} path={el.path} element={<ChatPage/>}/>)}
        <Route path="*" element={<Navigate to={CHAT_ROUTE} replace/>}/>
      </Routes>
      ):(
      <Routes>
        {publicRoutes.map(el=><Route key={el.path} path={el.path} element={<LoginPage/>}/>)}
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace/>}/>
      </Routes> 
      )
   );
};

export default AppRoute;