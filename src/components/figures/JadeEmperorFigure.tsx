import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const JadeEmperorFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="jadeEmperor" title="Ngọc Hoàng Đại Đế (Thiên Tử Cực Ngầu)" onClick={onClick}>
      <svg viewBox="0 0 130 150" width="100%" height="100%">
        <defs>
          <radialGradient id="emperorSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff9e6" />
            <stop offset="70%" stopColor="#ffeaa7" />
            <stop offset="100%" stopColor="#f9ca24" />
          </radialGradient>
          <linearGradient id="goldIngot" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff275" />
            <stop offset="60%" stopColor="#f1c40f" />
            <stop offset="100%" stopColor="#f39c12" />
          </linearGradient>
        </defs>

        {/* Hào quang thiên đình rực rỡ */}
        <circle cx="65" cy="56" r="42" fill="rgba(255, 230, 120, 0.22)" stroke="#f39c12" strokeWidth="2" strokeDasharray="6,4" />

        {/* Đám mây tím hoàng gia bồng bềnh */}
        <g id="cloud">
          <ellipse cx="65" cy="134" rx="40" ry="13" fill="#8c7ae6" stroke="#5f27cd" strokeWidth="1.5" />
          <circle cx="36" cy="128" r="14" fill="#9c88ff" />
          <circle cx="65" cy="126" r="16" fill="#9c88ff" />
          <circle cx="94" cy="128" r="14" fill="#9c88ff" />
          <path d="M 40 132 Q 50 126 56 132" stroke="#5f27cd" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 74 130 Q 82 124 88 130" stroke="#5f27cd" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Thân mình long bào vàng bệ vệ tròn xoe */}
        <g id="body">
          <ellipse cx="65" cy="98" rx="26" ry="24" fill="#f1c40f" stroke="#d35400" strokeWidth="1.8" />
          {/* Hoa văn rồng con tròn vo trên ngực áo */}
          <circle cx="65" cy="95" r="12" fill="#eb4d4b" stroke="#f39c12" strokeWidth="1" />
          <path d="M 60 95 Q 65 88 70 95 Q 65 102 60 95 Z" fill="#f1c40f" />
          <circle cx="64" cy="94" r="1.2" fill="#2d3436" />
          {/* Đai ngọc hoàng gia quanh bụng */}
          <rect x="42" y="105" width="46" height="6" rx="3" fill="#eb4d4b" />
          <rect x="58" y="104" width="14" height="8" rx="2" fill="#2ed573" stroke="#f1c40f" strokeWidth="1" />

          {/* Thỏi Vàng Hoàng Kim siêu bự cầm trên tay trái */}
          <g id="ingot">
            <path d="M 82 92 C 80 84, 102 82, 106 88 C 110 82, 118 84, 116 92 C 116 100, 82 100, 82 92 Z" fill="url(#goldIngot)" stroke="#d35400" strokeWidth="1" />
            <ellipse cx="99" cy="88" rx="8" ry="3.5" fill="#ffeaa7" />
            {/* Tia lấp lánh thỏi vàng */}
            <polygon points="108,80 110,83 113,83 111,85 112,88 109,86 107,88 108,85 106,83 108,83" fill="#ffffff" />
            {/* Tay áo hoàng kim ôm thỏi vàng */}
            <circle cx="86" cy="98" r="5" fill="#f39c12" />
          </g>

          {/* Tay phải cầm Ngọc Khuê phát sáng */}
          <g id="jadeTablet">
            <rect x="36" y="80" width="7" height="24" rx="2.5" fill="#f5f6fa" stroke="#2ed573" strokeWidth="1.2" />
            <circle cx="39.5" cy="84" r="1.5" fill="#2ed573" />
            <circle cx="40" cy="96" r="5" fill="#f39c12" />
          </g>
        </g>

        {/* Đầu Ngọc Hoàng tròn vo bệ vệ */}
        <g id="head">
          <circle cx="65" cy="56" r="23" fill="url(#emperorSkin)" />

          {/* Đôi tai to phúc hậu */}
          <ellipse cx="40" cy="58" rx="4.5" ry="7" fill="url(#emperorSkin)" stroke="#fdcb6e" strokeWidth="0.8" />
          <ellipse cx="90" cy="58" rx="4.5" ry="7" fill="url(#emperorSkin)" stroke="#fdcb6e" strokeWidth="0.8" />

          {/* Kính Râm Ngọc Đen "Boss Cõi Trời" cực ngầu kéo trễ xuống mũi */}
          <g id="sunglasses">
            {/* Gọng vàng */}
            <line x1="44" y1="52" x2="86" y2="52" stroke="#f1c40f" strokeWidth="2" strokeLinecap="round" />
            {/* Tròng kính trái */}
            <rect x="44" y="47" width="18" height="13" rx="4" fill="#2d3436" stroke="#f1c40f" strokeWidth="1.2" />
            <line x1="47" y1="49" x2="52" y2="57" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <line x1="53" y1="49" x2="57" y2="55" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
            {/* Tròng kính phải */}
            <rect x="68" y="47" width="18" height="13" rx="4" fill="#2d3436" stroke="#f1c40f" strokeWidth="1.2" />
            <line x1="71" y1="49" x2="76" y2="57" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <line x1="77" y1="49" x2="81" y2="55" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
            {/* Cầu kính nối giữa */}
            <line x1="62" y1="51" x2="68" y2="51" stroke="#f1c40f" strokeWidth="2.5" />
          </g>

          {/* Đôi mắt to tròn Chibi nhìn hé qua mép trên kính râm */}
          <circle cx="53" cy="45" r="3.2" fill="#2d3436" />
          <circle cx="52" cy="44" r="1.2" fill="#ffffff" />
          <circle cx="77" cy="45" r="3.2" fill="#2d3436" />
          <circle cx="76" cy="44" r="1.2" fill="#ffffff" />

          {/* Lông mày kiếm đế vương rậm rạp */}
          <path d="M 44 40 Q 52 36 59 41" stroke="#2d3436" strokeWidth="2.8" fill="none" strokeLinecap="round" />
          <path d="M 71 41 Q 78 36 86 40" stroke="#2d3436" strokeWidth="2.8" fill="none" strokeLinecap="round" />

          {/* Đôi má bánh bao hồng hào quyền quý */}
          <ellipse cx="44" cy="62" rx="4.5" ry="3" fill="#ff7675" opacity="0.55" />
          <ellipse cx="86" cy="62" rx="4.5" ry="3" fill="#ff7675" opacity="0.55" />

          {/* Ria mép hình cánh én vểnh hai bên & Chòm râu dài thon gọn */}
          <g id="beard">
            {/* Ria mép vểnh */}
            <path d="M 52 64 Q 65 67 78 64 Q 74 61 65 62 Q 56 61 52 64 Z" fill="#2d3436" />
            {/* Miệng cười mỉm tự mãn đáng yêu */}
            <path d="M 60 65 Q 65 69 70 65" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            {/* Chòm râu cằm dài uốn lượn */}
            <path d="M 58 66 Q 65 86 72 66 Q 68 76 65 82 Q 62 76 58 66 Z" fill="#2d3436" />
          </g>

          {/* Mũ Bình Thiên & Chuỗi Ngọc rủ lắc lư nhí nhảnh */}
          <g id="imperialCrown">
            {/* Đỉnh mũ đen phẳng */}
            <rect x="36" y="24" width="58" height="7" rx="2" fill="#2d3436" stroke="#f1c40f" strokeWidth="1" />
            {/* Thân mũ vàng */}
            <path d="M 50 31 L 80 31 L 76 40 L 54 40 Z" fill="#f39c12" stroke="#d35400" strokeWidth="1" />
            <circle cx="65" cy="35" r="3" fill="#eb4d4b" stroke="#f1c40f" strokeWidth="0.8" />
            {/* 5 chuỗi ngọc rủ đung đưa */}
            <line x1="42" y1="31" x2="42" y2="44" stroke="#f1c40f" strokeWidth="2.2" strokeDasharray="2,2" strokeLinecap="round" />
            <line x1="50" y1="31" x2="50" y2="46" stroke="#2ed573" strokeWidth="2.2" strokeDasharray="2,2" strokeLinecap="round" />
            <line x1="65" y1="31" x2="65" y2="48" stroke="#eb4d4b" strokeWidth="2.5" strokeDasharray="2,2" strokeLinecap="round" />
            <line x1="80" y1="31" x2="80" y2="46" stroke="#2ed573" strokeWidth="2.2" strokeDasharray="2,2" strokeLinecap="round" />
            <line x1="88" y1="31" x2="88" y2="44" stroke="#f1c40f" strokeWidth="2.2" strokeDasharray="2,2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};
