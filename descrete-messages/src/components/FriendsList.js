import { useState, useEffect } from 'react'



const FriendsList = ({loggedIn, loggedInUserId, loggedInUsername}) => {
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


  useEffect(getFriendsList, [])

  return (
    <section className='friends-list'>
      <span className='sub-title'>Friends List:</span>
        {friendsList.map((friend, index) => {
          return (

          <div key={index} className="friend-elem">
            <div>{friend.user_name}</div>
            <button>Chat to {friend.user_name}</button>
          </div>
          
          )
        })}
      
    </section>)
}

export default FriendsList 