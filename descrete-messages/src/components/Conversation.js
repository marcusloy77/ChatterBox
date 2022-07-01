import { useState, useEffect } from 'react'
import '../Conversation.css'


const Conversation = ({friendName, loggedInUser}) => {
  //We want as display:
  //name at top
  //window with chat
  //input for messages at the bottom

  const [sentMessages, addSentMessages] = useState([])



  const sendMessage = (event) => {
    event.preventDefault()
    
    addSentMessages([...sentMessages, {message: event.target.message.value, sender: loggedInUser, side: 'right'}])
  }

  const retrieveMessages = () => {

  }

  return (
    <section className='chat'>
      <h2>{friendName}</h2>
      <div className='chat-box'>
        <div className="chat-box1">
          <ul className='chat-stream'>{sentMessages.map(message => {
          return <li className={message.side}>{message.message} from {message.sender}</li>
        })}</ul>
        </div>
        <div className="chat-box2">
          <ul className='chat-stream'>{sentMessages.map(message => {
          return <li className={message.side}>{message.message} from {message.sender}</li>
        })}</ul>
        </div>
      </div>
      <form action="" onSubmit={sendMessage}>
        <input type="text" name='message'/>
        <button>Send</button>
      </form>
    </section>
  )
}



export default Conversation