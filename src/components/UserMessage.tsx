import React, { FC, useContext } from 'react';
import {TUser} from "../types"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

const UserMessage:FC<TUser> = ({uid,displayName,photoURL,text,createdAt}) => {
   const {auth} = useContext(Context)
   const [user] = useAuthState(auth)
   let style = ""
   uid===user?.uid ? style="" : style="pepole"

   return (
   <div className={`message ${style}`}>

      <div className={"user"}>
         <div className="ava_name">
            <div className="img"><img src={photoURL} alt="ava" /></div>
            <h1>{displayName}</h1>
         </div>
      </div>

      <div className="desc">{text}</div>

   </div>
   );
};

export default UserMessage;
