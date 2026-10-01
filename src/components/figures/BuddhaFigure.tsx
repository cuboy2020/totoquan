import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BuddhaFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="buddha" title="Như Lai Phật Tổ (Phật Hoan Hỷ Bụng Bự)" onClick={onClick}>
      <svg viewBox="0 0 160 160" width="100%" height="100%">
        <defs>
          <radialGradient id="buddhaSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff9e6" />
            <stop offset="65%" stopColor="#ffeaa7" />
            <stop offset="100%" stopColor="#f9ca24" />
          </radialGradient>
          <linearGradient id="lotusGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffeaa7" />
            <stop offset="60%" stopColor="#f1c40f" />
            <stop offset="100%" stopColor="#d35400" />
          </linearGradient>
        </defs>

        {/* Hào quang luân xa xoay tròn với tâm xoay chuẩn (80, 65) */}
        <g className="buddha-halo">
          <circle cx="80" cy="65" r="48" fill="rgba(255, 215, 0, 0.22)" stroke="#f1c40f" strokeWidth="2.5" strokeDasharray="8,5" />
          <circle cx="80" cy="65" r="38" fill="rgba(255, 235, 100, 0.28)" />
          {/* Các tia sáng luân xa xoay tròn */}
          <line x1="80" y1="17" x2="80" y2="25" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" />
          <line x1="80" y1="105" x2="80" y2="113" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="65" x2="40" y2="65" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" />
          <line x1="120" y1="65" x2="128" y2="65" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" />
          {/* Chữ Vạn hoàng kim ở trung tâm */}
          <text x="73" y="73" fontSize="22" fill="#f39c12" fontWeight="bold" fontFamily="sans-serif">卍</text>
        </g>

        {/* Tòa sen hoàng kim nở rộ tròn xoe */}
        <g id="lotusPlatform">
          <ellipse cx="80" cy="142" rx="44" ry="12" fill="url(#lotusGold)" stroke="#d35400" strokeWidth="1.5" />
          {/* Các cánh sen bụ bẫm */}
          <path d="M 40 138 C 45 120, 62 120, 68 138 Z" fill="url(#lotusGold)" stroke="#d35400" strokeWidth="1.2" />
          <path d="M 64 138 C 70 116, 90 116, 96 138 Z" fill="url(#lotusGold)" stroke="#d35400" strokeWidth="1.2" />
          <path d="M 92 138 C 98 120, 115 120, 120 138 Z" fill="url(#lotusGold)" stroke="#d35400" strokeWidth="1.2" />
        </g>

        {/* Thân mình cà sa cam vàng tròn vo phúc hậu */}
        <g id="body">
          {/* Bụng to tròn phúc tướng */}
          <ellipse cx="80" cy="106" rx="28" ry="24" fill="#e67e22" stroke="#d35400" strokeWidth="1.5" />
          {/* Vạt cà sa vàng vắt chéo để hở bụng tròn */}
          <path d="M 64 88 Q 80 120 96 114 L 92 128 Q 78 132 60 122 Z" fill="#f1c40f" />
          <circle cx="80" cy="116" r="14" fill="url(#buddhaSkin)" />
          {/* Rốn xoắn phúc quý */}
          <circle cx="80" cy="118" r="1.8" fill="#e67e22" />

          {/* Tay trái xoa cái bụng bự phúc hậu */}
          <g id="leftHand">
            <ellipse cx="68" cy="114" rx="6" ry="5" fill="url(#buddhaSkin)" stroke="#e67e22" strokeWidth="0.8" />
            <circle cx="64" cy="113" r="1.5" fill="#f39c12" />
          </g>

          {/* Tay phải giơ lên kết ấn cát tường làm động tác vẫy tay / bắn tim vui vẻ */}
          <g id="rightHand">
            <circle cx="98" cy="98" r="6" fill="url(#buddhaSkin)" stroke="#e67e22" strokeWidth="0.8" />
            {/* Hai ngón tay chụm lại hình bắn tim mini */}
            <path d="M 97 94 Q 96 88 98 86 Q 100 88 99 94" stroke="#e67e22" strokeWidth="1.5" fill="none" />
            <path d="M 100 95 Q 102 90 104 91 Q 104 94 102 96" stroke="#e67e22" strokeWidth="1.2" fill="none" />
            {/* Trái tim vàng nhỏ xíu bay ra từ ngón tay */}
            <path d="M 103 82 C 103 79, 106 78, 108 80 C 110 78, 113 79, 113 82 C 113 86, 108 88, 108 88 C 108 88, 103 86, 103 82 Z" fill="#f1c40f" opacity="0.9" />
          </g>
        </g>

        {/* Đầu Phật Chibi tròn vo hoan hỷ */}
        <g id="head">
          {/* Đôi tai to dài phúc hậu rủ tận vai lắc lư */}
          <ellipse cx="54" cy="68" rx="6.5" ry="14" fill="url(#buddhaSkin)" stroke="#fdcb6e" strokeWidth="1" />
          <ellipse cx="54" cy="72" rx="3.5" ry="8" fill="#f39c12" opacity="0.4" />
          <circle cx="54" cy="80" r="3" fill="url(#buddhaSkin)" />

          <ellipse cx="106" cy="68" rx="6.5" ry="14" fill="url(#buddhaSkin)" stroke="#fdcb6e" strokeWidth="1" />
          <ellipse cx="106" cy="72" rx="3.5" ry="8" fill="#f39c12" opacity="0.4" />
          <circle cx="106" cy="80" r="3" fill="url(#buddhaSkin)" />

          {/* Khuôn mặt tròn xoe phúc hậu */}
          <circle cx="80" cy="65" r="26" fill="url(#buddhaSkin)" />

          {/* Búi tóc nhục kế tròn trĩnh màu lam đen */}
          <circle cx="80" cy="40" r="11" fill="#2c3e50" />
          <circle cx="73" cy="42" r="5" fill="#2c3e50" />
          <circle cx="87" cy="42" r="5" fill="#2c3e50" />
          <circle cx="80" cy="33" r="5" fill="#2c3e50" />
          {/* Viên hồng ngọc đỉnh đầu */}
          <circle cx="80" cy="31" r="2.5" fill="#eb4d4b" />

          {/* Chấm chu sa đỏ rực may mắn giữa trán */}
          <circle cx="80" cy="52" r="2.8" fill="#e74c3c" />

          {/* Chân mày vòng cung hiền từ hoan hỷ */}
          <path d="M 64 54 Q 71 49 76 54" stroke="#d35400" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 84 54 Q 89 49 96 54" stroke="#d35400" strokeWidth="2.2" fill="none" strokeLinecap="round" />

          {/* Đôi mắt hí tít cười sảng khoái hoan hỷ tột cùng */}
          <path d="M 64 61 Q 70 56 76 61" stroke="#2d3436" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 84 61 Q 90 56 96 61" stroke="#2d3436" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Nếp nhăn mắt cười tươi */}
          <line x1="61" y1="60" x2="63" y2="61" stroke="#2d3436" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="97" y1="61" x2="99" y2="60" stroke="#2d3436" strokeWidth="1.5" strokeLinecap="round" />

          {/* Sống mũi tròn trĩnh phúc đức */}
          <ellipse cx="80" cy="65" rx="2.5" ry="1.8" fill="#e67e22" />

          {/* Đôi má bánh bao phúng phính hồng hào rạng rỡ */}
          <circle cx="61" cy="68" r="5.5" fill="#ff7675" opacity="0.6" />
          <circle cx="99" cy="68" r="5.5" fill="#ff7675" opacity="0.6" />

          {/* Miệng cười toe toét nở nụ cười từ bi tươi rói */}
          <path d="M 70 72 Q 80 82 90 72" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 73 73 Q 80 80 87 73 Z" fill="#eb4d4b" />
          <circle cx="80" cy="77" r="3.5" fill="#ff7675" />
        </g>
      </svg>
    </div>
  );
};
