import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const BullKingFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="bullKing" title="Bình Thiên Đại Thánh" onClick={onClick}>
      <svg viewBox="0 0 130 120" width="100%" height="100%">
        {/* Mây đen dông bão */}
        <ellipse cx="65" cy="98" rx="35" ry="13" fill="#57606f" stroke="#2f3542" strokeWidth="1.5" />
        {/* Đôi sừng trâu cong vút uy vũ */}
        <path d="M 48 35 Q 25 15 32 0 Q 42 16 52 28 Z" fill="#2f3542" stroke="#1e272e" strokeWidth="1" />
        <path d="M 82 35 Q 105 15 98 0 Q 88 16 78 28 Z" fill="#2f3542" stroke="#1e272e" strokeWidth="1" />
        {/* Chiến giáp thiết giáp */}
        <path d="M 44 95 C 40 70, 50 62, 65 62 C 80 62, 90 70, 86 95 Z" fill="#383b40" stroke="#f1c40f" strokeWidth="1.5" />
        {/* Đầu Ngưu Ma Vương */}
        <circle cx="65" cy="42" r="20" fill="#747d8c" />
        {/* Cung mày nhíu dũng mãnh */}
        <path d="M 51 33 Q 56 31 61 35" stroke="#1e272e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 69 35 Q 74 31 79 33" stroke="#1e272e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Đôi mắt đỏ ngầu quắc thước */}
        <circle cx="56" cy="38" r="3.2" fill="#d63031" stroke="#1e272e" strokeWidth="1" />
        <circle cx="56" cy="38" r="1.4" fill="#ffeaa7" />
        <circle cx="56" cy="38" r="0.7" fill="#1e272e" />
        <circle cx="74" cy="38" r="3.2" fill="#d63031" stroke="#1e272e" strokeWidth="1" />
        <circle cx="74" cy="38" r="1.4" fill="#ffeaa7" />
        <circle cx="74" cy="38" r="0.7" fill="#1e272e" />
        {/* Mõm trâu lực lưỡng (Bull Muzzle) */}
        <ellipse cx="65" cy="48" rx="10" ry="6" fill="#57606f" stroke="#2f3542" strokeWidth="1.2" />
        {/* Hai lỗ mũi trâu phì phò */}
        <ellipse cx="61.5" cy="48.5" rx="1.6" ry="2.2" fill="#1e272e" />
        <ellipse cx="68.5" cy="48.5" rx="1.6" ry="2.2" fill="#1e272e" />
        {/* Miệng gầm và răng nanh sắc nhọn */}
        <path d="M 58 55 Q 65 59 72 55" stroke="#1e272e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <polygon points="59,54 62,54 60.5,58" fill="#ffffff" />
        <polygon points="68,54 71,54 69.5,58" fill="#ffffff" />
        {/* Khuyên mũi vàng xỏ ngang mõm */}
        <circle cx="65" cy="54" r="5" fill="none" stroke="#f1c40f" strokeWidth="2.5" />
      </svg>
    </div>
  );
};
