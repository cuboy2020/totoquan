import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BullKingFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="bullKing" title="Bình Thiên Đại Thánh" onClick={onClick}>
      <svg viewBox="0 0 130 120" width="100%" height="100%">
        <ellipse cx="65" cy="98" rx="35" ry="13" fill="#57606f" stroke="#2f3542" strokeWidth="1.5" />
        <path d="M 48 35 Q 25 15 32 0 Q 42 16 52 28 Z" fill="#2f3542" stroke="#1e272e" strokeWidth="1" />
        <path d="M 82 35 Q 105 15 98 0 Q 88 16 78 28 Z" fill="#2f3542" stroke="#1e272e" strokeWidth="1" />
        <path d="M 44 95 C 40 70, 50 62, 65 62 C 80 62, 90 70, 86 95 Z" fill="#383b40" stroke="#f1c40f" strokeWidth="1.5" />
        <circle cx="65" cy="42" r="20" fill="#747d8c" />
        <circle cx="65" cy="54" r="5" fill="none" stroke="#f1c40f" strokeWidth="2.5" />
        <circle cx="56" cy="38" r="3" fill="#d63031" />
        <circle cx="74" cy="38" r="3" fill="#d63031" />
      </svg>
    </div>
  );
};
