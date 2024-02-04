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
            <img src={details.pic} alt="Project Image" />
            <div className="modal-info-wrap">
                <h5><span className="info-mod">Date:</span>{details.date}</h5>
                <p className="p-skills">
                    <span className="info-mod">Skills:</span>
                    <span className="skills-info">{details.skills}</span>
                </p>
                <p className="p-descr">
                    <span className="info-mod">Full Description: </span>
                    <span className="full-descr-content">{details.full_descr}</span>
                </p>
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