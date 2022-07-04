
import './App.css';
import {useState, useEffect } from 'react'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import FriendsList from './components/FriendsList'
import Conversation from './components/Conversation'
import Sessions from './components/Sessions'
import Notificaitons from './components/Notificaitons'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3002')



function App() {

  const [loggedInUsername, setLoggedInUser] = useState('')
  const [loggedInUserId, setLoggedInUserId] = useState('')
  const [loggedIn, setLoggedInStatus] = useState(false)
  const [convoFriend, setConvoFriend] = useState('')

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
    setConvoFriend(event.target.closest('.friend-elem').querySelector('.friend-username').textContent)
  }

  return (
    <div className="App">
      <section className='left-col'>
        <Logo/>
        <SearchBar className='search-bar' loggedIn={loggedIn} loggedInUserId={loggedInUserId} loggedInUsername={loggedInUsername}/>
        <FriendsList 
        className='friends-list'
        loggedIn={loggedIn} loggedInUserId={loggedInUserId} loggedInUsername={loggedInUsername} openChat={openChat}/>
      </section>
      <section className='middle-col'>
        <Conversation 
        friendName={convoFriend}
        loggedInUser={loggedInUsername}
        socket={socket}
        loggedInUserId={loggedInUserId}/>
      </section>
      <section className='right-col'>
        <Sessions loggedIn={loggedIn} login={login} logout={logout} register={register}/>
        <Notificaitons loggedIn={loggedIn} loggedInUserId={loggedInUserId} loggedInUsername={loggedInUsername}
        />
      </section>
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