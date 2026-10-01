import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const WukongFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="wukong" title="Tề Thiên Đại Thánh" onClick={onClick}>
      <svg viewBox="0 0 140 120" width="100%" height="100%">
        {/* Cân đẩu vân nâng bước */}
        <ellipse cx="65" cy="95" rx="35" ry="16" fill="#ffeaa7" stroke="#fdcb6e" strokeWidth="2" />
        <circle cx="45" cy="90" r="14" fill="#ffeaa7" />
        <circle cx="85" cy="90" r="15" fill="#ffeaa7" />
        {/* Như Ý Kim Cô Bổng viền vàng */}
        <rect x="15" y="42" width="95" height="5" rx="2" fill="#d63031" stroke="#f1c40f" strokeWidth="1.5" />
        {/* Thân mình và giáp hoàng kim */}
        <ellipse cx="65" cy="65" rx="16" ry="18" fill="#f39c12" />
        {/* Đầu Đại Thánh lông vàng */}
        <circle cx="65" cy="38" r="18" fill="#d35400" />
        {/* Mặt nạ đào hồng đặc trưng loài khỉ */}
        <path d="M 56 36 C 56 28, 74 28, 74 36 C 74 46, 65 50, 65 50 C 65 50, 56 46, 56 36 Z" fill="#ffcccc" />
        {/* Vòng Kim Cô & Lông Phượng hoàng kim */}
        <path d="M 50 30 Q 65 24 80 30" stroke="#f1c40f" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="65" cy="27" r="3" fill="#f1c40f" />
        {/* Chân mày khỉ tinh anh */}
        <path d="M 57 32 Q 60 30 63 33" stroke="#b33939" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M 67 33 Q 70 30 73 32" stroke="#b33939" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* Đôi mắt Hỏa Nhãn Kim Tinh (tròng đỏ viền vàng rực lửa) */}
        <circle cx="60" cy="36" r="3.2" fill="#eb4d4b" stroke="#f1c40f" strokeWidth="1.2" />
        <circle cx="60" cy="36" r="1.6" fill="#2d3436" />
        <circle cx="59.3" cy="35.3" r="0.7" fill="#ffffff" />
        <circle cx="70" cy="36" r="3.2" fill="#eb4d4b" stroke="#f1c40f" strokeWidth="1.2" />
        <circle cx="70" cy="36" r="1.6" fill="#2d3436" />
        <circle cx="69.3" cy="35.3" r="0.7" fill="#ffffff" />
        {/* Mũi khỉ tinh nghịch (Monkey nose & nostrils) */}
        <ellipse cx="65" cy="40.5" rx="2.2" ry="1.4" fill="#c0392b" />
        <circle cx="64.2" cy="40.5" r="0.5" fill="#2d3436" />
        <circle cx="65.8" cy="40.5" r="0.5" fill="#2d3436" />
        {/* Miệng cười tinh quái xông xáo */}
        <path d="M 60 44 Q 65 48 70 44" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};
