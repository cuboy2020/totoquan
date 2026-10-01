import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const RedBoyFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="redBoy" title="Thánh Anh Đại Vương (Hồng Hài Nhi Tinh Quái)" onClick={onClick}>
      <svg viewBox="0 0 115 115" width="100%" height="100%">
        <defs>
          <radialGradient id="flameGrad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff275" />
            <stop offset="50%" stopColor="#ff5e57" />
            <stop offset="100%" stopColor="#ff3f34" />
          </radialGradient>
        </defs>

        {/* Đám mây lửa đỏ Tam Muội nâng đỡ */}
        <g id="cloud">
          <ellipse cx="58" cy="98" rx="35" ry="12" fill="#ff7675" stroke="#d63031" strokeWidth="1.5" />
          <circle cx="35" cy="94" r="12" fill="#ff7675" />
          <circle cx="58" cy="92" r="14" fill="#ff7675" />
          <circle cx="82" cy="94" r="12" fill="#ff7675" />
          <path d="M 40 96 Q 50 90 56 96" stroke="#c0392b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 68 94 Q 75 88 80 94" stroke="#c0392b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Hỏa Tiêm Thương cán đỏ dài ngoằng quá khổ */}
        <g id="spear">
          <line x1="20" y1="12" x2="68" y2="88" stroke="#b33939" strokeWidth="3" strokeLinecap="round" />
          {/* Mũi giáo vàng sắc nhọn bốc lửa */}
          <polygon points="20,12 12,4 24,6" fill="#f1c40f" stroke="#d35400" strokeWidth="0.8" />
          <polygon points="20,12 18,22 28,18" fill="#e67e22" stroke="#d35400" strokeWidth="0.8" />
          {/* Dải lụa đỏ buộc đầu thương phấp phới */}
          <path d="M 20 12 Q 10 24 16 32 Q 22 24 20 12" fill="#eb4d4b" />
        </g>

        {/* Thân mình bé bỏng múp míp & chiếc Yếm Đỏ */}
        <g id="body">
          {/* Tay chân mũm mĩm */}
          <circle cx="42" cy="74" r="5" fill="#ffeaa7" />
          <circle cx="74" cy="72" r="5" fill="#ffeaa7" />
          {/* Bụng tròn xoe */}
          <ellipse cx="58" cy="74" rx="14" ry="13" fill="#ffeaa7" />
          {/* Yếm đỏ viền vàng thắt dây */}
          <polygon points="58,62 44,84 72,84" fill="#eb2f06" stroke="#f1c40f" strokeWidth="1.2" />
          {/* Dây yếm vắt qua cổ */}
          <path d="M 49 60 L 58 64 L 67 60" stroke="#f1c40f" strokeWidth="1.5" fill="none" />
          {/* Hoa sen vàng thêu giữa yếm */}
          <circle cx="58" cy="74" r="2.8" fill="#f1c40f" />
        </g>

        {/* Đốm lửa Tam Muội tí hon bay ra từ miệng chúm chím */}
        <g id="blownFlame">
          <path d="M 74 46 Q 84 34 86 44 Q 92 46 88 52 Q 82 56 74 46 Z" fill="url(#flameGrad)" />
          {/* Đốm mắt mặt cười nhỏ xíu trên ngọn lửa hài hước */}
          <circle cx="82" cy="45" r="0.9" fill="#2d3436" />
          <circle cx="86" cy="46" r="0.9" fill="#2d3436" />
          <path d="M 83 48 Q 85 50 86 48" stroke="#2d3436" strokeWidth="0.7" fill="none" />
          {/* Tàn lửa bay lách tách */}
          <circle cx="92" cy="38" r="1.5" fill="#ff9f43" />
          <circle cx="96" cy="42" r="1.2" fill="#feca57" />
          <circle cx="94" cy="49" r="1" fill="#ff6b6b" />
        </g>

        {/* Đầu Hồng Hài Nhi tròn xoe má phính */}
        <g id="head">
          {/* Hai búi tóc củ tỏi hai bên đầu cực kỳ kawaii */}
          <g id="hairBuns">
            {/* Búi trái */}
            <circle cx="40" cy="25" r="8" fill="#2d3436" />
            <ellipse cx="40" cy="31" rx="5" ry="3" fill="#eb4d4b" />
            <circle cx="40" cy="32" r="2" fill="#f1c40f" />
            {/* Búi phải */}
            <circle cx="76" cy="25" r="8" fill="#2d3436" />
            <ellipse cx="76" cy="31" rx="5" ry="3" fill="#eb4d4b" />
            <circle cx="76" cy="32" r="2" fill="#f1c40f" />
            {/* Chỏm tóc đào trước trán */}
            <path d="M 54 28 Q 58 20 62 28 Z" fill="#2d3436" />
          </g>

          {/* Gương mặt tròn trĩnh bánh bao */}
          <circle cx="58" cy="42" r="21" fill="#ffeaa7" />

          {/* Vết bớt Tam Muội Chân Hỏa đỏ rực trên trán */}
          <path d="M 58 27 Q 61 33 58 37 Q 55 33 58 27 Z" fill="#eb2f06" stroke="#f1c40f" strokeWidth="0.8" />

          {/* Đôi chân mày kiếm tí hon nhếch lên tinh quái */}
          <path d="M 45 35 Q 49 32 53 36" stroke="#2d3436" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 63 36 Q 67 32 71 34" stroke="#2d3436" strokeWidth="2.2" fill="none" strokeLinecap="round" />

          {/* Đôi mắt to tròn long lanh tinh nghịch Chibi */}
          {/* Mắt trái */}
          <ellipse cx="49" cy="42" rx="5.5" ry="6.5" fill="#2d3436" />
          <circle cx="49" cy="42" r="4.2" fill="#eb2f06" />
          <circle cx="47.5" cy="40" r="1.8" fill="#ffffff" />
          <circle cx="51" cy="44" r="0.9" fill="#ffffff" />

          {/* Mắt phải (nháy mắt tinh quái hoặc to tròn) */}
          <ellipse cx="67" cy="42" rx="5.5" ry="6.5" fill="#2d3436" />
          <circle cx="67" cy="42" r="4.2" fill="#eb2f06" />
          <circle cx="65.5" cy="40" r="1.8" fill="#ffffff" />
          <circle cx="69" cy="44" r="0.9" fill="#ffffff" />

          {/* Mũi nhỏ xíu hạt tiêu */}
          <circle cx="58" cy="46" r="1.2" fill="#e17055" />

          {/* Đôi má bánh bao hồng rực ửng đỏ */}
          <ellipse cx="43" cy="47" rx="4.5" ry="3" fill="#ff4757" opacity="0.6" />
          <ellipse cx="73" cy="47" rx="4.5" ry="3" fill="#ff4757" opacity="0.6" />

          {/* Miệng chu tròn ("chuuu~") thổi lửa siêu hài hước */}
          <ellipse cx="62" cy="49" rx="3.2" ry="2.4" fill="#c0392b" />
          <ellipse cx="62" cy="49" rx="2" ry="1.4" fill="#2c3e50" />
        </g>
      </svg>
    </div>
  );
};
