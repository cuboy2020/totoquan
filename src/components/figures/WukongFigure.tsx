import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const WukongFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="wukong" title="Tề Thiên Đại Thánh (Ngộ Không Siêu Quậy)" onClick={onClick}>
      <svg viewBox="0 0 140 120" width="100%" height="100%">
        <defs>
          {/* Gradient Cân Đẩu Vân xốp mềm */}
          <linearGradient id="wukongCloud" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff9d2" />
            <stop offset="100%" stopColor="#f9ca24" />
          </linearGradient>
          {/* Gradient Đào Tiên má phính */}
          <radialGradient id="peachGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ff9ff3" />
            <stop offset="70%" stopColor="#ff4757" />
            <stop offset="100%" stopColor="#c0392b" />
          </radialGradient>
        </defs>

        {/* Đuôi khỉ uốn lượn ngộ nghĩnh */}
        <path d="M 38 82 Q 18 80 20 62 Q 22 50 32 55 Q 36 58 32 64" fill="none" stroke="#d35400" strokeWidth="4" strokeLinecap="round" />

        {/* Cân Đẩu Vân bồng bềnh */}
        <g id="cloud">
          <ellipse cx="70" cy="98" rx="42" ry="15" fill="url(#wukongCloud)" stroke="#f6b93b" strokeWidth="1.5" />
          <circle cx="42" cy="94" r="14" fill="url(#wukongCloud)" />
          <circle cx="64" cy="90" r="16" fill="url(#wukongCloud)" />
          <circle cx="88" cy="91" r="15" fill="url(#wukongCloud)" />
          <circle cx="106" cy="96" r="11" fill="url(#wukongCloud)" />
          {/* Xoáy mây hoạt hình */}
          <path d="M 40 95 Q 48 90 52 96" stroke="#f1c40f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 80 92 Q 88 88 92 94" stroke="#f1c40f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Như Ý Kim Cô Bổng kẹp nách oai phong nhưng tí hon */}
        <g transform="rotate(-25 80 55)">
          <rect x="25" y="52" width="90" height="6" rx="3" fill="#eb4d4b" stroke="#f1c40f" strokeWidth="1.2" />
          <rect x="25" y="52" width="16" height="6" rx="1.5" fill="#f1c40f" />
          <rect x="99" y="52" width="16" height="6" rx="1.5" fill="#f1c40f" />
          {/* Hoa văn kim cô bổng */}
          <line x1="33" y1="52" x2="33" y2="58" stroke="#d35400" strokeWidth="1" />
          <line x1="107" y1="52" x2="107" y2="58" stroke="#d35400" strokeWidth="1" />
        </g>

        {/* Thân mình và chiến giáp chibi */}
        <g id="body">
          <ellipse cx="68" cy="72" rx="18" ry="16" fill="#f39c12" stroke="#d35400" strokeWidth="1.5" />
          {/* Y phục da hổ quấn chéo */}
          <path d="M 54 75 Q 68 85 82 72 L 80 82 Q 68 88 54 82 Z" fill="#e67e22" />
          {/* Đai lưng đỏ thắt nơ */}
          <rect x="53" y="73" width="30" height="4" rx="2" fill="#c0392b" />
          <circle cx="68" cy="75" r="3" fill="#f1c40f" />
          {/* Tay áo giáp */}
          <circle cx="50" cy="70" r="6" fill="#e67e22" />
          <circle cx="86" cy="68" r="6" fill="#e67e22" />
        </g>

        {/* Quả Đào Tiên to đùng cắn dở trên tay */}
        <g id="peach">
          <path d="M 94 65 C 90 55, 102 48, 107 55 C 112 48, 124 55, 120 65 C 115 75, 107 77, 107 77 C 107 77, 98 75, 94 65 Z" fill="url(#peachGrad)" />
          {/* Vết cắn nham nhở hài hước */}
          <circle cx="118" cy="58" r="4.5" fill="#f9ca24" />
          <circle cx="119" cy="64" r="3.5" fill="#f9ca24" />
          {/* Cuống và lá đào */}
          <path d="M 107 54 Q 109 46 114 47 Q 112 51 107 54 Z" fill="#2ed573" />
          {/* Tay khỉ lông vàng ôm quả đào */}
          <circle cx="95" cy="68" r="5" fill="#e67e22" />
        </g>

        {/* Đầu Đại Thánh chibi tròn phúng phính */}
        <g id="head">
          {/* Đôi tai khỉ vểnh to tròn cực dễ thương */}
          <circle cx="45" cy="42" r="9" fill="#d35400" />
          <circle cx="45" cy="42" r="5.5" fill="#fab1a0" />
          <circle cx="91" cy="42" r="9" fill="#d35400" />
          <circle cx="91" cy="42" r="5.5" fill="#fab1a0" />

          {/* Lông đầu nâu cam xù tròn */}
          <circle cx="68" cy="42" r="23" fill="#d35400" />

          {/* Mặt khỉ hình trái tim / hồ lô đào hồng phấn */}
          <path d="M 53 40 C 53 28, 83 28, 83 40 C 85 52, 79 59, 68 60 C 57 59, 51 52, 53 40 Z" fill="#ffeaa7" />

          {/* Má phúng phính bên phải phồng to vì đang nhai đào! */}
          <ellipse cx="80" cy="48" rx="8" ry="6" fill="#ffeaa7" stroke="#fab1a0" strokeWidth="0.8" />
          {/* Vài mẩu vụn đào rơi bên mép hài hước */}
          <circle cx="85" cy="54" r="1" fill="#ff4757" />
          <circle cx="88" cy="51" r="0.8" fill="#ff4757" />

          {/* Hai má hồng ửng phấn anime */}
          <ellipse cx="55" cy="48" rx="4" ry="2.5" fill="#ff7675" opacity="0.6" />
          <ellipse cx="79" cy="48" rx="4.5" ry="3" fill="#ff7675" opacity="0.6" />

          {/* Vòng Kim Cô vàng óng & Lông Phượng Hoàng */}
          <path d="M 48 33 Q 68 24 88 33" stroke="#f1c40f" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Vòng xoắn Kim cô ở giữa trán */}
          <path d="M 64 30 C 64 26, 68 26, 68 28 C 68 31, 64 32, 68 33" stroke="#f39c12" strokeWidth="2.2" fill="none" />
          {/* Hai cọng lông phượng vĩ vểnh cao cong vút */}
          <path d="M 62 26 Q 45 4 38 12 Q 48 16 60 26" fill="#eb4d4b" opacity="0.9" />
          <path d="M 74 26 Q 91 4 98 12 Q 88 16 76 26" fill="#eb4d4b" opacity="0.9" />

          {/* Đôi mắt Hỏa Nhãn Kim Tinh to tròn long lanh Chibi */}
          {/* Mắt trái */}
          <g id="leftEye">
            <ellipse cx="58" cy="40" rx="6.5" ry="7.5" fill="#c0392b" stroke="#f1c40f" strokeWidth="1.2" />
            <circle cx="58" cy="40" r="5" fill="#2d3436" />
            <circle cx="58" cy="40" r="4.2" fill="#eb4d4b" />
            {/* Đồng tử sao vàng lấp lánh */}
            <polygon points="58,37 59,39.5 61.5,40 59,40.5 58,43 57,40.5 54.5,40 57,39.5" fill="#f1c40f" />
            {/* Đốm sáng phản chiếu to tròn dễ thương */}
            <circle cx="56" cy="37.5" r="2" fill="#ffffff" />
            <circle cx="60.5" cy="42" r="1" fill="#ffffff" />
          </g>

          {/* Mắt phải */}
          <g id="rightEye">
            <ellipse cx="76" cy="40" rx="6.5" ry="7.5" fill="#c0392b" stroke="#f1c40f" strokeWidth="1.2" />
            <circle cx="76" cy="40" r="5" fill="#2d3436" />
            <circle cx="76" cy="40" r="4.2" fill="#eb4d4b" />
            {/* Đồng tử sao vàng lấp lánh */}
            <polygon points="76,37 77,39.5 79.5,40 77,40.5 76,43 75,40.5 72.5,40 75,39.5" fill="#f1c40f" />
            {/* Đốm sáng phản chiếu to tròn */}
            <circle cx="74" cy="37.5" r="2" fill="#ffffff" />
            <circle cx="78.5" cy="42" r="1" fill="#ffffff" />
          </g>

          {/* Chân mày lém lỉnh */}
          <path d="M 53 32 Q 58 30 63 33" stroke="#b33939" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 71 33 Q 76 29 81 32" stroke="#b33939" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Mũi khỉ nhỏ nhắn xinh xinh */}
          <ellipse cx="67" cy="46" rx="2.5" ry="1.6" fill="#e74c3c" />
          <circle cx="66" cy="46.2" r="0.6" fill="#2c3e50" />
          <circle cx="68" cy="46.2" r="0.6" fill="#2c3e50" />

          {/* Miệng nhai phúng phính cười khì khì */}
          <path d="M 61 51 Q 67 56 73 50" stroke="#c0392b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          {/* Lưỡi hồng thè nhẹ tinh quái */}
          <path d="M 64 53 Q 67 57 70 53 Z" fill="#ff7675" />
        </g>
      </svg>
    </div>
  );
};
