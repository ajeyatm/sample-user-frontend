import { useState } from 'react'
import './AddUser.css'

const AddUser = () => {
  const [userName, setUserName] = useState(null)
  const [userAge, setUserAge] = useState(null)

  const url = 'http://localhost:5000/create-user'

  const addUser = async () => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: userName, age: userAge }),
      })
      setUserName(null)
      setUserAge(null)
    } catch (error) {}
  }

  return (
    <div className='add-user-container'>
      <form className='user-form'>
        <input
          name='name'
          placeholder='Enter the name'
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value) //name = e.target.value
          }}
        />
        <input
          name='age'
          placeholder='Enter the age'
          value={userAge}
          onChange={(e) => {
            setUserAge(e.target.value) //age = e.target.value
          }}
        />
        <button type='button' onClick={addUser}>
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUser
