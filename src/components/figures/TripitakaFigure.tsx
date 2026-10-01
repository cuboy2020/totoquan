import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const TripitakaFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="tripitaka" title="Đường Tam Tạng" onClick={onClick}>
      <svg viewBox="0 0 120 110" width="100%" height="100%">
        <ellipse cx="60" cy="92" rx="34" ry="14" fill="#ffeaa7" stroke="#eccc68" strokeWidth="1.8" />
        <circle cx="42" cy="88" r="12" fill="#ffeaa7" />
        <circle cx="78" cy="88" r="13" fill="#ffeaa7" />
        <path d="M 44 88 C 42 68, 50 56, 60 56 C 70 56, 78 68, 76 88 Z" fill="#eb4d4b" stroke="#f0932b" strokeWidth="2" />
        <line x1="50" y1="62" x2="68" y2="84" stroke="#f1c40f" strokeWidth="2.5" />
        <ellipse cx="60" cy="68" rx="5" ry="8" fill="#ffeaa7" stroke="#e67e22" strokeWidth="1" />
        <circle cx="60" cy="42" r="15" fill="#ffeaa7" />
        <path d="M 46 36 L 52 20 L 60 16 L 68 20 L 74 36 Z" fill="#e74c3c" stroke="#f1c40f" strokeWidth="1.5" />
        <circle cx="60" cy="22" r="3" fill="#f1c40f" />
        <circle cx="55" cy="42" r="2.5" fill="#2f3542" />
        <circle cx="65" cy="42" r="2.5" fill="#2f3542" />
        <path d="M 57 48 Q 60 51 63 48" stroke="#c0392b" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};
