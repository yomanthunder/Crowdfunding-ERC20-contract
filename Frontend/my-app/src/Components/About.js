import { React, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <Fragment>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>

          <div className="column">
            <div className="tabs">
              <div className="single-tab">
                <h2>About</h2>
              </div>
              <div className="single-tab">
                <h2>Skills</h2>
              </div>
              <div className="single-tab">
                <h2>Experience</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About Content  */}
              <div className="content">
                <h2>My Story</h2>
                <p>
                  ibeiv liehrvijberbvojwb vh vhwc hjwbco whjc jw vc owc jw ;
                  wvjc ;w j wkv j kv e chb jwj ckjw dm wjbd k wj jw wh lj j kw h
                  wklmd kwm cj lwj cjb kjn jgdc sk when huekvh keh lknebjvh jleb
                  vjlefn
                </p>
                <h3>I am Web developerand smart contracts engineer</h3>
                <p>
                  ibeiv liehrvijberbvojwb vh vhwc hjwbco whjc jw vc owc jw ;
                  wvjc ;w j wkv j kv e chb jwj ckjw dm wjbd k wj jw wh lj j kw h
                  wklmd kwm cj lwj cjb kjn jgdc sk when huekvh keh lknebjvh jleb
                  vjlefn
                </p>
              </div>
              {/* Skill content  */}
              <h2>My Skill</h2>
              <p>
                ibeiv liehrvijberbvojwb vh vhwc hjwbco whjc jw vc owc jw ; wvjc
                ;w j wkv j kv e chb jwj ckjw dm wjbd k wj jw wh lj j kw h wklmd
                kwm cj lwj cjb kjn jgdc sk when huekvh keh lknebjvh jleb vjlefn
              </p>
              <div className="skills-row">
                <div className="skill-column">
                  <div className="progess-wrap">
                    <h3>Developer</h3>
                    <div className="progress">
                      <div className="progess-bar">
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skill-column">
                  <div className="progess-wrap">
                    <h3>smartcontract</h3>
                    <div className="progress">
                      <div className="progess-bar">
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-column">
                  <div className="progess-wrap">
                    <h3>Design</h3>
                    <div className="progress">
                      <div className="progess-bar">
                        <span>30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default About;
