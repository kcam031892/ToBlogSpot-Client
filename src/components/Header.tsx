import React from 'react'
import Title from './Title';



function Header() {
  return (
    <div>
      <Title bg='black' onClick={() => alert('hello')}>Hello World!</Title>
    </div>
  )
}

export default Header
