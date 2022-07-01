

const LogIn = ({loggedIn, login, logout}) => {
  
  if (loggedIn) {
    return (
      <h3 onClick={logout}>Log Out</h3>
    )
  }
  else {
    return(
      <>
        <h3>Login</h3>
        <form action="" onSubmit={login}>
          <label htmlFor="">Username:</label>
          <input type="text" name="userName" id="" />
          <label htmlFor="">Password:</label>
          <input type="password" name="password" id="" />
          <button>Login</button>
        </form>
      </>
    )
  }
}


export default LogIn
