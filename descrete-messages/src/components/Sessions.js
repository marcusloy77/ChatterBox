import LogIn from './LogIn'
import Register from './Register'
import { useState, useEffect } from 'react'
import '../Sessions.css'

const Sessions = ({loggedIn, login, logout, register}) => {
  const [logInClicked, setLogInClicked] = useState(false)
  const [registerClicked, setRegisterClicked] = useState(false)


  const setLogInBtn = () => {
    setLogInClicked(true)
    setRegisterClicked(false)
  }
  const setRegisterBtn = () => {
    setLogInClicked(false)
    setRegisterClicked(true)
  }

  const loginComp = () => {
    if (logInClicked) {
      return (
        <LogIn loggedIn={loggedIn} login={login} logout={logout}/>
      )
    }
    else {
      return (<span className="sub-title">Login </span>)
    }
  }
  const registerComp = () => {
    if (registerClicked) {
      return (
        <Register loggedIn={loggedIn} register={register} />
      )
    }
    else {
      return (<span className="sub-title">Register </span>)
    }
  }

  return (
    <>
      <div className='loginBtn' onClick={setLogInBtn}>{loginComp()}</div>
      <div className='registerBtn' onClick={setRegisterBtn}>{registerComp()}</div>
      
      
    </>
  )
}

export default Sessions