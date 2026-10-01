import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const DragonHorseFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="dragonHorse" title="Bạch Long Mã (Ngựa Rồng Ngáo Ngơ)" onClick={onClick}>
      <svg viewBox="0 0 120 100" width="100%" height="100%">
        <defs>
          <radialGradient id="horseSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#f1f2f6" />
            <stop offset="100%" stopColor="#dff9fb" />
          </radialGradient>
        </defs>

        {/* Đám mây lam thanh khiết nâng bước */}
        <g id="cloud">
          <ellipse cx="60" cy="88" rx="35" ry="12" fill="#c7ecee" stroke="#81ecec" strokeWidth="1.5" />
          <circle cx="35" cy="84" r="12" fill="#c7ecee" />
          <circle cx="60" cy="82" r="14" fill="#c7ecee" />
          <circle cx="85" cy="84" r="12" fill="#c7ecee" />
          <path d="M 40 86 Q 48 80 54 86" stroke="#22a6b3" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M 70 85 Q 76 80 82 85" stroke="#22a6b3" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>

        {/* Đuôi rồng bồng bềnh ngoe nguẩy */}
        <path d="M 28 58 Q 12 50 16 68 Q 22 75 32 64" fill="#dff9fb" stroke="#7ed6df" strokeWidth="1.5" />
        <path d="M 16 64 Q 24 58 28 62" stroke="#22a6b3" strokeWidth="1.2" fill="none" />

        {/* Thân mình ngựa múp tròn ú nụ */}
        <g id="body">
          <ellipse cx="56" cy="60" rx="26" ry="18" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1.5" />

          {/* Yên cương đỏ thêu vàng mini trên lưng */}
          <rect x="46" y="46" width="18" height="16" rx="3" fill="#eb4d4b" stroke="#f1c40f" strokeWidth="1" />
          <circle cx="55" cy="54" r="3" fill="#f1c40f" />
          <line x1="55" y1="46" x2="55" y2="62" stroke="#f1c40f" strokeWidth="1" />

          {/* 4 chân ngắn cũn cỡn múp míp đang lon ton */}
          <ellipse cx="40" cy="74" rx="4.5" ry="7" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1" />
          <circle cx="40" cy="79" r="3" fill="#f1c40f" />
          <ellipse cx="50" cy="76" rx="4.5" ry="7" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1" />
          <circle cx="50" cy="81" r="3" fill="#f1c40f" />
          <ellipse cx="65" cy="75" rx="4.5" ry="7" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1" />
          <circle cx="65" cy="80" r="3" fill="#f1c40f" />
          <ellipse cx="76" cy="73" rx="4.5" ry="7" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1" />
          <circle cx="76" cy="78" r="3" fill="#f1c40f" />
        </g>

        {/* Bờm ngựa đỏ rực bồng bềnh như kẹo bông gòn */}
        <g id="mane">
          <circle cx="70" cy="38" r="8" fill="#eb4d4b" />
          <circle cx="65" cy="46" r="7" fill="#eb4d4b" />
          <circle cx="60" cy="54" r="6" fill="#eb4d4b" />
          <circle cx="74" cy="32" r="7" fill="#ff7675" />
        </g>

        {/* Đầu rồng to tròn ngộ nghĩnh */}
        <g id="head">
          {/* Tai ngựa xinh xắn vểnh cao */}
          <path d="M 76 26 L 82 14 L 86 28 Z" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1" />
          <path d="M 78 25 L 82 17 L 84 26 Z" fill="#ff7675" opacity="0.6" />

          {/* Sừng rồng vàng tí hon phân nhánh cute */}
          <path d="M 85 24 L 92 14 L 91 22 L 96 18 L 92 26 Z" fill="#f1c40f" stroke="#f39c12" strokeWidth="0.8" />

          {/* Đầu và mõm tròn xoe */}
          <circle cx="86" cy="44" r="18" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1.2" />
          <ellipse cx="96" cy="48" rx="10" ry="8" fill="url(#horseSkin)" stroke="#c7ecee" strokeWidth="1.2" />

          {/* Đôi mắt to tròn Chibi lác nhẹ siêu hài hước */}
          {/* Mắt phải (hướng nhìn người chơi) */}
          <ellipse cx="85" cy="40" rx="6.5" ry="7" fill="#2d3436" />
          <circle cx="85" cy="40" r="5" fill="#0984e3" />
          {/* Con ngươi lác vô trong hài hước */}
          <circle cx="87" cy="40" r="3" fill="#2d3436" />
          <circle cx="84" cy="38" r="2.2" fill="#ffffff" />
          <circle cx="88" cy="42" r="1" fill="#ffffff" />

          {/* Mắt trái (nhìn lác góc khác) */}
          <ellipse cx="74" cy="38" rx="4" ry="5.5" fill="#2d3436" />
          <circle cx="74" cy="38" r="3.2" fill="#0984e3" />
          <circle cx="73" cy="38" r="2" fill="#2d3436" />
          <circle cx="73" cy="36.5" r="1.4" fill="#ffffff" />

          {/* Lông mày ngơ ngác đáng yêu */}
          <path d="M 81 31 Q 86 28 90 32" stroke="#22a6b3" strokeWidth="1.8" fill="none" strokeLinecap="round" />

          {/* Má hồng ửng đào phúng phính */}
          <ellipse cx="86" cy="49" rx="4.5" ry="3" fill="#ff7675" opacity="0.55" />

          {/* Hai lỗ mũi ngựa tròn xoe thở phì phò */}
          <circle cx="102" cy="46" r="1.8" fill="#eb4d4b" />
          <circle cx="100" cy="49" r="1.4" fill="#eb4d4b" />

          {/* Miệng cười ngoác le lưỡi ("blep :P") siêu tấu hài */}
          <path d="M 94 52 Q 98 56 102 52" stroke="#2d3436" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          {/* Chiếc lưỡi hồng thè ra ngoài */}
          <path d="M 97 53 C 97 59, 103 59, 103 53 Z" fill="#ff7675" stroke="#d63031" strokeWidth="0.8" />
          <line x1="100" y1="53" x2="100" y2="57" stroke="#d63031" strokeWidth="0.6" />

          {/* Đôi râu rồng vàng óng uốn lượn lò xo */}
          <path d="M 98 51 Q 106 48 108 55 Q 112 60 116 54" stroke="#f1c40f" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M 96 53 Q 104 57 106 63" stroke="#f1c40f" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
