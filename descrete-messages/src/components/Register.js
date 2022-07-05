import Button from '@mui/material/Button'
const Register = ({loggedIn, register}) => {
  if (loggedIn) {
    return (<></>)
  }
  else {
    return (
      <>
        <span className="sub-title">Register</span>
        <form className="regForm" id="reg" type='submit' onSubmit={register}>
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
            <Button variant="contained" form="reg" type='submit'>Submit</Button>
        </form>
      </>
    )
  }
}

export default Register