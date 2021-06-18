import React from 'react';
import { Link } from 'react-router-dom'
// import '../../style/css/navbar.css'

export const Team = () => {
  return (
    <div className="team-page">
      <h1 className='footer-header'>About the Team</h1>
        <div className='team-members'>
          <ul className='team-members-list'>
            <li className='team-member'>
              <br />
              <h3 className='team-role'>Team Lead:</h3>
              <p>Matt Barnes</p>
              <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://github.com/mmbarness"target="_blank">Github</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank">LinkedIn</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank">AngelList</a></li>
              <br />
              <li><img className='team-photo' src='https://i.imgur.com/FkQVmdu.png'/></li>
            </li>


            <li className='team-member'>
              <br />
              <h3 className='team-role'>Frontend Lead:</h3>
              <p>Will Ku</p>
              <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://www.linkedin.com/in/willku/"target="_blank">Github</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://github.com/will-ku"target="_blank">LinkedIn</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank">AngelList</a></li>
              <br />
              <li><img className='team-photo' src='https://i.imgur.com/FkQVmdu.png'/></li>
            </li>

            <li className='team-member'>
              <br />
              <h3 className='team-role'>Backend Lead:</h3>
              <p>Matt Yu</p>
              <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://github.com/matt2yu"target="_blank">Github</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank">LinkedIn</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank">AngelList</a></li>
              <br />
              <li><img className='team-photo' src='https://i.imgur.com/FkQVmdu.png'/></li>
            </li>

            <li className='team-member'>
              <br />
              <h3 className='team-role'>Flex: </h3>
              <p>Moustafa Garcia</p>
              <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://github.com/mogarcia626"target="_blank">Github</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://www.linkedin.com/in/moustafagarcia/"target="_blank">LinkedIn</a></li>
              <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank">AngelList</a></li>
              <br />
              <li><img className='team-photo' src='https://i.imgur.com/FkQVmdu.png'/></li>
            </li>
          
          </ul>
        </div>
    </div>
    ) 
  }

export default Team;
