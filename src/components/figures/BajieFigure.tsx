import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BajieFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="bajie" title="Thiên Bồng Nguyên Soái" onClick={onClick}>
      <svg viewBox="0 0 130 110" width="100%" height="100%">
        {/* Mây nâng bước */}
        <ellipse cx="65" cy="90" rx="34" ry="14" fill="#fab1a0" stroke="#e17055" strokeWidth="1.8" />
        <circle cx="45" cy="86" r="13" fill="#fab1a0" />
        <circle cx="85" cy="86" r="14" fill="#fab1a0" />
        {/* Cào sắt chín răng */}
        <rect x="75" y="15" width="4" height="60" fill="#636e72" transform="rotate(-30 75 45)" />
        {/* Bụng bự hoan hỷ */}
        <circle cx="65" cy="62" r="22" fill="#2d3436" />
        {/* Đầu Bát Giới tai to mặt lớn */}
        <circle cx="65" cy="38" r="19" fill="#ffbe76" />
        {/* Đôi tai heo to phe phẩy */}
        <ellipse cx="44" cy="36" rx="7" ry="14" fill="#f0932b" />
        <ellipse cx="86" cy="36" rx="7" ry="14" fill="#f0932b" />
        {/* Chân mày cười tươi vui vẻ */}
        <path d="M 54 28 Q 57.5 26 61 29" stroke="#d35400" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M 69 29 Q 72.5 26 76 28" stroke="#d35400" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        {/* Đôi mắt hí cười tít hớn hở */}
        <path d="M 55 33 Q 58 29.5 61 33" stroke="#2d3436" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <circle cx="58" cy="33.5" r="1.3" fill="#2d3436" />
        <path d="M 69 33 Q 72 29.5 75 33" stroke="#2d3436" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <circle cx="72" cy="33.5" r="1.3" fill="#2d3436" />
        {/* Mũi heo to tròn đặc trưng & 2 lỗ mũi */}
        <ellipse cx="65" cy="42" rx="7.5" ry="5.5" fill="#f0932b" stroke="#e17055" strokeWidth="1" />
        <circle cx="62.5" cy="42" r="1.6" fill="#30336b" />
        <circle cx="67.5" cy="42" r="1.6" fill="#30336b" />
        {/* Má hồng hào sảng */}
        <circle cx="52" cy="42" r="3.2" fill="rgba(231, 76, 60, 0.35)" />
        <circle cx="78" cy="42" r="3.2" fill="rgba(231, 76, 60, 0.35)" />
        {/* Miệng cười toe toét hoan hỷ khoái lạc */}
        <path d="M 58 49 Q 65 56 72 49" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 61 50.5 Q 65 54 69 50.5" fill="#e74c3c" opacity="0.6" />
      </svg>
    </div>
  );
};
