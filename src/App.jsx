import React, { useState, useEffect } from 'react'
import CardList from './Components/CardList/CardList'
import CardItem from './Components/CardList/CardItem'
import Search from './Components/Search/Search'

function App() {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])

  async function getData() {
    const rs = await fetch('https://jsonplaceholder.typicode.com/users')
    const rsJson = await rs.json()

    const filteredData = rsJson.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      website: user.website,
    }))
    setUsers(filteredData)
    setData(filteredData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Search data={data} setUsers={setUsers} />
      {users.length > 0 ? (
        <CardList>
          {users.map((user) => (
            <CardItem
              key={user.id}
              user={user}
            />
          ))}
        </CardList>
      ) : (
        <div className="no-users">
          We didn't find the user!
        </div>
      )}
    </>
  )
}

export default App
