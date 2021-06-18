import React from 'react';
import { Link } from 'react-router-dom'
import '../../style/css/team.scss'

export const Team = () => {
  return (
    <div className="team-page">
        <div className='team-members'>
          <ul className='team-members-list'>
            <li className='team-member'>
              <br />
              <h3 className='team-role'>Matt Barnes</h3>
              <p className='member-name'>Team Lead</p>
              <br />
              <div className='team-row'>
                <div className='column-one'>
                  <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://github.com/mmbarness"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank"></a></li>
                  <br />
                </div>
                <div className='column-two'>
                  <li><img className='team-photo' src='https://i.imgur.com/FkQVmdu.png'/></li>
                  </div>
              </div>
            </li>


            <li className='team-member'>
              <br />
              <h3 className='team-role'>Will Ku</h3>
              <p className='member-name'>Frontend Lead</p>
              <br />
              <div className='team-row'>
                <div className='column-one'>
                  <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://www.linkedin.com/in/willku/"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://github.com/will-ku"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank"></a></li>
                  <br />
                </div>
                <div className='column-two'>
                  <li><img className='team-photo' src='https://i.imgur.com/5W5wvYc.jpg'/></li>
                </div>
              </div>
            </li>

            <li className='team-member'>
              <br />
              <h3 className='team-role'>Matt Yu</h3>
              <p className='member-name'>Backend Lead</p>
              <br />
              <div className='team-row'>
                <div className='column-one'>
                  <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://github.com/matt2yu"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank"></a></li>
                  <br />
                </div>
                <div className='column-two'>
                  <li><img className='team-photo' src='https://i.imgur.com/FkQVmdu.png'/></li>
                </div>
              </div>
            </li>

            <li className='team-member'>
              <br />
              <h3 className='team-role'>Moustafa Garcia</h3>
              <p className='member-name'>Flex</p>
              <br />
              <div className='team-row'>
                <div className='column-one'>
                  <li><img className='link-logo' src='https://i.imgur.com/42DWuG0.png'/><a href="https://github.com/mogarcia626"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/mrrIhjE.png'/><a href="https://www.linkedin.com/in/moustafagarcia/"target="_blank"></a></li>
                  <li><img className='link-logo' src='https://i.imgur.com/t1i7qVL.png'/><a href="https://www.linkedin.com/in/matthewyu1/"target="_blank"></a></li>
                  <br />
                  </div>
                <div className='column-two'>
                  <li><img className='team-photo' src='https://i.imgur.com/idBLEsZ.jpg'/></li>
                </div>
              </div>
              
            </li>
          
          </ul>
        </div>
    </div>
    ) 
  }

export default Team;
