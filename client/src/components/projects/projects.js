import React from "react";
import anime from "animejs"
// import './projects.scss'
class Projects extends React.Component {
    render() {

        return(<body className="projectsBody">
        <div className="svg-container">
          <svg viewBox="0 0 800 400" className="svg">
            <path id="curve" fill="#ff7a21" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
            </path>
          </svg>
        </div>

        <header>
          <h3>Projects</h3>

        </header>

        <main>
          <div className="wrapper_projects">
                    <div className="wrapper_projects__links" id="social">
                        <a className="social-link social-link--github" id="github" href="https://github.com/KatyaKlema">
                            <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                <title>
                                    github
                                </title>
                                <g className="social-group" fill="none" fill-rule="evenodd">
                                    <circle className="social-group__outline" stroke="#000" stroke-width="20" cx="300"
                                            cy="300" r="262.5"/>
                                    <circle className="social-group__inner-circle" fill="#000" cx="300" cy="300"
                                            r="252.5"/>
                                    <path className="social-group__icon"
                                          d="M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z"
                                          fill="#FFF" fill-rule="nonzero"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
        </main>

        <footer>
          <small>Wish you luck, <a href="https://www.instagram.com/katyaklema/?hl=ru">Kate</a>.</small>
        </footer>
        </body>);
    }
}

export default Projects;



