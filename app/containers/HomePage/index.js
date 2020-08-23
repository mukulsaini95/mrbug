/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import "../../assets/css/main.css"
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="devContainer">
        <div className="sideNav">
          <div className="miniProfile">
            <h5>Mukul Saini</h5>
            <img src={require("../../assets/images/mukul_saini.jpg")} alt="" />
            <p>
              Hi, my name is Mukul Saini and i'm a senior software engineer. Welcome to my personal website!
      </p>
            <div className="contactWithSocialMedia">
              <i onClick={() => window.open("https://twitter.com/mukulsaini2", "_blank")} className="fab fa-twitter" title="Twitter"></i>
              <i onClick={() => window.open("https://in.pinterest.com/xboxlatest/", "_blank")} className="fab fa-pinterest-p" title="Pinterest"></i>
              <i onClick={() => window.open("https://www.instagram.com/mukulsaini95/", "_blank")} className="fab fa-instagram" title="Instagram"></i>
              <i onClick={() => window.open("https://www.linkedin.com/in/mukul-saini-42622623/", "_blank")} className="fab fa-linkedin-in" title="linkedIn"></i>
              <i onClick={() => window.open("https://github.com/mukulsaini95/", "_blank")} className="fab fa-github" title="github"></i>
            </div>
          </div>
          <hr />
          <div className="nav-list">
            <ul>
              <li className="active"><i className="fas fa-user pd-r-5"></i> <a>About Me</a></li>
              <li><i className="fas fa-tv pd-r-5"></i><a>Portfolio</a></li>
              <li><i className="fas fa-car-building pd-r-5"></i><a>Work Experience</a></li>
              <li><i className="fas fa-file-user pd-r-5"></i><a>Resume</a></li>
              <li><i className="fal fa-address-card pd-r-5"></i><a>Contact</a></li>
              <li><i className="fa fa-magic pd-r-5" ></i><a>Hobbies</a></li>
            </ul>

          </div>
          <hr />
          <div className="personalInfo">
            <div className="personalDetail">
              <p>+91 8802192265</p>
              <p><b>Age:</b> 	25,<b> Gender:</b> Male</p>
              <p><b>Nationality:</b> Indian</p>
              <p>mukulsaini95@gmail.com</p>
            </div>

          </div>

        </div>
        <div className="content">
          <div className="header">
            <div className="info">
              <h2>Mukul Saini</h2>
              <h6>senior software engineer</h6>
              <p>
                I'm  a software engineer specialized in frontend development for complex scalable web apps. Ability to build strong relationships bonds, great attitude when it come to be working with teams and passionate about learning new technology.
          </p>
            </div>
            <div className="photo">
              <div className="effect">
                <p id="word"></p>
                {/* <p>_</p> */}
              </div>
              <div className="imageContainer">
                <img src={require("../../assets/images/2.jpg")} width="150px" height="150px" />
              </div>
            </div>
          </div>
          <div className="mainContent">
            <h3>What i do</h3>
            <p className="letterSpace">
              I have more than 2.5+ years of experience in the field of software development. Specialized in frontend and also knowledge of backend and graphics designing tools.
              My objectives are increasing my knowledge in computer science fields and new technologies especially, web development and web design field.
              Always looking forward to learn new technologies and be a part of a huge change in the world.
          </p>
            <div className="skillsContainer">
              <ul >
                <li>
                  <div className="skillsListBox html5LogoColorBorder">
                    <i className="fab fa-html5 html5LogoColor"></i>
                    <h6> HTML</h6>
                    <p>
                      HTML is short for Hypertext Markup Language.Without HTML, a browser would not know how to display text as elements or load images or other elements.
                  </p>
                  </div >
                </li>
                <li>
                  <div className="skillsListBox cssLogoColorBorder">
                    <i className="fab fa-css3-alt cssLogoColor"></i>
                    <h6>CSS</h6>
                    <p>
                      CSS is a simple design language intended to simplify the process of making web pages presentable.CSS handles the look and feel part of a web page.
                  </p>
                  </div >
                </li>
                <li>
                  <div className="skillsListBox jsLogoColorBorder">
                    <i className="fab fa-js jsLogoColor"></i>
                    <h6>JS</h6>
                    <p>
                      Css is a simple design language intended to simplify the process of making web pages presentable.CSS handles the look and feel part of a web page.
                  </p>
                  </div >
                </li>
                {/* <li>
              <div className="skillsListBox jsLogoColorBorder">
                <i className="fab fa-js jsLogoColor"></i>
                <h6>jQuery</h6>
                <p>
                  jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
                  </p>
              </div >
            </li>  */}

                <li>
                  <div className="skillsListBox reactLogoColorBorder">
                    <i className="fab fa-react reactLogoColor"></i>
                    <h6>React</h6>
                    <p>
                      React is an open-source JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications.
                  </p>
                  </div >
                </li>
                <li>
                  <div className="skillsListBox nodeJsLogoBorder">
                    <i className="fab fa-node-js nodeJslogoColor"></i>
                    <h6>NodeJS</h6>
                    <p>
                      Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and perfect for data-intensive real-time applications that run across distributed devices.
                  </p>
                  </div >
                </li>
                <li>
                  <div className="skillsListBox reactLogoColorBorder">
                    <i className="fab fa-react reactLogoColor"></i>
                    <h6>React Native</h6>
                    <p>
                      React Native is an open-source mobile application framework. It is used to develop hybrid apps by using React along with native platform capabilities.
                  </p>
                  </div >
                </li>
                <li>
                  <div className="skillsListBox angularJsLogoBorder">
                    <i className="fab fa-angular angularJslogoColor"></i>
                    <h6>AngularJS</h6>
                    <p>
                      AngularJS is a JavaScript-based open-source front-end web framework  and by a community of individuals for developing single-page applications.
                              </p>
                  </div >
                </li>
                <li>
                  <div className="skillsListBox saasLogoBorder">
                    <i className="fab fa-sass saasLogoColor"></i>
                    <h6>SAAS</h6>
                    <p>
                      Software as a service is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.
                  </p>
                  </div >
                </li>
                <li>
                  <div className="skillsListBox sqlLogoBorder">
                    <i className="fas fa-database sqlLogoColor"></i>
                    <h6>SQL</h6>
                    <p>
                      SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system,
                  </p>
                  </div>
                </li>
                <li>
                  <div className="skillsListBox mongoDbBorder">
                    <img src={require("../../assets/images/mongodb_logo.png")} height="22px" width="60px" />
                    <h6>MongoDB</h6>
                    <p>
                      MongoDB is a JSON-like documents with optional schemas, scalability and flexibility that you want with the querying and indexing that you need.
                  </p>
                  </div >
                </li>
              </ul>


            </div>
          </div>
          <div className="footer">
            <p>Mr. Bug : Onces i called a bug ... then i started finding  bugs ... know i kill bugs to ensure no other bug  exist except me. </p>
          </div>
        </div>

      </div>

    );
  }
}
