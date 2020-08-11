import React from "react";
import './projects.scss'
import Resume from "../resume/resume";
import Popup from "reactjs-popup";
class Projects extends React.Component {
    render() {
        return(
            <body className="projectsBody">
                <div className="svg-container">
                    <svg viewBox="0 0 800 400" className="svg">
                        <path id="curve" fill="#ff7a21" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
                        </path>
                    </svg>
                </div>

                <header className="projects_header">
                <a className="projects" href="https://github.com/KatyaKlema">
                    Projects
                </a>}
                    <a className="github" href="https://github.com/KatyaKlema">
                        <img src="./img/github_logo.png"/>
                    </a>
                </header>

                <footer className="projects_footer">
                    <small className='projects_small'>Wish you luck, <a href="https://www.instagram.com/katyaklema/?hl=ru">Kate</a>.</small>
                </footer>
            </body>);

    }
}

export default Projects;



