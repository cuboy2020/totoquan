import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BuddhaFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="buddha" title="Như Lai Phật Tổ" onClick={onClick}>
      <svg viewBox="0 0 160 160" width="100%" height="100%">
        <g className="buddha-halo">
          <circle cx="80" cy="65" r="46" fill="rgba(255, 215, 0, 0.25)" stroke="#f1c40f" strokeWidth="2" strokeDasharray="6,4" />
          <circle cx="80" cy="65" r="36" fill="rgba(255, 235, 100, 0.3)" />
          <text x="73" y="72" fontSize="20" fill="#f39c12" fontWeight="bold">卍</text>
        </g>
        <path d="M 50 135 Q 80 150 110 135 Q 80 125 50 135 Z" fill="#e67e22" stroke="#d35400" strokeWidth="1.5" />
        <path d="M 40 130 C 45 115, 75 115, 80 135 C 85 115, 115 115, 120 130 Z" fill="#f1c40f" stroke="#d35400" strokeWidth="1.5" />
        <path d="M 56 125 C 50 95, 60 75, 80 75 C 100 75, 110 95, 104 125 Z" fill="#e67e22" />
        <path d="M 68 85 L 98 120 L 72 120 Z" fill="#f1c40f" />
        <circle cx="70" cy="98" r="5" fill="#ffeaa7" />
        <circle cx="90" cy="104" r="5" fill="#ffeaa7" />
        <circle cx="80" cy="55" r="17" fill="#ffeaa7" />
        <circle cx="80" cy="38" r="7" fill="#2c3e50" />
        <circle cx="80" cy="50" r="1.8" fill="#e74c3c" />
        <path d="M 73 54 Q 76 57 78 54" stroke="#7f8c8d" strokeWidth="1.8" fill="none" />
        <path d="M 82 54 Q 84 57 87 54" stroke="#7f8c8d" strokeWidth="1.8" fill="none" />
        <path d="M 77 62 Q 80 65 83 62" stroke="#c0392b" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};
