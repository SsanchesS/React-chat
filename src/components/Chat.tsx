import React, { FC, useContext } from 'react';
import UserMessage from './UserMessage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {TUser} from "../types"
const Chat:FC = () => {
    const {firestore} = useContext(Context)
    const [messages] = useCollection(firestore.collection('messages').orderBy("createdAt"))

   return (
      <div className="wrap wrap_chat">
        <div className="chat">
          {
            messages?.docs.map(el=><UserMessage uid={el.data().uid} displayName={el.data().displayName} text={el.data().text} photoURL={el.data().photoURL} createdAt={el.data().createdAt}/>)
          }
        </div>
      </div>
   );
};

export default Chat;