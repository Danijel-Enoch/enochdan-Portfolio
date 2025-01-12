import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red">About me</h1>
                            <hr></hr>
                            <p>Ambitious full-stack developer, a self-led learner and team player  <br></br>
                                with one year of experience in web developement.
                            </p>
                            <p>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p>
                                Previously worked as Full stack web developer.<br></br>
                                The technology I've worked on : <span className="text-red ls-2">Asp.Net Core, Asp.Net Mvc, <br></br>
                                php,reactjs,Solidity, Sql, Rust, Chakra-UI, Html, Css, Js, Bootstrap </span>
                            </p>
                            <p>
                                Currently Learning React Js Library
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About