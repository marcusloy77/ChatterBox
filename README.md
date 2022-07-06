<h1>ChatterBox Front End Application, found <a href='https://chatterbox-message-app.herokuapp.com/'> here </a>, backend found <a href='https://github.com/marcusloy77/ChatterBox-Backend'> here </a> </h1>

<h2>Tech Stack: React.js, MUI </h2>

<h2> Features:</h2> <p>Full Stack Messaging with message history, Friend Request/Acceptance/Denial, Unique Usernames, Full User Search Engine </p> 

<h3> Application Idea </h3>
<p> Basic Idea is a messenger app similar to Facebook messenger. The Front end is built on React, and uses a large combination of components combined with polling in order to achieve realtime messaging. All users get a full friends list, with plans to be able to view full chat history in the future. </p>

<h3> Code I'm Proud Of </h3>
<h4> Front End </h4> <p> The code I'm the most proud of in the front end is my solution to the spaces between messages - After much consideration I decided to simply render the message list twice, and assign classes to the elements based on if the sender was the currently logged in user. This then allowed me to set visibility to hidden in css, creating a fairly simple to code, yet perfectly functioning, message display. </p>

<h4> Back End </h4> <p> The code I'm the most proud of in the back end was my solution to the creation of conversation tables. I created a simple protocal for the naming convention, where the user Id's within the conversation would be used in the table name, in the form conversation_id1_id2. However, this would create issues depending on who attempted to fetch the conversation, so I then simply decided whichever of the Id's were a higher number would be put first. The conversations were created whenever someone accepted a friend request. </p>

<h4> Front End Code: </h4> <p> const retrieveMessages = () => {
    //get request, set state = get, repeat this a bunch
    if (convoFriendId && loggedInUserId){
    fetch(`/api/messages/id1=${loggedInUserId}&id2=${convoFriendId}`)
      .then(res => res.json())
      .then(res => {
        return res.map(messageObj => {
          if (messageObj.sender_id === loggedInUserId) {
            messageObj['side'] = 'right'
          }
          else {
            messageObj['side'] = 'left'
          }
          return messageObj

        })
      })
      .then(res => {
        return res
      })
      .then(res => addSentMessages(res))
    }
  }</p>
  
  <h4> Back End Code: </h4> <p>createConversation: (id1, id2) => {
    let idFirst
    let idSecond
    if (id1 > id2) {
      idFirst = id1
      idSecond = id2
    } //cheeky way of making sure every reference to conversation works
    else {
      idFirst = id2
      idSecond = id1
    }

    sql = `
    CREATE TABLE conversation_${idFirst}_${idSecond}(id SERIAL PRIMARY KEY, message TEXT, sender_id INTEGER, sender_username TEXT)
    `
    return db.query(sql)
  } </p>
