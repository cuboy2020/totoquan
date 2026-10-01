import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const DragonHorseFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="dragonHorse" title="Bạch Long Mã" onClick={onClick}>
      <svg viewBox="0 0 120 100" width="100%" height="100%">
        {/* Mây lam nâng đỡ */}
        <ellipse cx="55" cy="82" rx="30" ry="12" fill="#e0f7fa" stroke="#80deea" strokeWidth="1.5" />
        <circle cx="35" cy="78" r="10" fill="#e0f7fa" />
        <circle cx="75" cy="78" r="11" fill="#e0f7fa" />
        {/* Mình ngựa vảy rồng */}
        <ellipse cx="55" cy="56" rx="26" ry="16" fill="#ffffff" stroke="#dcdde1" strokeWidth="1.5" />
        {/* Bờm lửa đỏ kiêu hãnh */}
        <path d="M 72 38 Q 80 46 76 56" stroke="#e74c3c" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        {/* Đuôi rồng bồng bềnh */}
        <path d="M 28 52 Q 18 56 22 68" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Đầu và mõm rồng */}
        <path d="M 68 56 L 82 34 L 96 42 L 80 64 Z" fill="#ffffff" stroke="#dcdde1" strokeWidth="1" />
        {/* Tai và sừng rồng hoàng kim */}
        <path d="M 78 28 L 84 34 L 78 36 Z" fill="#ffffff" stroke="#dcdde1" strokeWidth="1" />
        <path d="M 83 26 L 88 18 L 89 28 Z" fill="#f1c40f" />
        {/* Yên cương đỏ thêu vàng */}
        <rect x="48" y="44" width="16" height="15" rx="3" fill="#c0392b" stroke="#f1c40f" strokeWidth="1" />
        {/* Cung mày rồng dũng mãnh */}
        <path d="M 84 34 Q 88 32 91 35" stroke="#e74c3c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Mắt rồng thanh anh */}
        <circle cx="88" cy="38" r="2.5" fill="#2c3e50" />
        <circle cx="87.5" cy="37.5" r="0.8" fill="#81ecec" />
        {/* Lỗ mũi rồng (Nostril) */}
        <ellipse cx="93" cy="44" rx="1.4" ry="2.2" fill="#c0392b" transform="rotate(25 93 44)" />
        {/* Khóe miệng hí vang */}
        <path d="M 94 48 Q 88 52 82 50" stroke="#718093" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Râu rồng uốn lượn (Dragon Whiskers) */}
        <path d="M 92 48 Q 98 52 103 49" stroke="#f1c40f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 90 50 Q 95 57 100 55" stroke="#f1c40f" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};
