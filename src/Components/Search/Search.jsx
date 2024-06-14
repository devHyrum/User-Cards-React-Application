import React, { useState } from 'react'
import './Search.css'
export default function Search({ data, setUsers }) {
  const [search, setSearch] = useState('')

  function search_user() {
    const filtered = data.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    setUsers(filtered)
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      search_user()
    }
  }

  return (
    <>
    <div className='search'>
      <img src="/search.svg" alt="search SVG"/>
      <input className='input-Search'
        type='text' 
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={search_user}>Search</button>
    </div>
    </>
  )
}
