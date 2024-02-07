import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalInfo.css';

Modal.setAppElement('#root');

const ModalInfo = ({ details, closeModal }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="More Info"
      className="modal"
    >
      <div className="modal-content">
        <h2>{details.title}</h2>
        <div className="modal-info-wrap">
          <h5 className="h5-date">
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

      <div className="pic-modal-div">
      {Array.isArray(details.pics) &&
        details.pics.map((pic, index) => (
        <div key={index} className="thumbnail-container">
          {details.id === 1 && index === 0 ? (
            <img
              src={pic}
              alt={`Full Size ${index}`}
              className="single-img" 
              onClick={() => handleImageClick(pic)}
            />
          ) : (
            <img
              src={pic}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => handleImageClick(pic)}
            />
          )}
        </div>
      ))}

</div>


      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Size" className="fullsize" />
        </div>
      )}

      <div className="close-btn-container">
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default ModalInfo;