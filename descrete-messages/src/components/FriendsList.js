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
      <ul> Friends List:
        {friendsList.map((friend, index) => 
          <li key={index}>
            <p>{friend}</p>
          </li>
        )}
      </ul>
    </section>)
}

export default FriendsList