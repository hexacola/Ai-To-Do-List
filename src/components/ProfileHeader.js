import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faChevronUp, 
  faTrophy, 
  faStar,
  faFire, 
  faClock,
  faListCheck,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

import { 
  getUserStats, 
  getUserRewards, 
  getLevelProgress, 
  getExperienceToNextLevel 
} from '../utils/rewards';

// Stilizuoti komponentai
const ProfileContainer = styled.div`
  background-color: var(--card-background);
  border-radius: 0;
  margin: var(--spacing-md) 0;
  padding: var(--spacing-lg);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: visible;
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 25px 25px 0;
    border-color: transparent var(--primary-yellow) transparent transparent;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    margin: var(--spacing-md) 0;
    padding: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    margin: var(--spacing-sm) 0;
    padding: var(--spacing-sm);
    border-width: 1px;
    border-left-width: 4px;
    
    &::after {
      border-width: 0 20px 20px 0;
    }
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  flex: 1;
  
  @media (max-width: 480px) {
    width: 100%;
    gap: 10px;
  }
`;

const LevelBadge = styled.div`
  background: var(--primary-red);
  color: var(--primary-yellow);
  font-weight: bold;
  width: 60px;
  height: 60px;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-family: 'Bebas Neue', sans-serif;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--primary-yellow);
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 22px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
    border-width: 1px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-yellow);
  letter-spacing: 1px;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
  margin-top: 8px;
  overflow: hidden;
  border: 1px solid var(--primary-yellow);
  
  @media (max-width: 480px) {
    height: 8px;
    margin-top: 6px;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.$progress}%;
  background: var(--primary-yellow);
  border-radius: 0;
  transition: width 0.5s ease;
`;

const ExpInfo = styled.div`
  font-size: 12px;
  margin-top: 3px;
  color: var(--light-text-color);
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-yellow);
  gap: 8px;
  font-weight: 500;
  user-select: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  background: var(--primary-red);
  padding: 8px 15px;
  border: 2px solid var(--primary-yellow);
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  min-width: 140px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 6px 12px;
    min-width: 120px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    font-size: 0.9rem;
    padding: 5px 10px;
    border-width: 1px;
  }
`;

const StatsContainer = styled(motion.div)`
  margin-top: var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-top: var(--spacing-md);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
  border-left: 4px solid var(--primary-yellow);
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    font-size: 24px;
    margin-bottom: 10px;
    color: var(--primary-yellow);
  }
  
  .stat-label {
    font-size: 14px;
    color: var(--light-text-color);
    text-align: center;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    
    svg {
      font-size: 20px;
      margin-bottom: 8px;
    }
    
    .stat-label {
      font-size: 12px;
    }
    
    .stat-value {
      font-size: 20px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    
    svg {
      font-size: 18px;
      margin-bottom: 0;
      margin-right: 10px;
    }
    
    .stat-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
    }
    
    .stat-label {
      margin-bottom: 2px;
    }
    
    .stat-value {
      font-size: 18px;
    }
  }
`;

const RewardsSection = styled.div`
  margin-top: var(--spacing-xl);
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    margin-top: var(--spacing-md);
  }
`;

const RewardsTitle = styled.h4`
  margin: 0 0 var(--spacing-lg) 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  color: var(--primary-yellow);
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-red);
  
  svg {
    color: var(--primary-yellow);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 8px;
    margin-bottom: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    gap: 6px;
    padding-bottom: 6px;
  }
`;

const RewardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const RewardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
  transition: all 0.2s ease;
  border-left: 4px solid var(--primary-yellow);
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
  
  .reward-icon {
    font-size: 28px;
    margin-bottom: 12px;
    color: var(--primary-yellow);
  }
  
  .reward-name {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
    margin-bottom: 8px;
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  .reward-desc {
    font-size: 13px;
    text-align: center;
    color: var(--light-text-color);
    font-family: 'Oswald', sans-serif;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    
    .reward-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }
    
    .reward-name {
      font-size: 14px;
      margin-bottom: 5px;
    }
    
    .reward-desc {
      font-size: 12px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    flex-direction: row;
    align-items: center;
    text-align: left;
    
    .reward-icon {
      font-size: 22px;
      margin-bottom: 0;
      margin-right: 12px;
    }
    
    .reward-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
    }
    
    .reward-name {
      margin-bottom: 3px;
    }
    
    .reward-desc {
      text-align: left;
    }
  }
`;

// Profile Header komponentas
const ProfileHeaderComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [stats, setStats] = useState(getUserStats());
  const [rewards, setRewards] = useState(getUserRewards());
  
  // Atnaujinti statistiką, kai pasikeičia profile header išskleidimas
  useEffect(() => {
    if (expanded) {
      setStats(getUserStats());
      setRewards(getUserRewards());
    }
  }, [expanded]);
  
  // Atnaujinti statistiką kas 30 sekundžių, jei profile header išskleistas
  useEffect(() => {
    if (!expanded) return;
    
    const interval = setInterval(() => {
      setStats(getUserStats());
      setRewards(getUserRewards());
    }, 30000);
    
    return () => clearInterval(interval);
  }, [expanded]);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const progress = getLevelProgress();
  const xpToNextLevel = getExperienceToNextLevel();
  
  return (
    <ProfileContainer>
      <ProfileHeader>
        <UserInfo>
          <LevelBadge>{stats.level}</LevelBadge>
          <UserDetails>
            <UserName>Produktyvumo lygis: {stats.level}</UserName>
            <ProgressContainer>
              <ProgressBar $progress={progress} />
            </ProgressContainer>
            <ExpInfo>
              {stats.experience} XP • Iki kito lygio: {xpToNextLevel} XP
            </ExpInfo>
          </UserDetails>
        </UserInfo>
        <ExpandButton onClick={toggleExpanded}>
          {expanded ? 'Sutraukti' : 'Išplėsti'}
          <FontAwesomeIcon 
            icon={expanded ? faChevronUp : faChevronDown}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </ExpandButton>
      </ProfileHeader>
      
      <AnimatePresence mode="wait">
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <StatsContainer>
              <StatItem>
                <FontAwesomeIcon icon={faListCheck} />
                <div className="stat-info">
                  <span className="stat-label">Užbaigtos užduotys</span>
                  <span className="stat-value">{stats.tasksCompleted}</span>
                </div>
              </StatItem>
              <StatItem>
                <FontAwesomeIcon icon={faFire} />
                <div className="stat-info">
                  <span className="stat-label">Dienų serija</span>
                  <span className="stat-value">{stats.streak}</span>
                </div>
              </StatItem>
              <StatItem>
                <FontAwesomeIcon icon={faClock} />
                <div className="stat-info">
                  <span className="stat-label">Praleista laiko</span>
                  <span className="stat-value">
                    {Math.floor(stats.timeSpentMinutes / 60)}h {stats.timeSpentMinutes % 60}m
                  </span>
                </div>
              </StatItem>
              <StatItem>
                <FontAwesomeIcon icon={faCalendarCheck} />
                <div className="stat-info">
                  <span className="stat-label">Žingsniai atlikti</span>
                  <span className="stat-value">{stats.subtasksCompleted}</span>
                </div>
              </StatItem>
            </StatsContainer>
            
            {rewards.length > 0 && (
              <RewardsSection>
                <RewardsTitle>
                  <FontAwesomeIcon icon={faTrophy} />
                  Apdovanojimai ({rewards.length})
                </RewardsTitle>
                <RewardsGrid>
                  {rewards.map(reward => (
                    <RewardItem key={reward.id}>
                      <span className="reward-icon">{reward.icon}</span>
                      <div className="reward-info">
                        <div className="reward-name">{reward.name}</div>
                        <div className="reward-desc">{reward.description}</div>
                      </div>
                    </RewardItem>
                  ))}
                </RewardsGrid>
              </RewardsSection>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ProfileContainer>
  );
};

export default ProfileHeaderComponent; 