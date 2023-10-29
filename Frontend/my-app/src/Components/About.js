import { React, Fragment } from "react";
import "./About.css"
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  let message = 'Hardworked CrowdFund Project';
  return (
    <section className="section-white" style={{ marginTop: "3.5rem" }}>
           <div className="container">
            <div className="row">
            
            <div className="col-md-12 text-centre">
                <h2 className="section-title">
                     The Team behind CrowdFund
                </h2>
                <p className="section-subtitle">{message}</p>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src="images/self.jpg" alt="pic" className="team-img" width={"300"} height={"300"}/>
                <h3>Shrishvesh Reddy</h3>
                <div className="team-info">
                  <p>Frontend developer, integrator and smart contract developer</p>
                  <p>
                  Skilled in HTML, CSS, and JavaScript, I've delivered web projects. Proficient in MERN stack. Blockchain knowledge via courses & Solidity expertise. Led a Crowdfunding project (2023) with smart contracts and React. Actively participating in hackathons.
                  </p>
                  <ul classname="team-icon">
                    <li><a href="#"><i className="fa fa-github"></i></a>github</li>
                  </ul>
                  <ul classname="team-icon">
                    <li><a href="#"><i className="fa fa-Twitter"></i></a>Twitter</li>
                  </ul>
                  <ul classname="team-icon">
                    <li><a href="#"><i className="fa fa-Linkedin"></i></a>Linkedin</li>
                  </ul>
                </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src="images/partner.jpg" alt="pic" className="team-img" width={"300"} height={"300"}/>
                <h3>Lakshay Data</h3>
                <div className="team-info">
                  <p> smart contract developer</p>
                  <p>
                  Solidity expertise. Led a Crowdfunding project (2023) with smart contracts and React. Actively participating in hackathons.
                  </p>
                  <ul classname="team-icon">
                    <li><a href="#"><i className="fa fa-github"></i></a> github</li>
                  </ul>
                  <ul classname="team-icon">
                    <li><a href="#"><i className="fa fa-Twitter"></i></a>Twitter</li>
                  </ul>
                  <ul classname="team-icon">
                    <li><a href="#"><i className="fa fa-Linkedin"></i></a>Linkedin</li>
                  </ul>
                </div>
                </div>
            </div>




            </div>
           </div>
        </section>

  );
}
export default About;
