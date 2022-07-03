
const Register = ({loggedIn, register}) => {
  if (loggedIn) {
    return (<></>)
  }
  else {
    return (
      <>
        <h3><span className="sub-title">Register</span></h3>
        <form onSubmit={register}>
            <fieldset>
                <label>First Name:</label>
                <input type="text" name="firstName"/>
            </fieldset>
            <fieldset>
                <label>Last Name:</label>
                <input type="text" name="lastName"/>
            </fieldset>
            <fieldset>
                <label>Username:</label>
                <input type="text" name="userName"/>
            </fieldset>
            <fieldset>
                <label>Email:</label>
                <input type="text" name="email"/>
            </fieldset>
            <fieldset>
                <label>Password:</label>
                <input type="password" name="password"/>
            </fieldset>
            <button>Sign Up</button>
        </form>
      </>
    )
  }
}

export default Register