import {useState} from 'react'

const Notificaitons = ({loggedIn, loggedInUserId}) => {

  const [friendRequests, setFriendRequests] = useState([])

  const confirmFriend = (event) => {
    
  }

  const getFriendRequests = () => {
    
  }

  const denyFriend = (event) => {
    
  }
  return (
  <>
    <h3 className="sub-title">Notifications</h3>
    <div className="friend-reqs">
      {friendRequests.map((res, index) => {
        return <div 
        className="friend-req"
        key={index}
        >
          <div className="search-res-name"> Name: {res.first_name} {res.last_name}</div>
            <div className="search-res-username">Username: <span className='username' name={res.user_name}>{res.user_name}</span></div> 
            <button onClick={confirmFriend}>Add Friend</button><button onClick={denyFriend}>Add Friend</button>
      
        </div>
      })}
    </div>
  </>
  )
}

export default Notificaitons