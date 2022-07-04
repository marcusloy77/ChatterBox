import {useState, useEffect, useRef} from 'react'
import useInterval from './useInterval'



const Notificaitons = ({loggedIn, loggedInUserId, loggedInUsername}) => {

  const [friendRequests, setFriendRequests] = useState([])

  const respondFriend = (event, response) => {
    event.preventDefault()
    if (loggedIn) {
      const friendUsername = event.target.closest('.friend-req').querySelector('.username').getAttribute('name')
      console.log(friendUsername)

      const data = {loggedInUserId, loggedInUsername, friendUsername, response} 

      fetch('/api/friends/', {
        method: 'POST',
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(setFriendRequests(friendRequests.filter(user => {
        return user.user_name !== friendUsername
      })))
    }
  }

  const getFriendRequests = () => {
    if (loggedIn) {
      fetch(`/api/friends/requests/${loggedInUserId}`)
        .then(res => res.json())
        .then(res => setFriendRequests(res.list))
    }
    else {
      setFriendRequests([])
    }
  }

  useInterval(() => {
    getFriendRequests()
  }, 5000)


  const confirmFriend = (event) => {
    respondFriend(event, true)
  }
  const denyFriend = (event) => {
    respondFriend(event, false)
  }


  return (
  <>
    <h3 className="sub-title">Friend Requests</h3>
    <div className="friend-reqs">
      {friendRequests.map((res, index) => {
        return <div 
        className="friend-req"
        key={index}
        >
          <div className="search-res-name"> Name: {res.first_name} {res.last_name}</div>
            <div className="search-res-username">Username: <span className='username' name={res.user_name}>{res.user_name}</span></div> 
            <button onClick={confirmFriend}>Add Friend</button><button onClick={denyFriend}>Deny Friend</button>
      
        </div>
      })} 
    </div>
  </>
  )
}

export default Notificaitons