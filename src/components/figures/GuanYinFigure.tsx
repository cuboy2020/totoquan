import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const GuanYinFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="guanyin" title="Quán Thế Âm Bồ Tát" onClick={onClick}>
      <svg viewBox="0 0 130 150" width="100%" height="100%">
        <circle cx="65" cy="50" r="36" fill="rgba(220, 245, 255, 0.3)" stroke="#74b9ff" strokeWidth="2" strokeDasharray="5,3" />
        <g fill="#fd79a8" stroke="#e84393" strokeWidth="1.2">
          <ellipse cx="65" cy="130" rx="30" ry="10" />
          <path d="M 45 125 C 48 115, 62 115, 65 128 C 68 115, 82 115, 85 125 Z" />
        </g>
        <path d="M 48 122 C 45 95, 52 75, 65 75 C 78 75, 85 95, 82 122 Z" fill="#f5f6fa" stroke="#dcdde1" />
        <path d="M 50 45 C 50 30, 80 30, 80 45 C 80 65, 85 85, 82 95 L 48 95 C 45 85, 50 65, 50 45 Z" fill="#ffffff" />
        <circle cx="65" cy="50" r="14" fill="#ffeaa7" />
        <circle cx="65" cy="46" r="1.5" fill="#e84118" />
        <path d="M 59 49 Q 62 52 64 49" stroke="#718093" strokeWidth="1.5" fill="none" />
        <path d="M 66 49 Q 68 52 71 49" stroke="#718093" strokeWidth="1.5" fill="none" />
        <ellipse cx="76" cy="92" rx="4" ry="8" fill="#dff9fb" stroke="#00cec9" strokeWidth="1" />
        <path d="M 76 84 Q 82 76 86 78" stroke="#2ed573" strokeWidth="2.2" fill="none" />
      </svg>
    </div>
  );
};
