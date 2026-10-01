import React from 'react';
import { SmokeCanvas } from '../canvas/SmokeCanvas';

interface IncenseStageProps {
  isOffering: boolean;
  offeringStartTime: number;
  isLit: boolean;
}

export const IncenseStage: React.FC<IncenseStageProps> = ({
  isOffering,
  offeringStartTime,
  isLit,
}) => {
  return (
    <div className="incense-stage">
      {/* Que nhang dâng lên từ dưới màn hình */}
      <div
        className={`offering-incense-wrapper ${isOffering ? 'offering-active' : ''}`}
        id="offeringIncense"
      >
        <div className="offering-stick"></div>
      </div>

      {/* Lớp khói nhang tỏa ngút ngàn */}
      <SmokeCanvas
        offeringStartTime={offeringStartTime}
        isLit={isLit}
      />

      {/* Cụm bát hương hoàng kim */}
      <div className="burner-assembly">
        <div className="sticks">
          <div className={`stick stick-1 ${isLit ? 'active' : ''}`} id="s1"></div>
          <div className={`stick stick-2 ${isLit ? 'active' : ''}`} id="s2"></div>
          <div className={`stick stick-3 ${isLit ? 'active' : ''}`} id="s3"></div>
        </div>
        <div className="censer-rim"></div>
        <div className="censer"></div>
        <div className="censer-base"></div>
      </div>
    </div>
  );
};
