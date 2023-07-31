import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>PASSWORD RESET TASK</h1>
      <div className='homePage-buttons'>
        <Link to="/signUp"><Button className='mx-3' variant="primary">Sign Up</Button>{' '}</Link>
        <Link to="/login"><Button className='mx-3' variant="primary">Login</Button>{' '}</Link>
      </div>
    </div>
  )
}
