import LogIn from './LogIn'
import Register from './Register'


const Sessions = ({loggedIn, login, logout, register}) => {

  return (
    <>
      <LogIn loggedIn={loggedIn} login={login} logout={logout}/>
      <Register loggedIn={loggedIn} register={register} />
    </>
  )
}

export default Sessions