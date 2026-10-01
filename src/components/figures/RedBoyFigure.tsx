import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const RedBoyFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="redBoy" title="Thánh Anh Đại Vương" onClick={onClick}>
      <svg viewBox="0 0 110 110" width="100%" height="100%">
        {/* Mây đỏ lửa Tam Muội */}
        <ellipse cx="55" cy="90" rx="30" ry="12" fill="#ff7675" stroke="#d63031" strokeWidth="1.8" />
        {/* Hỏa Tiêm Thương rực lửa */}
        <line x1="25" y1="20" x2="65" y2="85" stroke="#b33939" strokeWidth="3" strokeLinecap="round" />
        <polygon points="25,20 18,12 28,15" fill="#f1c40f" />
        <polygon points="25,20 22,28 32,25" fill="#f39c12" />
        {/* Yếm đỏ viền vàng */}
        <polygon points="55,54 42,80 68,80" fill="#eb2f06" stroke="#f6b93b" strokeWidth="1.5" />
        {/* Gương mặt trẻ thơ bụ bẫm */}
        <circle cx="55" cy="42" r="17" fill="#ffeaa7" />
        {/* Búi tóc đào hai bên đầu và chỏm tóc */}
        <circle cx="42" cy="28" r="6" fill="#2d3436" />
        <circle cx="68" cy="28" r="6" fill="#2d3436" />
        <path d="M 40 28 Q 36 30 38 34" stroke="#e74c3c" strokeWidth="2" fill="none" />
        <path d="M 70 28 Q 74 30 72 34" stroke="#e74c3c" strokeWidth="2" fill="none" />
        {/* Vết bớt ngọn lửa Tam Muội Chân Hỏa trên trán */}
        <path d="M 55 32 Q 57.5 36 55 39 Q 52.5 36 55 32 Z" fill="#eb2f06" />
        {/* Đôi chân mày sắc lẹm kiêu kỳ */}
        <path d="M 45 37 Q 48 35 51 38" stroke="#2d3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 59 38 Q 62 35 65 37" stroke="#2d3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Mắt to tròn lanh lợi rực lửa */}
        <ellipse cx="48" cy="42" rx="3.2" ry="2.8" fill="#ffffff" stroke="#2d3436" strokeWidth="1" />
        <circle cx="48" cy="42" r="2" fill="#eb2f06" />
        <circle cx="48" cy="42" r="1.1" fill="#2d3436" />
        <circle cx="47" cy="41" r="0.7" fill="#ffffff" />
        <ellipse cx="62" cy="42" rx="3.2" ry="2.8" fill="#ffffff" stroke="#2d3436" strokeWidth="1" />
        <circle cx="62" cy="42" r="2" fill="#eb2f06" />
        <circle cx="62" cy="42" r="1.1" fill="#2d3436" />
        <circle cx="61" cy="41" r="0.7" fill="#ffffff" />
        {/* Chiếc mũi nhỏ xinh xắn */}
        <circle cx="55" cy="46" r="1.2" fill="#e17055" />
        {/* Đôi má ửng hồng tinh nghịch */}
        <circle cx="43" cy="46" r="2.8" fill="rgba(255, 71, 87, 0.45)" />
        <circle cx="67" cy="46" r="2.8" fill="rgba(255, 71, 87, 0.45)" />
        {/* Miệng cười nhếch mép đắc thắng lém lỉnh */}
        <path d="M 51 50 Q 55 54 59 50" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};
