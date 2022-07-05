import '../Login.css'
import Button from '@mui/material/Button'

const LogIn = ({loggedIn, login, logout}) => {
  
  if (loggedIn) {
    return (
      <div className="sub-title" onClick={logout}>Log Out</div>
    )
  }
  else {
    return(
      <div className='loginBox'>
        <span className="sub-title">Login </span>
        <form onSubmit={login} id="log" type='submit'> 
          <fieldset>
            <label htmlFor="">Username:</label>
            <input type="text" name="userName" />
          </fieldset>
          <fieldset>
          <label htmlFor="">Password:</label>
          <input type="password" name="password" />
          </fieldset>
          <Button variant="contained" form="log" type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}


export default LogIn
