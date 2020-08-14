import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                        I am Graduate Student in Moscow Institute of Physics and Technology (B.S in Computer Science).<br/>
                        I love learning new technologies, new programming languages ​​and am always in search of interesting projects.

                    </p>
                    <p>Now I am looking for New Grad Positions. I am always open to new interesting offers.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">My Experience</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Software Engineering </h3>
                    <p>I developed the framework for special binary formatting for signal data using python
                        and created a full-fledged python API to the internal framework written in C++.</p>
                    <p>Developed and improved of system flows dispatching, developed CPU-GPU high performance computing module, parallelized systems and modules from signal processing framework</p>
                    <p>I have experience developing websites using JavaScript, Node.js, React, Heroku, Docker, HTML, CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have successfully completed great courses on algorithms and data structures at the university.</p>
                    <p>
                        In my spare time I often do tasks on Leetcode and Codeforce to keep myself in shape.
                    </p>
                    <p>
                        I also often try to take part in mass programming contests.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>ML</h3>
                    <p>Developed neural networks for predictive models as well as special neural networks for radiosignal processing tasks.</p>
                    <p>I have experience working with models such as Linear Classificator, Linear Regression, SVM, Decision trees and Ensembles, Gradient boosting, Blending, Stacking.</p>
                    <p>Developed optimization algorithms for neural networks for signal-processing in team with renowned scientists Gasnikov and
Nesterov.
                        <br/>
                        <br/>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
