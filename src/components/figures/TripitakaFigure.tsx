import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const TripitakaFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="tripitaka" title="Đường Tam Tạng (Sư Phụ Mít Ướt)" onClick={onClick}>
      <svg viewBox="0 0 120 110" width="100%" height="100%">
        <defs>
          <radialGradient id="monkSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff9e6" />
            <stop offset="70%" stopColor="#ffeaa7" />
            <stop offset="100%" stopColor="#fdcb6e" />
          </radialGradient>
        </defs>

        {/* Đám mây ngũ sắc nâng bước */}
        <g id="cloud">
          <ellipse cx="60" cy="96" rx="36" ry="12" fill="#ffeaa7" stroke="#eccc68" strokeWidth="1.5" />
          <circle cx="36" cy="92" r="12" fill="#ffeaa7" />
          <circle cx="60" cy="90" r="14" fill="#ffeaa7" />
          <circle cx="84" cy="92" r="12" fill="#ffeaa7" />
          <path d="M 40 94 Q 48 88 54 94" stroke="#f1c40f" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M 68 93 Q 75 88 80 93" stroke="#f1c40f" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>

        {/* Thân mình cà sa gấm đỏ tròn trĩnh */}
        <g id="body">
          <ellipse cx="60" cy="74" rx="20" ry="17" fill="#eb4d4b" stroke="#d63031" strokeWidth="1.5" />
          {/* Vạt áo cà sa vàng quấn chéo */}
          <path d="M 44 68 Q 60 84 76 72 L 72 86 Q 58 90 44 84 Z" fill="#f1c40f" />
          {/* Móc khóa kim hoàn trên vai áo */}
          <circle cx="50" cy="65" r="3" fill="#2ed573" stroke="#f1c40f" strokeWidth="1" />

          {/* Đôi bàn tay tròn xoe múp míp chắp trước ngực */}
          <ellipse cx="60" cy="72" rx="6" ry="7" fill="url(#monkSkin)" stroke="#e17055" strokeWidth="0.8" />
          {/* Chuỗi tràng hạt bồ đề lắc lư dưới tay */}
          <g id="rosary">
            <circle cx="54" cy="78" r="2" fill="#d35400" />
            <circle cx="57" cy="81" r="2" fill="#d35400" />
            <circle cx="61" cy="82" r="2.2" fill="#c0392b" />
            <circle cx="65" cy="80" r="2" fill="#d35400" />
            <circle cx="67" cy="77" r="2" fill="#d35400" />
            {/* Tua rua đỏ dưới tràng hạt */}
            <line x1="61" y1="83" x2="61" y2="89" stroke="#eb4d4b" strokeWidth="1.5" />
          </g>
        </g>

        {/* Đầu Sư Phụ tròn vo ngộ nghĩnh */}
        <g id="head">
          {/* Tai tròn phúc hậu */}
          <circle cx="39" cy="48" r="6" fill="url(#monkSkin)" stroke="#fdcb6e" strokeWidth="0.8" />
          <circle cx="81" cy="48" r="6" fill="url(#monkSkin)" stroke="#fdcb6e" strokeWidth="0.8" />

          {/* Khuôn mặt bánh bao tròn xoe */}
          <circle cx="60" cy="46" r="21" fill="url(#monkSkin)" />

          {/* Mũ Tỳ Lư năm cánh quá khổ đội hơi lệch một bên */}
          <g id="monkHat" transform="rotate(-4 60 25)">
            <path d="M 42 36 L 47 18 L 54 24 L 60 14 L 66 24 L 73 18 L 78 36 Z" fill="#e74c3c" stroke="#f1c40f" strokeWidth="1.5" />
            {/* Viên ngọc vàng trên đỉnh mũ */}
            <circle cx="60" cy="14" r="3" fill="#f1c40f" stroke="#d35400" strokeWidth="0.8" />
            <circle cx="54" cy="24" r="1.8" fill="#f1c40f" />
            <circle cx="66" cy="24" r="1.8" fill="#f1c40f" />
            {/* Dải đai mũ vàng */}
            <path d="M 42 36 Q 60 33 78 36 L 77 40 Q 60 37 43 40 Z" fill="#f1c40f" />
            {/* Dải lụa đỏ rủ hai bên vai */}
            <path d="M 43 38 Q 36 50 38 60" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 77 38 Q 84 50 82 60" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>

          {/* Giọt mồ hôi hoạt hình to tướng bên thái dương (anime sweat drop) */}
          <path d="M 80 34 C 80 31, 85 34, 85 36 C 85 38, 80 40, 80 38 Z" fill="#74b9ff" stroke="#0984e3" strokeWidth="0.6" />
          <circle cx="83" cy="35" r="0.6" fill="#ffffff" />

          {/* Chân mày nhíu lo lắng kiểu dỗi hờn đáng yêu */}
          <path d="M 47 41 Q 53 43 56 39" stroke="#7f8c8d" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M 64 39 Q 67 43 73 41" stroke="#7f8c8d" strokeWidth="1.8" fill="none" strokeLinecap="round" />

          {/* Đôi mắt to tròn ngấn lệ long lanh (teary puppy eyes) */}
          {/* Mắt trái */}
          <ellipse cx="51" cy="47" rx="6.5" ry="7.5" fill="#2d3436" />
          <circle cx="51" cy="48" r="5" fill="#34495e" />
          {/* Vệt nước mắt long lanh */}
          <ellipse cx="51" cy="51" rx="4" ry="2" fill="#74b9ff" opacity="0.6" />
          {/* Đốm sáng ngấn lệ to bự */}
          <circle cx="49" cy="44.5" r="2.5" fill="#ffffff" />
          <circle cx="53.5" cy="49" r="1.3" fill="#ffffff" />
          <circle cx="50" cy="51" r="0.8" fill="#ffffff" />

          {/* Mắt phải */}
          <ellipse cx="69" cy="47" rx="6.5" ry="7.5" fill="#2d3436" />
          <circle cx="69" cy="48" r="5" fill="#34495e" />
          {/* Vệt nước mắt long lanh */}
          <ellipse cx="69" cy="51" rx="4" ry="2" fill="#74b9ff" opacity="0.6" />
          {/* Đốm sáng ngấn lệ to bự */}
          <circle cx="67" cy="44.5" r="2.5" fill="#ffffff" />
          <circle cx="71.5" cy="49" r="1.3" fill="#ffffff" />
          <circle cx="68" cy="51" r="0.8" fill="#ffffff" />

          {/* Chiếc mũi nhỏ nhắn */}
          <ellipse cx="60" cy="51" rx="1.5" ry="1" fill="#e17055" />

          {/* Đôi má bánh bao phúng phính hồng hào */}
          <ellipse cx="44" cy="53" rx="4.5" ry="3" fill="#ff7675" opacity="0.6" />
          <ellipse cx="76" cy="53" rx="4.5" ry="3" fill="#ff7675" opacity="0.6" />

          {/* Miệng mếu máo cười gượng niệm kinh cute */}
          <path d="M 55 56 Q 60 59 65 56" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
