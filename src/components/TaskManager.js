import React, { useState } from 'react';
import AIHelpModal from './AIHelpModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit, faTrash, 
  faCheckCircle, faCircle, faClock, faTasks, faListAlt,
  faExclamationTriangle, faQuestion, faTimes, faSave, faRobot
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TaskActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: var(--spacing-md);
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ActionButton = styled.button`
  background-color: ${props => props.$primary ? 'var(--primary-red)' : 
                             props.$warning ? '#ff3b30' : 
                             props.$edit ? 'var(--primary-yellow)' :
                             'var(--primary-blue)'};
  color: ${props => props.$edit ? 'var(--text-color)' : 'white'};
  border: none;
  padding: 10px 18px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1.2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  transition: all 0.2s ease;
  text-shadow: ${props => props.$edit ? 'none' : '1px 1px 0px rgba(0, 0, 0, 0.2)'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.25);
    background-color: ${props => props.$edit ? 'var(--primary-yellow)' : 
                                props.$warning ? '#ff2b20' : 
                                props.$primary ? 'var(--primary-red)' : 
                                'var(--primary-blue)'};
    filter: brightness(1.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  svg {
    font-size: 1.2rem;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 8px 12px;
  }
`;

const SubtaskButton = styled(ActionButton)`
  padding: 8px 12px;
  font-size: 0.95rem;
  font-weight: bold;
  
  &.ai-help {
    background-color: #4A90E2;
    color: white;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    
    &:hover {
      background-color: #3A80D2;
      box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 6px 10px;
  }
`;

const TaskSectionTitle = styled.h4`
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-yellow);
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--primary-red);
  }
`;

const SubtaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary-yellow);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    transform: translateX(2px);
  }
`;

const SubtaskCheckbox = styled.div`
  cursor: pointer;
  color: ${props => props.$completed ? 'var(--completed-color)' : 'var(--primary-yellow)'};
  font-size: 1.2rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.15);
  }
`;

const SubtaskText = styled.div`
  flex: 1;
  font-family: 'Oswald', sans-serif;
  font-size: 1.05rem;
  line-height: 1.3;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  color: ${props => props.$completed ? 'var(--subtask-text-color)' : 'var(--text-color)'};
  transition: all 0.3s ease;
`;

const SubtaskTime = styled.div`
  background-color: var(--primary-yellow);
  color: var(--text-color);
  padding: 4px 10px;
  font-size: 0.9rem;
  font-family: 'Bebas Neue', sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.5px;
  border-radius: 0;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 0.85rem;
  }
`;

const ConfirmDialog = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 59, 48, 0.95);
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  p {
    margin: 0;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg {
      font-size: 1.3rem;
    }
  }
  
  .confirm-buttons {
    display: flex;
    gap: 8px;
  }
  
  button {
    border: none;
    padding: 5px 12px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    
    &.confirm {
      background-color: white;
      color: #ff3b30;
    }
    
    &.cancel {
      background-color: transparent;
      color: white;
      border: 1px solid white;
    }
  }
`;

const EditableSubtask = styled.div`
  width: 100%;
  position: relative;
  
  textarea {
    width: 100%;
    padding: 10px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.05rem;
    line-height: 1.3;
    border: 2px solid var(--primary-yellow);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    resize: vertical;
    min-height: 60px;
    margin-bottom: 10px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
    }
  }
  
  .edit-controls {
    display: flex;
    gap: 10px;
  }
`;

// Add a new styled component for batch editing all subtasks
const BatchEditContainer = styled.div`
  margin-top: var(--spacing-md);
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 5px solid var(--primary-yellow);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
`;

const BatchEditTitle = styled.h4`
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-blue);
  margin-bottom: 15px;
  font-size: 1.3rem;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: var(--primary-yellow);
  }
`;

const SubtaskEditItem = styled.div`
  margin-bottom: 15px;
  
  .subtask-number {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-blue);
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.05rem;
    line-height: 1.3;
    border: 2px solid var(--primary-yellow);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    resize: vertical;
    min-height: 60px;
    margin-bottom: 5px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
    }
  }
`;

const BatchEditButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const TaskManager = ({ 
  task, 
  onTaskComplete, 
  onTaskEdit, 
  onTaskDelete, 
  onToggleSubtask 
}) => {
  const [aiHelpModalOpen, setAiHelpModalOpen] = useState(false);
  const [selectedSubtaskIndex, setSelectedSubtaskIndex] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [editingSubtask, setEditingSubtask] = useState(null);
  const [editedSubtaskText, setEditedSubtaskText] = useState('');
  const [batchEditing, setBatchEditing] = useState(false);
  const [batchEditedSubtasks, setBatchEditedSubtasks] = useState([]);
  
  const handleAIHelp = (subtaskIndex = 0) => {
    setSelectedSubtaskIndex(subtaskIndex);
    setAiHelpModalOpen(true);
  };
  
  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };
  
  const handleConfirmDelete = () => {
    if (onTaskDelete) {
      onTaskDelete(task.id);
    }
    setShowDeleteConfirm(false);
  };
  
  const handleEditTask = () => {
    if (task.subtasks && task.subtasks.length > 0) {
      // Initialize batch editing mode with current subtask values
      const initialSubtasks = task.subtasks.map(subtask => 
        typeof subtask === 'string' ? subtask : subtask.text
      );
      setBatchEditedSubtasks(initialSubtasks);
      setBatchEditing(true);
    } else if (onTaskEdit) {
      // If no subtasks, just edit the task directly
      onTaskEdit(task);
    }
  };
  
  const handleBatchEditChange = (index, value) => {
    const newEditedSubtasks = [...batchEditedSubtasks];
    newEditedSubtasks[index] = value;
    setBatchEditedSubtasks(newEditedSubtasks);
  };
  
  const handleSaveBatchEdit = () => {
    const updatedTask = { ...task };
    
    // Update all subtasks with edited values
    updatedTask.subtasks = task.subtasks.map((subtask, index) => {
      if (typeof subtask === 'string') {
        return batchEditedSubtasks[index];
      } else {
        return {
          ...subtask,
          text: batchEditedSubtasks[index]
        };
      }
    });
    
    if (onTaskEdit) {
      onTaskEdit(updatedTask);
    }
    
    setBatchEditing(false);
    setBatchEditedSubtasks([]);
  };
  
  const handleCancelBatchEdit = () => {
    setBatchEditing(false);
    setBatchEditedSubtasks([]);
  };
  
  const handleEditSubtask = (index) => {
    setEditingSubtask(index);
    const subtaskText = typeof task.subtasks[index] === 'string' 
      ? task.subtasks[index] 
      : task.subtasks[index].text;
    setEditedSubtaskText(subtaskText);
  };
  
  const handleSaveSubtask = () => {
    if (editingSubtask !== null && editedSubtaskText.trim()) {
      const updatedTask = { ...task };
      if (typeof updatedTask.subtasks[editingSubtask] === 'string') {
        updatedTask.subtasks[editingSubtask] = editedSubtaskText;
      } else {
        updatedTask.subtasks[editingSubtask] = {
          ...updatedTask.subtasks[editingSubtask],
          text: editedSubtaskText
        };
      }
      if (onTaskEdit) {
        onTaskEdit(updatedTask);
      }
      setEditingSubtask(null);
      setEditedSubtaskText('');
    }
  };
  
  const handleCancelEdit = () => {
    setEditingSubtask(null);
    setEditedSubtaskText('');
  };
  
  return (
    <>
      <div style={{ position: 'relative' }}>
        <AnimatePresence>
          {showDeleteConfirm && (
            <ConfirmDialog
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                Ar tikrai norite ištrinti šią užduotį?
              </p>
              <div className="confirm-buttons">
                <button className="confirm" onClick={handleConfirmDelete}>
                  Taip, ištrinti
                </button>
                <button className="cancel" onClick={() => setShowDeleteConfirm(false)}>
                  Atšaukti
                </button>
              </div>
            </ConfirmDialog>
          )}
        </AnimatePresence>
        
        <TaskActionButtons>
          <ActionButton 
            $edit={true}
            onClick={handleEditTask}
          >
            <FontAwesomeIcon icon={faEdit} />
            Redaguoti
          </ActionButton>
          <ActionButton 
            $warning={true}
            onClick={handleDeleteClick}
          >
            <FontAwesomeIcon icon={faTrash} />
            Ištrinti
          </ActionButton>
        </TaskActionButtons>
      </div>
      
      {batchEditing ? (
        <BatchEditContainer>
          <BatchEditTitle>
            <FontAwesomeIcon icon={faEdit} />
            Redaguoti visus žingsnius
          </BatchEditTitle>
          
          {batchEditedSubtasks.map((subtaskText, index) => (
            <SubtaskEditItem key={index}>
              <div className="subtask-number">Žingsnis {index + 1}</div>
              <textarea 
                value={subtaskText}
                onChange={(e) => handleBatchEditChange(index, e.target.value)}
                placeholder="Įveskite žingsnio tekstą..."
              />
            </SubtaskEditItem>
          ))}
          
          <BatchEditButtons>
            <ActionButton 
              onClick={handleSaveBatchEdit}
              style={{ backgroundColor: 'var(--completed-color)' }}
            >
              <FontAwesomeIcon icon={faSave} />
              Išsaugoti visus
            </ActionButton>
            <ActionButton 
              onClick={handleCancelBatchEdit}
              style={{ backgroundColor: 'var(--primary-red)' }}
            >
              <FontAwesomeIcon icon={faTimes} />
              Atšaukti
            </ActionButton>
          </BatchEditButtons>
        </BatchEditContainer>
      ) : (
        task.subtasks && task.subtasks.length > 0 && (
          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <TaskSectionTitle>
              <FontAwesomeIcon icon={faTasks || faListAlt} />
              Užduoties žingsniai:
            </TaskSectionTitle>
            {task.subtasks.map((subtask, index) => (
              <SubtaskItem 
                key={index}
              >
                {editingSubtask === index ? (
                  <EditableSubtask>
                    <textarea
                      value={editedSubtaskText}
                      onChange={(e) => setEditedSubtaskText(e.target.value)}
                      placeholder="Įveskite žingsnio tekstą..."
                    />
                    <div className="edit-controls">
                      <SubtaskButton 
                        onClick={handleSaveSubtask}
                        style={{ backgroundColor: 'var(--completed-color)' }}
                      >
                        <FontAwesomeIcon icon={faSave} />
                        Išsaugoti
                      </SubtaskButton>
                      <SubtaskButton 
                        onClick={handleCancelEdit}
                        style={{ backgroundColor: 'var(--primary-red)' }}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                        Atšaukti
                      </SubtaskButton>
                    </div>
                  </EditableSubtask>
                ) : (
                  <>
                    <SubtaskCheckbox 
                      $completed={task.subtasksCompleted && task.subtasksCompleted[index]}
                      onClick={() => onToggleSubtask(task.id, index)}
                    >
                      <FontAwesomeIcon 
                        icon={task.subtasksCompleted && task.subtasksCompleted[index] 
                          ? faCheckCircle 
                          : faCircle} 
                      />
                    </SubtaskCheckbox>
                    <SubtaskText 
                      $completed={task.subtasksCompleted && task.subtasksCompleted[index]}
                    >
                      {typeof subtask === 'string' ? subtask : subtask.text}
                    </SubtaskText>
                    <SubtaskTime>
                      <FontAwesomeIcon icon={faClock} />
                      {typeof subtask === 'string' ? '10' : subtask.timeEstimate} min
                    </SubtaskTime>
                    <SubtaskButton 
                      className="ai-help"
                      onClick={() => handleAIHelp(index)}
                    >
                      <FontAwesomeIcon icon={faRobot} />
                      AI pagalba
                    </SubtaskButton>
                  </>
                )}
              </SubtaskItem>
            ))}
          </div>
        )
      )}
      
      <AIHelpModal
        task={task}
        subtaskIndex={selectedSubtaskIndex}
        isOpen={aiHelpModalOpen}
        onClose={() => setAiHelpModalOpen(false)}
      />
    </>
  );
};

export default TaskManager; 