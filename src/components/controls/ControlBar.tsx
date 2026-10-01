import React from 'react';

interface ControlBarProps {
  incenseCount: number;
  isOffering: boolean;
  isDrawing: boolean;
  offeringStep: 'idle' | 'offering' | 'praying';
  onLightIncense: () => void;
  onDrawFortune: () => void;
}

export const ControlBar: React.FC<ControlBarProps> = ({
  incenseCount,
  isOffering,
  isDrawing,
  offeringStep,
  onLightIncense,
  onDrawFortune,
}) => {
  let incenseBtnText = 'Thắp Nén Tâm Hương';
  if (offeringStep === 'offering') {
    incenseBtnText = 'Đang Dâng...';
  } else if (offeringStep === 'praying') {
    incenseBtnText = 'Khấn Nguyện...';
  }

  return (
    <div className="controls">
      <div className="action-group">
        <button
          className="btn-action btn-incense"
          id="lightBtn"
          onClick={onLightIncense}
          disabled={isOffering}
        >
          {incenseBtnText}
        </button>
        <button
          className="btn-action btn-fortune"
          id="fortuneBtn"
          onClick={onDrawFortune}
          disabled={isDrawing}
        >
          {isDrawing ? 'Đang Bốc Quẻ...' : 'Xin Xăm Bốc Quẻ'}
        </button>
      </div>
      <div className="stats">
        Đã thành tâm dâng:{' '}
        <span className="counter" id="countDisplay">
          {incenseCount}
        </span>{' '}
        nén hương
      </div>
      <div className="quote">
        "Thành tâm tất ứng • Cầu tài đắc tài, cầu bình an đắc cát tường."
      </div>
    </div>
  );
};
