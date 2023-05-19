import React, { FC } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Chat from '../components/Chat';

const ChatPage:FC = ()=>{
   return (
      <>
         <Header btn={"out"}/>
         <Chat/>
         <Form/>
      </>
   );
};

export default ChatPage;