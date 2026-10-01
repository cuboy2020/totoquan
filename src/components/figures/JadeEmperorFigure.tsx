import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const JadeEmperorFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="jadeEmperor" title="Ngọc Hoàng Đại Đế" onClick={onClick}>
      <svg viewBox="0 0 130 150" width="100%" height="100%">
        <circle cx="65" cy="50" r="36" fill="rgba(255, 230, 120, 0.3)" stroke="#f39c12" strokeWidth="2" strokeDasharray="6,3" />
        <ellipse cx="65" cy="130" rx="32" ry="11" fill="#8c7ae6" />
        <circle cx="45" cy="126" r="12" fill="#9c88ff" />
        <circle cx="85" cy="126" r="12" fill="#9c88ff" />
        <path d="M 46 122 C 42 90, 50 72, 65 72 C 80 72, 88 90, 84 122 Z" fill="#f1c40f" stroke="#d35400" strokeWidth="1.5" />
        <rect x="62" y="76" width="6" height="22" rx="2" fill="#f5f6fa" stroke="#bdc3c7" strokeWidth="1.2" />
        <circle cx="65" cy="48" r="15" fill="#ffeaa7" />
        <path d="M 60 56 Q 65 72 70 56 Z" fill="#2c3e50" />
        <rect x="42" y="24" width="46" height="6" fill="#2c3e50" />
        <path d="M 52 30 L 78 30 L 75 36 L 55 36 Z" fill="#f39c12" />
        <line x1="46" y1="30" x2="46" y2="40" stroke="#f1c40f" strokeWidth="2" strokeDasharray="2,2" />
        <line x1="52" y1="30" x2="52" y2="41" stroke="#f1c40f" strokeWidth="2" strokeDasharray="2,2" />
        <line x1="65" y1="30" x2="65" y2="42" stroke="#e74c3c" strokeWidth="2" strokeDasharray="2,2" />
        <line x1="78" y1="30" x2="78" y2="41" stroke="#f1c40f" strokeWidth="2" strokeDasharray="2,2" />
        <line x1="84" y1="30" x2="84" y2="40" stroke="#f1c40f" strokeWidth="2" strokeDasharray="2,2" />
        <circle cx="58" cy="46" r="2" fill="#2c3e50" />
        <circle cx="72" cy="46" r="2" fill="#2c3e50" />
      </svg>
    </div>
  );
};
