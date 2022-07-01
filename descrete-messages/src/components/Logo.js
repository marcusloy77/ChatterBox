import logo from '../images/logo.png'
import '../Logo.css'


 const Logo = () => {
  return (
    <section className='logo'>
      <img className='cb-logo' src={logo} alt="Chat Burger Logo" />
    </section>
  )
}

export default Logo