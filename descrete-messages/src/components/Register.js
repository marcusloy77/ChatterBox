
const Register = ({loggedIn, register}) => {
  if (loggedIn) {
    return (<></>)
  }
  else {
    return (
      <>
        <h3>Register</h3>
        <form action="" onSubmit={register}>
          <div><label htmlFor="">Username:</label>
          <input type="text" name='userName' />
          </div>
          <div>
          <label htmlFor="">Email: </label>
          <input type="text" name='email' />
          </div>
          <div>
          <label htmlFor="">Password:</label>
          <input type="password" name='password'/>
          </div>
          <button>Register</button>
        </form>
      </>
    )
  }
}

export default Register