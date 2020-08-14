import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Huawei <span>Oct. 2019 - Present</span></h2>
                        <p>
                          Developed and improved of system flows dispatching, developed CPU-GPU high performance computing module, parallelized systems and modules from signal processing framework. <br/>
                          Developed the framework for special binary formatting for signal data. <br/>
                          Designed optimization algorithms for neural networks for signal-processing in team. with renowned scientists Gasnikov and
                          Nesterov. <br/>
                          Creating a full-fledged python API to the internal framework written in C++ for solving special signal-processing tasks.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Intern at Huawei <span>Jul. 2019 - Oct. 2019</span></h2>
                        <p>
                          Developed a module for tensorflow using C++ for linearizing specific complex radio engineering signals.<br/>
                          Result: Written in C++ for tensorflow, the module works 20% faster and 11compared to the classic tensorflow tools. This helped to
solve specialized tasks for radio signals more optimally.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Junior Analyst at Competentum - EPAM family <span>Sep. 2018 - Jan. 2019</span></h2>
                        <p>
                            Performed data analysis, analytical researching, requirements validation, requirements analysis, prototyping of interfaces, platform testing, functional testing of the Pearson Education platform, wrote reports.<br/>
                            Result: Optimization of team work, better verification of requirements, the platform for online learning has been successfully implemented for the public.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Intern at Competentum - EPAM family <span>Jul. 2018 - Aug. 2018</span></h2>
                        <p>
                            Implemented a special application which allows to teachers to generate a certain number of tasks from one sample task given for their students (concerning the E-Learning sphere). <br/>
                            Result: The system was implemented and successfully integrated into the tutoring workflow.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mathematics Teacher at Olympiad Winners Association <span>Oct. 2017 - May 2019</span></h2>
                        <p>
                            Trained high-school students for country-wide mathematics olympiads and contests. <br/>
                            Result: 4 of my students became winners of the mathematical olympiads.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
