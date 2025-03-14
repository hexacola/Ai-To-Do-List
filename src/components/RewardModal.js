import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: var(--spacing-md);
`;

const ModalContent = styled(motion.div)`
  background-color: var(--card-background);
  max-width: 500px;
  width: 100%;
  border-radius: 0;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--primary-yellow);
  border-left: 10px solid var(--primary-red);
  position: relative;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  background-color: var(--primary-yellow);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    color: var(--text-color);
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    font-size: 1.8rem;
    letter-spacing: 1px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 15px;
    
    svg {
      color: var(--primary-red);
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    
    h2 {
      font-size: 1.4rem;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-red);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const ModalBody = styled.div`
  padding: var(--spacing-lg);
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`;

const RewardItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-md);
  border-left: 5px solid var(--primary-yellow);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .reward-icon {
    font-size: 2.5rem;
    
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  
  .reward-details {
    flex: 1;
  }
  
  .reward-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    color: var(--primary-red);
    margin-bottom: 5px;
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  
  .reward-description {
    color: var(--subtask-text-color);
    font-size: 0.9rem;
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

// Naujas komponentas konfetti animacijai be išorinės bibliotekos
const ConfettiContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

const Confetti = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${props => props.color};
  opacity: 0.8;
  transform-origin: center;
`;

const RewardModal = ({ rewards, onClose }) => {
  // Paprastos konfeti animacijos generavimas
  const colors = ['#FFD700', '#FF4500', '#FF8C00', '#FF6347', '#FFA500'];
  const confettiCount = 50;
  
  const generateConfettiArray = () => {
    const confettiArray = [];
    for (let i = 0; i < confettiCount; i++) {
      confettiArray.push({
        id: i,
        x: Math.random() * 100,
        y: -20,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360
      });
    }
    return confettiArray;
  };
  
  const confettiArray = generateConfettiArray();
  
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  const contentVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    exit: { y: 100, opacity: 0 }
  };
  
  const rewardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: i => ({ 
      x: 0, 
      opacity: 1,
      transition: { 
        delay: i * 0.2,
        type: "spring", 
        stiffness: 300, 
        damping: 20
      }
    })
  };
  
  const confettiVariants = {
    initial: (confetti) => ({
      x: `${confetti.x}%`,
      y: "-10%",
      rotate: 0,
      scale: 0
    }),
    animate: (confetti) => ({
      x: [
        `${confetti.x}%`, 
        `${confetti.x - 20 + Math.random() * 40}%`, 
        `${confetti.x - 40 + Math.random() * 80}%`
      ],
      y: ["0%", "50%", "100%"],
      rotate: [0, confetti.rotation, confetti.rotation * 2],
      scale: [0, 1, 0.5],
      transition: {
        duration: 2.5 + Math.random() * 2,
        ease: "easeOut",
        delay: Math.random() * 0.5
      }
    })
  };
  
  return (
    <AnimatePresence mode="wait">
      <ModalOverlay
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        onClick={onClose}
      >
        <ModalContent
          variants={contentVariants}
          onClick={e => e.stopPropagation()}
        >
          {/* Konfeti animacija */}
          <ConfettiContainer>
            {confettiArray.map((confetti) => (
              <Confetti
                key={confetti.id}
                color={confetti.color}
                style={{ width: confetti.size, height: confetti.size }}
                custom={confetti}
                variants={confettiVariants}
                initial="initial"
                animate="animate"
              />
            ))}
          </ConfettiContainer>
          
          <ModalHeader>
            <h2>
              <FontAwesomeIcon icon={faTrophy} />
              Nauji apdovanojimai!
            </h2>
            <CloseButton onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </ModalHeader>
          <ModalBody>
            {rewards.map((reward, index) => (
              <RewardItem
                key={reward.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={rewardVariants}
              >
                <div className="reward-icon">
                  {reward.icon}
                </div>
                <div className="reward-details">
                  <div className="reward-name">{reward.name}</div>
                  <div className="reward-description">{reward.description}</div>
                </div>
              </RewardItem>
            ))}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </AnimatePresence>
  );
};

export default RewardModal;
