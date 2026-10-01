import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const RedBoyFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="redBoy" title="Thánh Anh Đại Vương" onClick={onClick}>
      <svg viewBox="0 0 110 110" width="100%" height="100%">
        <ellipse cx="55" cy="90" rx="30" ry="12" fill="#ff7675" stroke="#d63031" strokeWidth="1.8" />
        <line x1="25" y1="20" x2="65" y2="85" stroke="#b33939" strokeWidth="3" />
        <polygon points="55,54 42,80 68,80" fill="#eb2f06" stroke="#f6b93b" strokeWidth="1.5" />
        <circle cx="55" cy="42" r="17" fill="#ffeaa7" />
        <circle cx="42" cy="28" r="6" fill="#2d3436" />
        <circle cx="68" cy="28" r="6" fill="#2d3436" />
        <path d="M 55 34 Q 57 38 55 41 Q 53 38 55 34 Z" fill="#eb2f06" />
      </svg>
    </div>
  );
};
