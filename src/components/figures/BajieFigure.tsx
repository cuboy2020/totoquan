import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BajieFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="bajie" title="Thiên Bồng Nguyên Soái (Trư Bát Giới Mê Ăn)" onClick={onClick}>
      <svg viewBox="0 0 130 115" width="100%" height="100%">
        <defs>
          <radialGradient id="bajieSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffeaa7" />
            <stop offset="60%" stopColor="#fab1a0" />
            <stop offset="100%" stopColor="#e17055" />
          </radialGradient>
          <linearGradient id="steamedBun" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#f5f6fa" />
            <stop offset="100%" stopColor="#dcdde1" />
          </linearGradient>
        </defs>

        {/* Đám mây hồng nâng đỡ cái bụng bự */}
        <g id="cloud">
          <ellipse cx="65" cy="98" rx="38" ry="14" fill="#fab1a0" stroke="#e17055" strokeWidth="1.5" />
          <circle cx="38" cy="94" r="14" fill="#fab1a0" />
          <circle cx="65" cy="92" r="16" fill="#fab1a0" />
          <circle cx="92" cy="94" r="14" fill="#fab1a0" />
          <path d="M 38 98 Q 45 92 52 98" stroke="#ff7675" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 76 96 Q 84 90 90 96" stroke="#ff7675" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Cào sắt chín răng mini sau lưng */}
        <g transform="rotate(-35 88 50)">
          <rect x="86" y="10" width="5" height="65" rx="2" fill="#636e72" stroke="#2d3436" strokeWidth="1" />
          {/* Đầu cào và 9 răng cào */}
          <rect x="74" y="8" width="29" height="7" rx="1.5" fill="#747d8c" stroke="#2d3436" strokeWidth="1" />
          <line x1="75" y1="8" x2="75" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="78" y1="8" x2="78" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="81" y1="8" x2="81" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="84" y1="8" x2="84" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="87" y1="8" x2="87" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="8" x2="90" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="93" y1="8" x2="93" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="96" y1="8" x2="96" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
          <line x1="99" y1="8" x2="99" y2="2" stroke="#b2bec3" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Thân mình tròn vo núng nính */}
        <g id="body">
          {/* Bụng to tròn */}
          <circle cx="65" cy="72" r="25" fill="#2d3436" />
          {/* Bụng da heo hở áo tròn vo */}
          <circle cx="65" cy="74" r="17" fill="url(#bajieSkin)" />
          {/* Rốn xoắn ốc hài hước */}
          <path d="M 64 78 Q 66 79 66 77 Q 66 75 64 76" stroke="#d63031" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          {/* Viền áo cà sa đen phanh ngực */}
          <path d="M 45 64 Q 65 58 85 64 L 88 78 Q 65 68 42 78 Z" fill="#353b48" />
        </g>

        {/* Bánh bao trắng nóng hổi bốc khói trên tay trái */}
        <g id="bun">
          {/* Hơi khói thơm lượn lờ */}
          <path d="M 28 50 Q 24 42 27 36" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinecap="round" />
          <path d="M 33 48 Q 37 40 34 34" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinecap="round" />
          {/* Quả bánh bao trắng mịn */}
          <path d="M 22 62 C 20 54, 30 48, 32 48 C 34 48, 44 54, 42 62 C 40 68, 24 68, 22 62 Z" fill="url(#steamedBun)" stroke="#dcdde1" strokeWidth="1" />
          {/* Chóp nhăn bánh bao & chấm đỏ */}
          <path d="M 30 50 Q 32 47 34 50" stroke="#bdc3c7" strokeWidth="1.2" fill="none" />
          <circle cx="32" cy="51" r="1.2" fill="#eb4d4b" />
          {/* Tay móng heo múp míp ôm bánh bao */}
          <circle cx="38" cy="65" r="5" fill="#fab1a0" stroke="#e17055" strokeWidth="1" />
        </g>

        {/* Đầu Bát Giới to tròn phúng phính */}
        <g id="head">
          {/* Đôi tai heo bự phe phẩy hai bên */}
          <g id="ears">
            <ellipse cx="40" cy="38" rx="9" ry="16" fill="#fab1a0" stroke="#e17055" strokeWidth="1.2" transform="rotate(-15 40 38)" />
            <ellipse cx="40" cy="38" rx="5" ry="11" fill="#ff7675" opacity="0.6" transform="rotate(-15 40 38)" />
            <ellipse cx="90" cy="38" rx="9" ry="16" fill="#fab1a0" stroke="#e17055" strokeWidth="1.2" transform="rotate(15 90 38)" />
            <ellipse cx="90" cy="38" rx="5" ry="11" fill="#ff7675" opacity="0.6" transform="rotate(15 90 38)" />
          </g>

          {/* Đầu tròn xoe */}
          <circle cx="65" cy="40" r="24" fill="url(#bajieSkin)" />

          {/* Khăn chùm đầu hiệp khách màu lam đen */}
          <path d="M 45 28 Q 65 18 85 28 Q 80 20 65 20 Q 50 20 45 28 Z" fill="#2d3436" />
          <circle cx="65" cy="22" r="3" fill="#f1c40f" />

          {/* Chân mày cười tươi vui sướng */}
          <path d="M 50 30 Q 55 26 60 30" stroke="#d35400" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 70 30 Q 75 26 80 30" stroke="#d35400" strokeWidth="2.2" fill="none" strokeLinecap="round" />

          {/* Đôi mắt hí tít cười sướng tột độ */}
          <path d="M 50 35 Q 55 30 60 35" stroke="#2d3436" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 70 35 Q 75 30 80 35" stroke="#2d3436" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Nếp nhăn đuôi mắt cười hớn hở */}
          <line x1="47" y1="34" x2="49" y2="35" stroke="#2d3436" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="81" y1="35" x2="83" y2="34" stroke="#2d3436" strokeWidth="1.5" strokeLinecap="round" />

          {/* Chiếc Mũi Heo to bự đáng yêu & 2 lỗ mũi */}
          <g id="pigSnout">
            <ellipse cx="65" cy="45" rx="10" ry="7.5" fill="#f0932b" stroke="#e17055" strokeWidth="1.5" />
            <circle cx="61.5" cy="45" r="2.2" fill="#c0392b" />
            <circle cx="68.5" cy="45" r="2.2" fill="#c0392b" />
            {/* Đốm sáng trên mũi heo */}
            <ellipse cx="65" cy="41" rx="4" ry="1.5" fill="#ffeaa7" opacity="0.8" />
          </g>

          {/* Đôi má phúng phính hồng hào to bự */}
          <circle cx="48" cy="47" r="5" fill="#ff4757" opacity="0.45" />
          <circle cx="82" cy="47" r="5" fill="#ff4757" opacity="0.45" />

          {/* Miệng cười toe toét ngoác miệng khoái chí */}
          <path d="M 54 53 Q 65 63 76 53" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Vòm họng và chiếc lưỡi hồng */}
          <path d="M 57 54 Q 65 62 73 54 Z" fill="#eb4d4b" />
          <circle cx="65" cy="58" r="3.5" fill="#ff7675" />

          {/* Giọt nước dãi bóng loáng chảy tòng tọc cực hài hước */}
          <path d="M 74 54 Q 77 62 75 66 Q 73 66 73 63 Z" fill="#74b9ff" opacity="0.85" />
          <circle cx="74.5" cy="65.5" r="1.5" fill="#0984e3" />
          <circle cx="74" cy="65" r="0.5" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};
