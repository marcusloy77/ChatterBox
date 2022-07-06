import { useState, useEffect } from 'react'
import useInterval from './useInterval'


const FriendsList = ({loggedIn, loggedInUserId, loggedInUsername, openChat}) => {
  const [friendsList, setFriendList] = useState([])

  const getFriendsList = () => {
    if (loggedIn) {
      fetch(`/api/friends/${loggedInUserId}`)
        .then(res => res.json())
        .then(res => setFriendList(res.list))
    }
    else {
      setFriendList([])
    }
  } 

  useInterval(() => {
    getFriendsList()
  }, 3000)

  return (
    <section className='friends-list'>
      <span className='sub-title'>Friends List</span>
        {friendsList.map((friend, index) => {
          return (

          <div key={index} className="friend-elem">
            <div className='friend-username'>{friend.user_name}</div>
            <button onClick={openChat}>Chat</button>
          </div>
          
          )
        })}
      
    </section>)
}

export default FriendsList 