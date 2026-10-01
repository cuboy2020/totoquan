import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BullKingFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="bullKing" title="Bình Thiên Đại Thánh (Ngưu Ma Vương Ngố)" onClick={onClick}>
      <svg viewBox="0 0 130 120" width="100%" height="100%">
        <defs>
          <radialGradient id="bullSkin" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#8395a7" />
            <stop offset="70%" stopColor="#576574" />
            <stop offset="100%" stopColor="#222f3e" />
          </radialGradient>
        </defs>

        {/* Đám mây giông bão sấm chớp chibi */}
        <g id="cloud">
          <ellipse cx="65" cy="102" rx="38" ry="14" fill="#57606f" stroke="#2f3542" strokeWidth="1.5" />
          <circle cx="36" cy="98" r="14" fill="#57606f" />
          <circle cx="65" cy="95" r="16" fill="#57606f" />
          <circle cx="94" cy="98" r="14" fill="#57606f" />
          {/* Tia sét vàng tí hon chớp nháy */}
          <polygon points="63,106 68,106 65,112 70,112 62,118 64,113 60,113" fill="#f1c40f" />
        </g>

        {/* Cặp sừng trâu cong to uỳnh nhưng tròn trịa */}
        <g id="horns">
          {/* Sừng trái */}
          <path d="M 46 36 C 25 18, 18 2, 32 0 C 38 12, 48 24, 52 32 Z" fill="#2f3542" stroke="#1e272e" strokeWidth="1.5" />
          <path d="M 30 6 Q 34 16 42 24" stroke="#747d8c" strokeWidth="1.5" fill="none" opacity="0.6" />
          {/* Sừng phải */}
          <path d="M 84 36 C 105 18, 112 2, 98 0 C 92 12, 82 24, 78 32 Z" fill="#2f3542" stroke="#1e272e" strokeWidth="1.5" />
          <path d="M 100 6 Q 96 16 88 24" stroke="#747d8c" strokeWidth="1.5" fill="none" opacity="0.6" />

          {/* Chú chim sẻ vàng tí hon đậu trên sừng phải siêu tấu hài */}
          <g id="cuteBird">
            {/* Thân chim */}
            <circle cx="106" cy="2" r="5" fill="#f1c40f" />
            <circle cx="109" cy="0" r="3.5" fill="#f1c40f" />
            {/* Mỏ cam */}
            <polygon points="112,0 115,-1 112,-2" fill="#e67e22" />
            {/* Mắt chim chấm bi */}
            <circle cx="109.5" cy="-0.5" r="0.8" fill="#2d3436" />
            {/* Cánh chim */}
            <ellipse cx="104" cy="2" rx="3" ry="1.8" fill="#f39c12" />
            {/* Chân chim bám vào sừng */}
            <line x1="105" y1="7" x2="105" y2="4" stroke="#d35400" strokeWidth="1" />
            <line x1="107" y1="7" x2="107" y2="4" stroke="#d35400" strokeWidth="1" />
          </g>
        </g>

        {/* Thân giáp sắt bệ vệ nhưng tròn như quả bóng */}
        <g id="body">
          <ellipse cx="65" cy="78" rx="22" ry="18" fill="#2f3542" stroke="#f1c40f" strokeWidth="1.5" />
          {/* Đai lưng hoàng kim với mặt ngọc */}
          <rect x="47" y="80" width="36" height="5" rx="2.5" fill="#f1c40f" />
          <circle cx="65" cy="82.5" r="3.5" fill="#eb4d4b" stroke="#f1c40f" strokeWidth="0.8" />
          {/* Giáp vai tròn */}
          <circle cx="43" cy="74" r="7" fill="#57606f" stroke="#f1c40f" strokeWidth="1" />
          <circle cx="87" cy="74" r="7" fill="#57606f" stroke="#f1c40f" strokeWidth="1" />
        </g>

        {/* Đầu Ngưu Ma Vương to tròn ngộ nghĩnh */}
        <g id="head">
          {/* Đôi tai trâu vểnh ngang */}
          <ellipse cx="40" cy="46" rx="9" ry="5.5" fill="#57606f" stroke="#2f3542" strokeWidth="1" transform="rotate(-15 40 46)" />
          <ellipse cx="40" cy="46" rx="5" ry="3" fill="#ff7675" opacity="0.6" transform="rotate(-15 40 46)" />
          <ellipse cx="90" cy="46" rx="9" ry="5.5" fill="#57606f" stroke="#2f3542" strokeWidth="1" transform="rotate(15 90 46)" />
          <ellipse cx="90" cy="46" rx="5" ry="3" fill="#ff7675" opacity="0.6" transform="rotate(15 90 46)" />

          {/* Đầu tròn xoe da trâu xám tro */}
          <circle cx="65" cy="48" r="23" fill="url(#bullSkin)" />

          {/* Chỏm tóc xoăn tít trên đỉnh đầu */}
          <circle cx="65" cy="27" r="4.5" fill="#1e272e" />
          <circle cx="61" cy="28" r="3.5" fill="#1e272e" />
          <circle cx="69" cy="28" r="3.5" fill="#1e272e" />

          {/* Đôi lông mày rậm rạp làm bộ dữ dằn nhưng ngố tàu */}
          <path d="M 48 37 Q 55 35 60 40" stroke="#1e272e" strokeWidth="3.2" fill="none" strokeLinecap="round" />
          <path d="M 70 40 Q 75 35 82 37" stroke="#1e272e" strokeWidth="3.2" fill="none" strokeLinecap="round" />

          {/* Đôi mắt to tròn long lanh Chibi (mắt hơi lác ngơ ngác đáng yêu) */}
          {/* Mắt trái */}
          <ellipse cx="54" cy="44" rx="6.5" ry="7" fill="#ffffff" stroke="#1e272e" strokeWidth="1.2" />
          <circle cx="54" cy="44" r="4.5" fill="#d63031" />
          <circle cx="55" cy="44" r="2.8" fill="#1e272e" />
          <circle cx="53" cy="42" r="1.8" fill="#ffffff" />
          <circle cx="56.5" cy="46" r="0.8" fill="#ffffff" />

          {/* Mắt phải */}
          <ellipse cx="76" cy="44" rx="6.5" ry="7" fill="#ffffff" stroke="#1e272e" strokeWidth="1.2" />
          <circle cx="76" cy="44" r="4.5" fill="#d63031" />
          <circle cx="75" cy="44" r="2.8" fill="#1e272e" />
          <circle cx="74" cy="42" r="1.8" fill="#ffffff" />
          <circle cx="77.5" cy="46" r="0.8" fill="#ffffff" />

          {/* Đôi má ửng hồng e thẹn của "đại ca" */}
          <ellipse cx="45" cy="53" rx="4" ry="2.5" fill="#ff7675" opacity="0.5" />
          <ellipse cx="85" cy="53" rx="4" ry="2.5" fill="#ff7675" opacity="0.5" />

          {/* Mõm trâu to tròn màu hồng sẫm */}
          <g id="snout">
            <ellipse cx="65" cy="56" rx="13" ry="8" fill="#747d8c" stroke="#2f3542" strokeWidth="1.2" />
            {/* Hai lỗ mũi to đùng thở phì phò */}
            <circle cx="59.5" cy="55.5" r="2.4" fill="#1e272e" />
            <circle cx="70.5" cy="55.5" r="2.4" fill="#1e272e" />
            {/* Luồng khói thở phì phò trắng tròn bay ra */}
            <circle cx="53" cy="57" r="1.8" fill="#ffffff" opacity="0.8" />
            <circle cx="77" cy="57" r="1.8" fill="#ffffff" opacity="0.8" />
          </g>

          {/* Khuyên mũi vàng to tổ chảng lúc lắc */}
          <circle cx="65" cy="64" r="6.5" fill="none" stroke="#f1c40f" strokeWidth="3" />
          <circle cx="65" cy="64" r="6.5" fill="none" stroke="#f39c12" strokeWidth="1" strokeDasharray="2,3" />

          {/* Miệng cười nhe 2 chiếc răng nanh nhỏ xinh xắn */}
          <path d="M 58 60 Q 65 65 72 60" stroke="#1e272e" strokeWidth="2" fill="none" strokeLinecap="round" />
          <polygon points="59,59 62,59 60.5,63" fill="#ffffff" />
          <polygon points="68,59 71,59 69.5,63" fill="#ffffff" />

          {/* Cọng cỏ non xanh mướt ngậm bên mép đung đưa */}
          <path d="M 72 61 Q 84 63 90 56" stroke="#2ed573" strokeWidth="2" fill="none" strokeLinecap="round" />
          <ellipse cx="91" cy="55" rx="3" ry="1.5" fill="#2ed573" transform="rotate(-30 91 55)" />
        </g>
      </svg>
    </div>
  );
};
