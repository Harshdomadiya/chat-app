import React, { useEffect,useRef } from 'react'
import Message from './Message'
import UseGetMessage from '../../hooks/UseGetMessage'
import MessageSkeleton from '../skeletons/MessageSk';
import UseListenMessages from '../../hooks/UseListenMessages';


function Messages() {
  const {messages,loading}  = UseGetMessage();
  const lastMessageRef = useRef();
 
  UseListenMessages();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    },100)
    
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length > 0 && messages.map((message) =>(
        
            <div key = {message._id}
            ref={lastMessageRef}
            >
              <Message message1 = {message}/>
            </div>
        ))}
        {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key ={idx}/>)}
        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a Message to start the conversation</p>
        )}
    </div>
  )
}

export default Messages
