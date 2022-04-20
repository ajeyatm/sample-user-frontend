import { useState, useEffect, useRef } from 'react'
import './ListUsers.css'
//component => is a function that returns JSX

const ListUsers = () => {
  const [users, setUsers] = useState([])

  const searchRef = useRef()

  const baseUrl = 'http://localhost:5000/list-users'

  const getUsers = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data)
      })
      .catch()
  }

  useEffect(() => {
    getUsers(baseUrl)
  }, [])

  return (
    <div>
      <input placeholder='Search By name' ref={searchRef} />
      <button
        onClick={() => {
          const key = searchRef.current.value
          if (key) {
            getUsers(
              `http://localhost:5000/list-users/name/${searchRef.current.value}`
            )
          }
        }}
      >
        Search
      </button>
      <button
        onClick={() => {
          getUsers(baseUrl)
          searchRef.current.value = null
        }}
      >
        Reset
      </button>
      <div className='user_container'>
        {users?.length > 0
          ? users.map((user, index) => {
              return (
                <div key={index}>
                  <p>Name: {user.name}</p>
                  <p>Age: {user.age}</p>
                  <button>Delete User</button>
                </div>
              )
            })
          : 'No data'}
      </div>
    </div>
  )
}

export default ListUsers
