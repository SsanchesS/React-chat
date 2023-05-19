import React, { FC,useContext,useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollection} from "react-firebase-hooks/firestore"
import { Context } from '..';
import Loader from './Loader';
import firebase from 'firebase/compat/app';

const Form:FC = () => {
  const {auth,firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [value,setvalue] = useState("")
  const [messages, loading, error] = useCollection(firestore.collection('messages').orderBy("createdAt"))
  
  const send=async()=>{
    firestore.collection('messages').add({
      uid:user?.uid,
      displayName: user?.displayName,
      photoURL:user?.photoURL,
      text:value,
      createdAt:firebase.firestore.FieldValue.serverTimestamp()
    })
    setvalue("")
  }

  if(loading){
    return <Loader/>
  }
   return (
      <div className="wrap">
        <div className="form">
          <div><input type="text" placeholder='Введите сообщение' value={value} onChange={(e)=>setvalue(e.target.value)}/></div>
        </div>
        <div className="button_form"><button onClick={send} className="button-29" role="button">Отправить</button></div>
      </div>
   );
};

export default Form;