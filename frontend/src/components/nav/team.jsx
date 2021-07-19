import React from "react";
import "../../style/css/team.scss";

export const Team = () => {
  return (
    <div className="team-page">
      <div className="team-members">
        <h1>Meet the Team</h1>
        <ul className="team-members-list">
          <li className="team-member">
            <br />
            <h3 className="team-role">Matt Barnes</h3>
            <p className="member-name">Team Lead</p>
            <br />
            <div className="team-row">
              <div className="column-left">
                <div>
                  <img
                    className="team-photo"
                    src="https://media-exp3.licdn.com/dms/image/C5603AQEpXKG7YqgtAA/profile-displayphoto-shrink_800_800/0/1517597346857?e=1631145600&v=beta&t=HPqyfMzWSzlhQyxbHVQ8vNUEWRG2gWfN3z2sFu2Oobc"
                  />
                </div>
              </div>
              <div className="column-right">
                <div>
                  <a href="https://github.com/mmbarness" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/42DWuG0.png"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/mmbarness/" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/mrrIhjE.png"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/mmbarness/" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/t1i7qVL.png"
                    />
                  </a>
                </div>
                <br />
              </div>
            </div>
          </li>

          <li className="team-member">
            <br />
            <h3 className="team-role">William Ku</h3>
            <p className="member-name">Frontend Lead</p>
            <br />
            <div className="team-row">
              <div className="column-left">
                <div>
                  <img
                    className="team-photo"
                    src="https://media-exp3.licdn.com/dms/image/C4E03AQGDvS-2qU2wsA/profile-displayphoto-shrink_800_800/0/1625626488568?e=1631145600&v=beta&t=UKx-rc2XP8aDkmxI7yyvczYytJ-CXimJg1AorWbnggQ"
                  />
                </div>
              </div>
              <div className="column-right">
                <div>
                  <a href="https://github.com/will-ku" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/42DWuG0.png"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/willku/" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/mrrIhjE.png"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/willku/" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/t1i7qVL.png"
                    />
                  </a>
                </div>
                <br />
              </div>
            </div>
          </li>

          <li className="team-member">
            <br />
            <h3 className="team-role">Matt Yu</h3>
            <p className="member-name">Backend Lead</p>
            <br />
            <div className="team-row">
              <div className="column-left">
                <div>
                  <img
                    className="team-photo"
                    src="https://media-exp3.licdn.com/dms/image/C4E03AQFT5hNdQb-DEg/profile-displayphoto-shrink_800_800/0/1625602196931?e=1631145600&v=beta&t=drlxK0t7puwqXWeFTWk0qmsnYMfNflnpJIp-tXn0iQI"
                  />
                </div>
              </div>
              <div className="column-right">
                <div>
                  <a href="https://github.com/matt2y" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/42DWuG0.png"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/matthewyu1/"
                    target="_blank"
                  >
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/mrrIhjE.png"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/matthewyu1/"
                    target="_blank"
                  >
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/t1i7qVL.png"
                    />
                  </a>
                </div>
                <br />
              </div>
            </div>
          </li>

          <li className="team-member">
            <br />
            <h3 className="team-role">Moustafa Garcia</h3>
            <p className="member-name">Flex</p>
            <br />
            <div className="team-row">
              <div className="column-left">
                <div>
                  <img
                    className="team-photo"
                    src="https://i.imgur.com/Gkfhth1.jpg"
                  />
                </div>
              </div>
              <div className="column-right">
                <div>
                  <a href="https://github.com/mogarcia626" target="_blank">
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/42DWuG0.png"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/moustafagarcia/"
                    target="_blank"
                  >
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/mrrIhjE.png"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/moustafagarcia/"
                    target="_blank"
                  >
                    <img
                      className="link-logo"
                      src="https://i.imgur.com/t1i7qVL.png"
                    />
                  </a>
                </div>
                <br />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
