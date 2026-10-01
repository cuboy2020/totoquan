import React from 'react';

interface BambooShakerProps {
  isShaking: boolean;
}

export const BambooShaker: React.FC<BambooShakerProps> = ({ isShaking }) => {
  return (
    <div className={`shaker-container ${isShaking ? 'active' : ''}`} id="shakerBox">
      <div className="bamboo-tube"></div>
    </div>
  );
};
