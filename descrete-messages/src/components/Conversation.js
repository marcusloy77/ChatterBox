import { useState, useEffect } from 'react'
import '../Conversation.css'


const Conversation = ({friendName, loggedInUser, loggedInUserId, socket}) => {
  //We want as display:
  //name at top
  //window with chat
  //input for messages at the bottom

  const [sentMessages, addSentMessages] = useState([])
  const [state, setState] = useState({message: '', name: ''})
  const [typedMessage, setTypedMessage] = useState('')
  const [friendId, setFriendId] = useState('')

  useEffect(() => {
    socket.on('message', (data) => {
      
      console.log(data)
    })
  }, [socket])  

  const sendMessage = (event) => {
    event.preventDefault()
    fetch(`/api/users/${friendName}`)
        .then(res => res.json())
        .then(res => setFriendId(res.userList[0].id))
        .then(() => {
          console.log(friendId)
          if (friendId) {
            socket.emit('message', {sender_id: loggedInUserId, sender_username: loggedInUser, reciever_id: friendId, message: event.target.message.value, room: 3})//so far this works

            addSentMessages([...sentMessages, {message: event.target.message.value, sender: loggedInUser, side: 'right'}])
            setTypedMessage('')
          }
          else {
            alert('Please Select Someone To Chat To!')
          }
        })
    //fetch room then put it in emit
    

    

  }

  const retrieveMessages = () => {

  }

  const handleTypedMessages = (event) => {
    const message = event.target.value
    setTypedMessage(message)
  }

  return (
    <section className='chat'>
      <h2 className='chat-names'><span>{friendName}</span> <span>{loggedInUser}</span></h2>
      <div className='chat-box'>
        <div className="chat-box1">
          <ul className='chat-stream'>{sentMessages.map((message, index) => {
          return <div key={index} className={message.side}>{message.message} from {message.sender}</div>
        })}</ul>
        </div>
        <div className="chat-box2">
          <ul className='chat-stream'>{sentMessages.map((message, index) => {
          return <div key={index} className={message.side}>{message.message} from {message.sender}</div>
        })}</ul>
        </div>
      </div>
      <form action="" onSubmit={sendMessage}>
        <input type="text" name='message' onChange={handleTypedMessages} value={typedMessage.message}/>
        <button>Send</button>
      </form>
    </section>
  )
}



export default Conversation