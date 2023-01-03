import React from 'react';
import "./Home.css";
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className='home-container'>
            <div className="profile-container">
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icon">
                                <a href="https://www.facebook.com/profile.php?id=100004446435120">
                                    <i className="fa fa-facebook-square"></i>
                                </a>
                                <a href="https://www.instagram.com/sketch_with_deva/">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/devansh-bharadwaj-b730221a2/">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                <a href="https://github.com/Devansh-bharadwaj">
                                    <i className="fa fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                {" "}
                                Hello, I'M <span className="highlighted-text">Devansh</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                {" "}
                                <h1><Typewriter onInit={(typewriter) => {
                                    typewriter.typeString("React Developer!").pauseFor(2000).deleteAll().typeString("Frontend Developer!").start();
                                }}/></h1>
                                <span className="profile-role-tagline">
                                    I am a quick learner of diffrent technologies and have a good
                                    knowledge of web development.
                                </span>
                            </span>
                        </div>
                        <div className="profile-options">
                            <button className="btn primary-btn"><a href='mailto:devanshbharadwaj1@gmail.com' style={{color:"white", textDecoration:"none"}}>Hire me</a></button>
                            <a href="DevanshResume.pdf" download="Devansh DevanshResume.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
