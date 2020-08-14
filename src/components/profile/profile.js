import React from "react";
import "./profile.scss";
import Popup from "reactjs-popup";
import Projects from "../projects/projects";
import Resume from "../resume/resume";


class Profile extends React.Component{

    render() {
        return (
            <body >
                <img src="./img/IMG_0070.jpg" id="kate"/>
                <p>Hi! I am Kate. I am Software Engineer at Huawei.</p>
                <Popup trigger={
                <button className="button">
                    Projects
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                </button>}
                    modal closeOnDocumentClick>
                    <Projects/>
                </Popup>
                <Popup trigger={
                <button className="button_cv">
                    Resume
                    <div className="button_cv__horizontal"></div>
                    <div className="button_cv__vertical"></div>
                </button>}
                       modal closeOnDocumentClick>
                       <Resume/>
                </Popup>
                <div className="location">
                    <div className="pin"></div>
                    <div id="location">Moscow</div>
                </div>


                <div id="button_contacts">
                    <h1 className='contacts_head'>Contacts</h1>
                    <div className='contacts'>
                       <a  className="1" href="tel:8-919-670-36-53">
                        <img id='phone' src='./img/phone.png'/>
                       </a>
                        <a href = "mailto:katyaklema@gmail.com?subject = Feedback&body = Hi Kate!">
                        <img id='mail' src='./img/mail.png'/>
                        </a>
                        <a className='phone' href="tel:8-919-670-36-53">+7-919-670-36-53</a>
                        <a className='mail' href = "mailto:katyaklema@gmail.com?subject = Feedback&body = Hi Kate!">katyaklema@gmail.com</a>
                    </div>

                </div>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="contact_buttons">
                <a href="https://www.instagram.com/katyaklema/?hl=ru" className="fa fa-instagram"></a>

                <a href="https://www.linkedin.com/in/ekaterina-klementeva-296b87168" className="fa fa-linkedin" ></a>

                <a href="https://join.skype.com/invite/JoUuFjGkO08I" className="fa fa-skype" ></a>
            </div>


            </body>
        );
    }
};

export default Profile;
