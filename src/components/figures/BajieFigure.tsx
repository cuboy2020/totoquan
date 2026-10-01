import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BajieFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="bajie" title="Thiên Bồng Nguyên Soái" onClick={onClick}>
      <svg viewBox="0 0 130 110" width="100%" height="100%">
        <ellipse cx="65" cy="90" rx="34" ry="14" fill="#fab1a0" stroke="#e17055" strokeWidth="1.8" />
        <circle cx="45" cy="86" r="13" fill="#fab1a0" />
        <circle cx="85" cy="86" r="14" fill="#fab1a0" />
        <rect x="75" y="15" width="4" height="60" fill="#636e72" transform="rotate(-30 75 45)" />
        <circle cx="65" cy="62" r="22" fill="#2d3436" />
        <circle cx="65" cy="38" r="19" fill="#ffbe76" />
        <ellipse cx="44" cy="36" rx="7" ry="14" fill="#f0932b" />
        <ellipse cx="86" cy="36" rx="7" ry="14" fill="#f0932b" />
        <ellipse cx="65" cy="42" rx="7" ry="5" fill="#f0932b" />
        <circle cx="63" cy="42" r="1.5" fill="#30336b" />
        <circle cx="67" cy="42" r="1.5" fill="#30336b" />
      </svg>
    </div>
  );
};
