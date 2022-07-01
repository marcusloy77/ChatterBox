import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import FriendsList from './components/FriendsList'
import Conversation from './components/Conversation'
import LogIn from './components/LogIn'
import Register from './components/Register'
import Sessions from './components/Sessions'

function App() {

  const [loggedInUser, setLoggedInUser] = useState('')
  const [loggedIn, setLoggedInStatus] = useState(false)
  const friend = 'Marcus'

  const login = (event) => {
    event.preventDefault()
    const found = true
    const userName = event.target.userName.value
    const password = event.target.password.value
    

    //check if log in correct then: set found = true/false

    if (found) {
      setLoggedInStatus(true)
      setLoggedInUser(userName)
    }
  }

  const logout = () => {
    setLoggedInStatus(false)
    setLoggedInUser('')
  }

  const register = (event) => {
    event.preventDefault()
    const found = true
    const data = event.target
  }
  return (
    <div className="App">
      <section className='left-col'>
        <Logo/>
        <SearchBar className='search-bar'/>
        <FriendsList className='friends-list'/>
      </section>
      <section className='middle-col'><Conversation 
      friendName={friend}
      loggedInUser={loggedInUser}/>
      </section>
      <section className='right-col'>
        <Sessions loggedIn={loggedIn} login={login} logout={logout} register={register}/>
        
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