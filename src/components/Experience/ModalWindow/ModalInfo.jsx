import React from 'react';
import Modal from 'react-modal';
import './ModalInfo.css';

Modal.setAppElement('#root');

const ModalInfo = ({ details, closeModal }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="More Info"
      className="modal"
    >
      <div className="modal-content">
        <h2>{details.title}</h2>
        <div className="modal-pic-info">
            <img src={details.pics}   alt="Project Image" />
            <div className="modal-info-wrap">
                <h5>
                    <span className="info-mod">Date:</span>
                    <span className="date-info">{details.date}</span>
                </h5>
                <h5 className="p-skills">
                    <span className="info-mod">Skills:</span>
                    <span className="skills-info">{details.skills}</span>
                </h5>
                <h5 className="p-descr">
                    <span className="info-mod">Full Description: </span>
                    <span className="full-descr-content">{details.full_descr}</span>
                </h5>
            </div>
        </div>  
        
      </div>
        <div className="close-btn-container">
            <button onClick={closeModal}>Close</button>
        </div>
    </Modal>
  );
};

export default ModalInfo;