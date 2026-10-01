import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const WukongFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="wukong" title="Tề Thiên Đại Thánh" onClick={onClick}>
      <svg viewBox="0 0 140 120" width="100%" height="100%">
        <ellipse cx="65" cy="95" rx="35" ry="16" fill="#ffeaa7" stroke="#fdcb6e" strokeWidth="2" />
        <circle cx="45" cy="90" r="14" fill="#ffeaa7" />
        <circle cx="85" cy="90" r="15" fill="#ffeaa7" />
        <rect x="15" y="42" width="95" height="5" rx="2" fill="#d63031" stroke="#f1c40f" strokeWidth="1.5" />
        <ellipse cx="65" cy="65" rx="16" ry="18" fill="#f39c12" />
        <circle cx="65" cy="38" r="18" fill="#d35400" />
        <path d="M 56 36 C 56 28, 74 28, 74 36 C 74 46, 65 50, 65 50 C 65 50, 56 46, 56 36 Z" fill="#ffcccc" />
        <path d="M 50 30 Q 65 24 80 30" stroke="#f1c40f" strokeWidth="3.5" fill="none" />
        <circle cx="65" cy="27" r="3" fill="#f1c40f" />
        <circle cx="60" cy="36" r="3" fill="#2d3436" />
        <circle cx="70" cy="36" r="3" fill="#2d3436" />
        <path d="M 61 43 Q 65 47 69 43" stroke="#c0392b" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};
