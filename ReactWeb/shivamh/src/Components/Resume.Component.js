import React from 'react';
import ReactDOM from 'react-dom';
import shivamh from '../Files/mine.jpg'
// import Typewriter from 'typewriter-effect/dist/core';
import hi from "../Files/tenor.gif"
import py from "../Files/python.png"
import java from "../Files/java.png"
import js from "../Files/js.png"
import boot from "../Files/boot.png"
import reacticon from "../Files/react.png"
import cpp from "../Files/cpp.png"
import fire from "../Files/firebase.png"
import sql from "../Files/mysql.png"
import php from "../Files/php.png"
import db from "../Files/db.png"
import linux from "../Files/linux.png"
import cv from "../Files/ShivamH_Resume-1.pdf"

const Resume=()=>{

    // let app = document.getElementById('quote');


    // let typewriter = new Typewriter(app, {
    //     loop: true,
    //     delay: 75,
    //   });
      
    //   typewriter
    //     .pauseFor(2500)
    //     .typeString('byte by byte empowering student developers communities')
    //     .pauseFor(300)
    //     // .deleteChars(10)
    //     .pauseFor(1000)
        // .start();

    return(
        <>

            <div className="Container">
            <div className="row IntroText vertical-center">
                <div className="col-sm ">
                    <p className="display-5">Shivam Hande</p>
                    <p className="display-8" >byte by byte empowering student developers communities</p>

                </div>
                <div className="col-sm">
                <img src={shivamh} className="img-fluid circle shadow" alt="Shivam Hande"/>

                </div>
            </div>


            <div className="container overflow-hidden">
                <div className="row gx-5 middle">
                    <p className="display-5 bittext">A bit about me</p>
                    <div className="col-sm ">
                        <p className="display-6 ">Hello there <img src={hi} className="img-hi " alt="Hi Emoji"/></p>
                        <p>I’m an Open-Source enthusiast & passionate about Web Dev, Mobile App Dev, Cloud, and learning new things.</p>
                            <div className="handler">
                            <div className="footersoc ">
                                <a aria-hidden="true" className="fa fa-envelope" href="mailto:shivamhande0000@gmail.com" id="devso" rel="noreferrer" target="_blank" title="mail us"></a>
                                <a aria-hidden="true" className="fa fa-instagram" href="http://instagram.com/shiv.am.h" id="devso" rel="noreferrer" target="_blank" title="follow us"></a>
                                <a aria-hidden="true" className="fa fa-twitter" href="https://twitter.com/ShivamHande" id="devso" rel="noreferrer" target="_blank" title="follow us"></a>
                                <a aria-hidden="true" className="fa fa-linkedin" href="https://www.linkedin.com/in/shivamh" id="devso" rel="noreferrer" target="_blank" title="follow us"></a>
                                <a aria-hidden="true" className="fa fa-github" href="https://github.com/aishivam" id="devso" rel="noreferrer" target="_blank" title="Join group"></a>
                                <a aria-hidden="true" className="fa fa-youtube-play" href="https://www.youtube.com/channel/UC0VEXsNow5cAJp9H2owWc-w" id="devso" rel="noreferrer" target="_blank" title="follow us"></a></div>
                                <hr/>
                            </div>
                    </div>
                    <div className="col-sm">
                        <div className="Skills">
                        <p className="display-6">Skilled in</p>
                        <p class="lead">Web Development</p>
                        <div className="progress">
                        <div className="progress-bar p1 progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="lead">Mobile App Development</p>
                        <div className="progress">
                        <div className="progress-bar p2 progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="lead">Pen Testing</p>
                        <div className="progress">
                        <div className="progress-bar p3 progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className="container overflow-hidden">
            <p className="display-5 bittext">Eduaction</p>
                <div className="row gx-5">    
                    <div className="col">
                    <h5 className="card-title">Diploma in Computer Science and Engineering </h5>
                    <p>MATSYODARI SHIKSHAN SANSTHA's College of Engineering & Technology</p>
                    <h6 className="card-subtitle mb-2 text-muted">2017-2020</h6>
                    <hr/>
                    <h5 className="card-title">Bachelor's Degree in Information Technology</h5>
                    <p>G H RAISONI INSTITUTE OF ENGINEERING AND TECHNOLOGY</p>
                    <h6 className="card-subtitle mb-2 text-muted">2020-2023</h6>
                </div>
                </div>
            </div>


            <div className="container overflow-hidden">
            <p className="display-5 bittext">I'm familiar with</p>
                <div className="row gx-5">    
                    <div className="col">

                    <div className="container">
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                            <div className="col">
                            <div className="stack"><img className="icons" src={py}/> Python</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={java}/> Java</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={cpp}/> C++</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={js}/> JavaScript</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={php}/> PHP</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={reacticon}/> React</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={boot}/> Bootstrap</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={sql}/> MySql</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={fire}/> Firebase</div>
                            </div>
                            <div className="col">
                            <div className="stack"><img className="icons" src={db}/> MoongoDB</div>
                            </div>
                            <div className="stack"><img className="icons" src={linux}/> Linux</div>
                            <div className="col">
                            </div>
                        </div>
                    </div>

                    </div>
                    {/* <div className="col">

                    </div> */}
                </div>
            </div>


            <div className="container overflow-hidden">
            <p className="display-5 bittext">Experience</p>
                <div className="row gx-5">    
                    <div className="col intern">
                    <h5 className="card-title ">Web Developer Inern</h5>
                    <a href="https://rexoraedulabs.com/"><p>Rexora EduLabs Pvt. Ltd.</p></a>
                    <h6 className="card-subtitle mb-2 text-muted">Apr-21 May-21</h6>
                    <ul>
                        <li>Learned and build project in React js with firebase auth</li>
                        <li>Technology Used: HTML,CSS,Bootstrap,Reactjs,Firebase</li>
                    </ul>  
                    </div>
                </div>
                <div className="row gx-5">    
                <div className="col intern">
                    <h5 className="card-title ">Mobile Application Development Inern</h5>
                    <a href="https://thesparksfoundationsingapore.org/"><p>The Sparks Foundation</p></a>
                    <h6 className="card-subtitle mb-2 text-muted">June-21 Present</h6>
                    <ul>
                        <li>Learned and build project in Java with firebase auth</li>
                        <li>Technology Used: Java,Firebase</li>
                        <li>It was great experience I have ever gain, faced challenges while building project</li>
                    </ul>  
                </div>
                </div>
                <div className="row gx-5">    
                <div className="col intern">
                    <h5 className="card-title ">Webmaster</h5>
                    <a href="https://www.cwipedia.in/"><p>cwipedia.in</p></a>
                    <h6 className="card-subtitle mb-2 text-muted">2018 - Present</h6>
                    <ul>
                        <li>Working on SEO and analytics</li>
                    </ul>  
                </div>
                </div>
                
            </div>


            <div className="container overflow-hidden">
            <p className="display-5 bittext">Volunteering</p>
            <div className="row gx-5">    
                <div className="col intern">
                    <h5 className="card-title ">(SDE) Developer</h5>
                    <a href="https://www.cwipedia.in/"><p>cwipedia.in</p></a>
                    <h6 className="card-subtitle mb-2 text-muted">2018 - present</h6>
                    <ul>
                        <li>I have Developed cwipedia front end using HTML, CSS, js, and bootstrap and I'm a regular contributor. also, I'm empowering the community of Diploma engineering students through cwipedia</li>
                    </ul>  
                </div>
                </div>
            </div>

           

            <div className="container overflow-hidden">
            <p className="display-6 bittext"><a href={cv}>Download Resume</a></p>
                <div className="row gx-5">    
                    <div className="col">
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>


            <div className="container overflow-hidden">
            <p className="display-5 bittext">Have you like my work?</p>
                <div className="row gx-5">    
                    <div className="col">
                    <h5 className="card-title ">lets talk</h5>
                    <div className="handler">
                            <div className="footersoc ">
                                <a aria-hidden="true" className="fa fa-envelope" href="mailto:shivamhande0000@gmail.com" id="devso" rel="noreferrer" target="_blank" title="mail us"></a>
                                <a aria-hidden="true" className="fa fa-instagram" href="http://instagram.com/shiv.am.h" id="devso" rel="noreferrer" target="_blank" title="follow us"></a>
                                <a aria-hidden="true" className="fa fa-twitter" href="https://twitter.com/ShivamHande" id="devso" rel="noreferrer" target="_blank" title="follow us"></a>
                                <a aria-hidden="true" className="fa fa-linkedin" href="https://www.linkedin.com/in/shivamh" id="devso" rel="noreferrer" target="_blank" title="follow us"></a>
                                <a aria-hidden="true" className="fa fa-github" href="https://github.com/aishivam" id="devso" rel="noreferrer" target="_blank" title="Join group"></a>
                                <a aria-hidden="true" className="fa fa-youtube-play" href="https://www.youtube.com/channel/UC0VEXsNow5cAJp9H2owWc-w" id="devso" rel="noreferrer" target="_blank" title="follow us"></a></div>
                                <hr/>
                            </div>
                    </div>
                </div>
            </div>




            </div>
  
        
        </>
    )

}
export default Resume;