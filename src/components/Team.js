import React from 'react';
import '../styles/team.css'

const Team = () => {
  return (
    <section id="about">
      <div className="container">
        {/* <div className="row"> */}
          <div style={{display:"flex",textAlign:"center",justifyContent:"center"}} >
            <h3>Team</h3>
          </div>
          <div className="col-md-12">
            <div class="teamWrapper">
              <div class="container-fluid">
                <div class="teamGrid">
                  <div class="colmun">
                    <div class="teamcol">
                      <div class="teamcolinner">
                        <div class="avatar"><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="Member"/></div>
                        <div class="member-name"> <h2 align="center">Adarsh Prakash
                        </h2> </div>
                        <div class="member-info"><p align="center">Web Development And Design</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="colmun">
                    <div class="teamcol">
                      <div class="teamcolinner">
                        <div class="avatar"><img src="https://tinypic.host/images/2023/02/21/pikrepo.com-2.jpg" alt="Member"/></div>
                        <div class="member-name"> <h2 align="center">Lakshya Dutta
                        </h2> </div>
                        <div class="member-info"><p align="center">Animation Designer</p></div>
                      </div>
                    </div>
                  </div>
                  <div class="colmun">
                    <div class="teamcol">
                      <div class="teamcolinner">
                        <div class="avatar"><img src="https://oasisinfobyte.com/image/profile%20(1).png" alt="Member"/></div>
                        <div class="member-name"> <h2 align="center">Nancy Dhir
                        </h2> </div>
                        <div class="member-info"><p align="center">Human Resource</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Team;
