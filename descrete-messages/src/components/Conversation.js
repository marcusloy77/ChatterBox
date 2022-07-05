import { useState } from 'react'
import '../Conversation.css'
import useInterval from './useInterval'


const Conversation = ({friendName, loggedInUser, loggedInUserId, convoFriendId}) => {

  const [sentMessages, addSentMessages] = useState([])
  const [typedMessage, setTypedMessage] = useState('')
  const [friendId, setFriendId] = useState('')

  const sendMessage = (event) => {
    event.preventDefault()
    let data
    setFriendId(convoFriendId)
    if (convoFriendId) {
      let message = event.target.message.value
      if (message.length > 20 ){
        message = message.slice(0,20) + '- ' + message.slice(20)
      }

      data = {sender_id: loggedInUserId, sender_username: loggedInUser, reciever_id: convoFriendId, message: message}

      fetch('/api/messages/', {
        method: 'POST',
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        body: JSON.stringify(data)
      })
      

      setTypedMessage('')
    }
    else {
      alert('Please Select Someone To Chat To!')
    }

  }

  const retrieveMessages = () => {
    //get request, set state = get, repeat this a bunch
    if (convoFriendId && loggedInUserId){
    fetch(`/api/messages/id1=${loggedInUserId}&id2=${convoFriendId}`)
      .then(res => res.json())
      .then(res => {
        return res.map(messageObj => {
          if (messageObj.sender_id === loggedInUserId) {
            messageObj['side'] = 'right'
          }
          else {
            messageObj['side'] = 'left'
          }
          return messageObj

        })
      })
      .then(res => {
        console.log(res)
        return res
      })
      .then(res => addSentMessages(res))
    }
  }

  useInterval(() => {
    retrieveMessages()
  }, 2000)

  const handleTypedMessages = (event) => {
    const message = event.target.value
    setTypedMessage(message)
  }

  return (
    <section className='chat'>
      
      <div className='chat-box'>
        <div className="chat-box1">
          <div className='chat-name friend'>{friendName}</div>
          <ul className='chat-stream'>{sentMessages.map((message, index) => {
          return <div key={index} className={`message ${message.side}`}>{message.message}</div>
        })}</ul>
        </div>
        <div className="chat-box2">
          <div className='chat-name me'>Me</div>
          <ul className='chat-stream'>{sentMessages.map((message, index) => {
          return <div key={index} className={`message ${message.side}`}>{message.message}</div>
        })}</ul>
        </div>
      </div>
      <form className='messageBox' onSubmit={sendMessage}>
        <input type="text" name='message' onChange={handleTypedMessages} value={typedMessage.message}/>
        <button>Send</button>
      </form>
    </section>
  )
}



export default Conversation