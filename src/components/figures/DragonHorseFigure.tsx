import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const DragonHorseFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="dragonHorse" title="Bạch Long Mã" onClick={onClick}>
      <svg viewBox="0 0 120 100" width="100%" height="100%">
        <ellipse cx="55" cy="82" rx="30" ry="12" fill="#e0f7fa" stroke="#80deea" strokeWidth="1.5" />
        <circle cx="35" cy="78" r="10" fill="#e0f7fa" />
        <circle cx="75" cy="78" r="11" fill="#e0f7fa" />
        <ellipse cx="55" cy="56" rx="26" ry="16" fill="#ffffff" stroke="#dcdde1" strokeWidth="1.5" />
        <path d="M 72 38 Q 80 46 76 56" stroke="#e74c3c" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M 28 52 Q 18 56 22 68" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M 68 56 L 82 34 L 96 42 L 80 64 Z" fill="#ffffff" stroke="#dcdde1" strokeWidth="1" />
        <path d="M 78 28 L 84 34 L 78 36 Z" fill="#ffffff" />
        <path d="M 83 26 L 88 18 L 89 28 Z" fill="#f1c40f" />
        <rect x="48" y="44" width="16" height="15" rx="3" fill="#c0392b" stroke="#f1c40f" strokeWidth="1" />
        <circle cx="88" cy="38" r="2.5" fill="#2c3e50" />
      </svg>
    </div>
  );
};
