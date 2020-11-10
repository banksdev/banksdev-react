import './Project.scss';
import Modal from 'react-modal';
import React, { useState } from 'react';
import disableScroll from 'disable-scroll';
import FullProject from './FullProject';

function Project(props) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => { 
        setIsOpen(true); 
        disableScroll.on() 
    }

    const closeModal = () => { 
        setIsOpen(false); 
        disableScroll.off() 
    }

    return (
        <div className="project-container">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={{overlay: {zIndex: 5}}}
                            >
                { FullProject(props) }
            
            </Modal>

            <div className="project" onClick={openModal}>
                <div className="project-cover-container">
                    <img src={props.image} alt="" className="project-cover-img"/>

                </div>

                <div className="project-description">
                    <h5 className="project-title">{props.title}</h5>
                    <p className="project-summary">{props.description}</p>
                    <p className="project-keywords"><b>Keywords:</b> {props.keywords.join(", ")}</p>

                </div>
            </div>
        </div>
    )
}

export default Project;