import React from 'react';
import { Link } from 'react-router-dom'
// import '../../style/css/navbar.css'

export const Team = () => {
  return (
    <div className="team-page">
      <h1 className='footer-header'>About the Team:</h1>
        <div className='team-members'>
          <ul className='team-members-list'>
            <li className='team-member'>
              <h3>Team Lead:</h3>
              <p>Matt Barnes</p>
              <li><a href="https://github.com/mmbarness"target="_blank">Github</a></li>
              <li><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank">LinkedIn</a></li>
            </li>
          </ul>
        </div>
    </div>
      // {/* <span className='copyright'>Copyright &copy; 2021 matty & the boyz</span> */}
    ) 
  }

export default Team;
