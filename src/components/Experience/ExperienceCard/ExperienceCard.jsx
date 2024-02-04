import React, { useState } from 'react';
import './ExperienceCard.css';
import ModalInfo from '../ModalWindow/ModalInfo';

const ExperienceCard = ({ details }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


   return (
    <div className="experience-card">
      <h6>{details.title}</h6>
      <h6 className="work-duration">{details.date}</h6>

      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="button-container">
        <button onClick={openModal}>
          More Info
        </button>
      </div>

      {modalOpen && <ModalInfo details={details} closeModal={closeModal} />}
    </div>
  );
};

export default ExperienceCard;