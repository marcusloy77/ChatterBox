
import './App.css';
import {useState, useEffect } from 'react'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import FriendsList from './components/FriendsList'
import Conversation from './components/Conversation'
import Sessions from './components/Sessions'
import Notificaitons from './components/Notificaitons'
import Welcome from './components/Welcome';
import chatterBoxImg from './images/chatter2.png'
import salutationsImg from './images/salutations.png'
import LogIn from './components/LogIn'
import Register from './components/Register';

function App() {

  const [loggedInUsername, setLoggedInUser] = useState('')
  const [loggedInUserId, setLoggedInUserId] = useState('')
  const [loggedIn, setLoggedInStatus] = useState(false)
  const [convoFriend, setConvoFriend] = useState('User')
  const [convoFriendId, setConvoFriendId] = useState('')

  const login = (event) => {
    event.preventDefault()
    const userName = event.target.userName.value
    //check if log in correct then: set found = true/false

    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/api/sessions', {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.correctLogin) {
          setLoggedInStatus(true)
          setLoggedInUser(userName)
          setLoggedInUserId(res.userId)
        }
        else {
          alert('Incorrect username or password')
        }
      })
  }
 
  const logout = () => {
    setLoggedInStatus(false)
    setLoggedInUser('')
  }

  const register = (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch(`/api/sessions/${event.target.userName.value}`)
      .then(res => res.json())
      .then(res => {
        if(res.avaliable){
          fetch('/api/users', {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                console.log(res.error)
            } else {
                console.log(res)
            }
        })
        } else {
          alert("Username Unavaliable: Please Make Another Choice")
        }


      })

    
}
  const openChat = (event) => {
    const friendName = event.target.closest('.friend-elem').querySelector('.friend-username').textContent
    setConvoFriend(friendName)
    fetch(`/api/users/getId/${friendName}`)
        .then(res => res.json())
        .then(res => {
          setConvoFriendId(res.id)
        })
    //socket.emit('join_room', 3)

  }

  return (
    <div className="page">
      <div className='banner'>
      <Logo/>

      <div className="chatImg">
        <img className='chatterBoxImg' src={chatterBoxImg} alt="Chatterbox" />
      </div>

      <div className='lognreg'></div>
      </div>
      
      <div className="welc-wrapper">
        <Welcome loggedInUsername={loggedInUsername.toUpperCase()}/>
      </div>
      <div className="App">

            <div className="left">
          <SearchBar className='search-bar' loggedIn={loggedIn} loggedInUserId={loggedInUserId} loggedInUsername={loggedInUsername}/>
          <Notificaitons className='fri-req' loggedIn={loggedIn} loggedInUserId={loggedInUserId} loggedInUsername={loggedInUsername}/>
          </div>
          <FriendsList 
            className='friends-list'
            loggedIn={loggedIn} loggedInUserId={loggedInUserId} loggedInUsername={loggedInUsername} openChat={openChat}/>

        <section className='right-col'>
        <Conversation 
          friendName={convoFriend}
          loggedInUser={loggedInUsername}
          loggedInUserId={loggedInUserId}
          convoFriendId={convoFriendId}/>
          
        </section>
        <div className="sessions">
        <Sessions loggedIn={loggedIn} login={login} logout={logout} register={register}/>
        </div>
        
      </div>
    </div>
  );
}
// <Register loggedIn={true}/>

//structure - essentially messenger
//friends list on left, messages on screen in front
//we'll work out friend requests at the end, for now everybody chatting
//one on ones to start



export default App;



//within the chat space, use two divs to render messages, one for outgoing, one for recieving, inviisble guide in the middle.
//when rendering messages, render blank spaces in the other div