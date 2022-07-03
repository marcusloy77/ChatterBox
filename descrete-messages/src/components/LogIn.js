

const LogIn = ({loggedIn, login, logout}) => {
  
  if (loggedIn) {
    return (
      <h3 className="sub-title" onClick={logout}>Log Out</h3>
    )
  }
  else {
    return(
      <>
        <h3><span className="sub-title">Login </span></h3>
        <form onSubmit={login}>
          <label htmlFor="">Username:</label>
          <input type="text" name="userName" />
          <label htmlFor="">Password:</label>
          <input type="password" name="password" />
          <button>Login</button>
        </form>
      </>
    )
  }
}


export default LogIn
