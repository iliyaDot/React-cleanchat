import React from 'react'
import Chat from './Chat'
export default function Body(props) {

const chats = props.chatsList.map(chat =>{
    return <Chat
    time={chat.time}
    message ={chat.message}
    gravatar={'receive' === chat.type ? props.gravatar.user2 : props.gravatar.user1}
     isLeft ={'receive'=== chat.type}/>
})

  return (
    <div className="panel-body">
    <div className="chats">
     {chats}
    </div> 
  </div>
  )
}
