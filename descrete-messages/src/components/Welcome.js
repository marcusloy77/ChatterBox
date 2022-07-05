import { useState } from "react";
import '../Welcome.css'

const Welcome = ({loggedInUsername}) => {
  const sayings = 
  ['yackety-yak','chew the rag','have a powwow','tittle-tattle','jibber-jabber','shoot the breeze',  'have a yarn','get chinwagging']

  let randomNum = Math.floor(Math.random() * sayings.length)

  return (
    <div className="welcome">
      <div className="sal">SALUTATIONS {loggedInUsername}</div>  
      <div className="saying">lets {sayings[randomNum]}</div>  
    </div>
  )
}

export default Welcome