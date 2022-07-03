import { useState, useEffect } from 'react'
import '../SearchBar.css'

const SearchBar = ({loggedIn, loggedInUserId, loggedInUsername}) => {

  const [searchRes, setSearchRes] = useState([])


  const addFriend = (event) => {
    event.preventDefault()
    if(loggedIn) {
      const friendUsername = event.target.closest('.search-res').querySelector('.username').getAttribute('name') //some stupid code that works idk why value was giving me underfined and couldn't figure out why
      let friendId = searchRes.filter(res => res.user_name === friendUsername)[0].id

      fetch('/api/users/addfriend', {
        method: 'POST',
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        body: JSON.stringify({loggedInUsername, loggedInUserId, friendUsername, friendId})
      })
      .then(res => res.json())
      .then(res => console.log(res))


    } else {
      alert('Please Log In Or Register To Add Friends')
    }

    }


  const fetchSearches = (event) => {
    event.preventDefault()
    if (event.target.searchQuery.value.length > 0) {
      fetch(`/api/users/${event.target.searchQuery.value}`)
        .then(res => res.json())
        .then(res => setSearchRes(res.userList))
    }
  }

  return (
    <>
      <section className="search-bar">
        <form className="search-form" onSubmit={fetchSearches}>
          <label className='sub-title'>Search? </label>
          <input type="text" name='searchQuery' />
          <button>Find Chatters!</button>
        </form>
      </section>
      <section className="search-area">
        <div>{searchRes.map((res, index) => {
          return <div 
          className="search-res"
          key={index}
          name={res.user_name}>
            <div className="search-res-name"> Name: {res.first_name} {res.last_name}</div>
            <div className="search-res-username">Username: <span className='username' name={res.user_name}>{res.user_name}</span></div> 
            <button onClick={addFriend}>Add Friend</button>
          
        </div> 
          
        })}</div>
      </section>
      
    </>
  )
}

export default SearchBar