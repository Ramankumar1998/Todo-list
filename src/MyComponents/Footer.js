import React from 'react'

export default function Footer() {

  let fotterStyle = {
    position:'relative',
    top:'10vh',
    width:'100%'
  }
  return (
    
    <footer className="bg-dark text-light py-3" style={fotterStyle}>
      <p className='text-center'>
         Copyright &copy; MY todolist.com
      </p>
    </footer>
  )
}

