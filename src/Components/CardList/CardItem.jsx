import React from 'react'
import './CardItem.css'

export default function CardItem({ user: { id, name, username, email, city, website } }) {
  return (
    <li className='userBox'>

        <img src={`https://picsum.photos/250/180?random=${id}`} alt="photo"/>
        <span className='name'>{name}</span>
        <span className='wordsDown'>@{username}</span>
        <span className='wordsDown'>{email}</span>
        <span className='details'>{city} - <a href={website} target="_blank" style={{ color: 'black', textDecoration: 'none', borderBottom: '1px solid transparent' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>{website}</a></span>
    
    </li>
  )
}
