import { useState, useEffect } from 'react'



const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([])

   const getFriendsList = () => {
    setFriendsList(
      ['Maddy', 'Marcus', 'Ben']
    )
  }

  useEffect(getFriendsList, [])

  return (
    <section className='friends-list'>
      <span className='sub-title'>Friends List:</span>
        {friendsList.map((friend, index) => 
          <div key={index}>
            <p>{friend}</p>
          </div>
        )}
      
    </section>)
}

export default FriendsList