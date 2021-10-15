// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //const userNameRef = React.useRef('')
  const [userNameValue, setUserName] = React.useState('')

  // const validateCase = username => {
  //   const isValidInput = username !== username.toLowerCase() ? false : true
  //   return isValidInput
  // }
  const handleChange = e => {
    setUserName(e.target.value.toLowerCase())
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(userNameValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userNameInput"
          value={userNameValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
