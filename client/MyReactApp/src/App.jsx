import  React, { useState, useEffect } from 'react'


function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api")
    .then(response => response.json)
    .then(setBackendData(data))
  }, [])       //empty array passed so its render occurs once only........

  return (
    <div>
        
      {(typeof backendData.users === 'undefined') ? ( 
        <p>Loading........</p>
      ): (
        backendData.users.map((user, index) => (
          <p key={index} >{user}</p>
        ))
      )}

    </div>
  )
}

export default App
