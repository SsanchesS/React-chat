import React, { FC, useContext } from 'react';
import { Context } from '..';
import firebase from 'firebase/compat/app';

const Login:FC = () => {
   const {auth} = useContext(Context)

   const login  = async()=>{
      const provider = new firebase.auth.GoogleAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
   }
   return (
      <div className='wrap'>
         <div className="login">
            <button onClick={login} className="button-29" role="button">Войти с GOOGLE</button>
         </div>
      </div>
   );
};

export default Login; 