import React, { FC } from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const LoginPage:FC = () => {
   return (
      <>
         <Header btn={"login"}/>
         <Login/>
      </>
   );
};

export default LoginPage;