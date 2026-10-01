import React from 'react';

interface FigureProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const GuanYinFigure: React.FC<FigureProps> = ({ onClick }) => {
  return (
    <div className="divine-figure" id="guanyin" title="Quán Thế Âm Bồ Tát (Cam Lộ Dễ Thương)" onClick={onClick}>
      <svg viewBox="0 0 130 150" width="100%" height="100%">
        <defs>
          <radialGradient id="guanyinSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#fff2e2" />
            <stop offset="100%" stopColor="#ffd8b8" />
          </radialGradient>
          <radialGradient id="lotusPink" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffb8d9" />
            <stop offset="75%" stopColor="#ff79a8" />
            <stop offset="100%" stopColor="#e84393" />
          </radialGradient>
        </defs>

        {/* Vầng hào quang ngọc bích lấp lánh */}
        <circle cx="65" cy="54" r="42" fill="rgba(220, 245, 255, 0.25)" stroke="#74b9ff" strokeWidth="2" strokeDasharray="5,4" />

        {/* Tòa sen hồng phấn phúng phính */}
        <g id="lotus">
          {/* Cánh sen dưới */}
          <ellipse cx="65" cy="135" rx="34" ry="11" fill="url(#lotusPink)" stroke="#e84393" strokeWidth="1.2" />
          {/* Các cánh sen bụ bẫm bao quanh */}
          <path d="M 34 130 C 38 114, 52 115, 56 130 Z" fill="url(#lotusPink)" stroke="#e84393" strokeWidth="1" />
          <path d="M 52 130 C 56 112, 74 112, 78 130 Z" fill="url(#lotusPink)" stroke="#e84393" strokeWidth="1" />
          <path d="M 74 130 C 78 114, 92 115, 96 130 Z" fill="url(#lotusPink)" stroke="#e84393" strokeWidth="1" />
          {/* Nhụy sen vàng */}
          <ellipse cx="65" cy="128" rx="20" ry="4" fill="#f1c40f" />
        </g>

        {/* Giọt nước Cam Lộ hình trái tim & ngôi sao lung linh vẩy ra từ cành dương liễu */}
        <g id="blessedDrops">
          {/* Giọt nước trái tim hồng */}
          <path d="M 94 48 C 94 44, 98 42, 100 45 C 102 42, 106 44, 106 48 C 106 53, 100 56, 100 56 C 100 56, 94 53, 94 48 Z" fill="#ff7675" opacity="0.85" />
          {/* Giọt nước ngọc bích tròn */}
          <circle cx="106" cy="62" r="3" fill="#74b9ff" opacity="0.8" />
          <circle cx="105" cy="61" r="0.8" fill="#ffffff" />
          <circle cx="98" cy="70" r="2.2" fill="#81ecec" opacity="0.8" />
          {/* Ngôi sao lấp lánh */}
          <polygon points="108,36 109.5,39 112,40 109.5,41 108,44 106.5,41 104,40 106.5,39" fill="#f1c40f" />
        </g>

        {/* Thân mình y phục trắng thanh tịnh bồng bềnh */}
        <g id="body">
          <ellipse cx="65" cy="98" rx="22" ry="24" fill="#ffffff" stroke="#dcdde1" strokeWidth="1.5" />
          {/* Khăn choàng lụa trắng vắt qua vai */}
          <path d="M 46 90 Q 65 110 84 90 L 86 102 Q 65 118 44 102 Z" fill="#f5f6fa" />
          {/* Vòng chuỗi ngọc bích trên cổ */}
          <path d="M 54 84 Q 65 92 76 84" stroke="#74b9ff" strokeWidth="2.2" strokeDasharray="3,2" fill="none" />
          <circle cx="65" cy="90" r="3" fill="#e84393" />

          {/* Bình Cam Lộ men ngọc trên tay trái */}
          <g id="vase">
            <ellipse cx="78" cy="96" rx="5.5" ry="9" fill="#dff9fb" stroke="#00cec9" strokeWidth="1.2" />
            <ellipse cx="78" cy="87" rx="3" ry="1.5" fill="#00cec9" />
            <circle cx="78" cy="96" r="2" fill="#74b9ff" />
            {/* Cành Dương Liễu xanh tươi vẫy nước */}
            <path d="M 78 87 Q 88 74 95 78" stroke="#2ed573" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="91" cy="74" r="1.5" fill="#2ed573" />
            <circle cx="96" cy="77" r="1.5" fill="#2ed573" />
            {/* Tay múp míp cầm bình */}
            <circle cx="74" cy="97" r="4.5" fill="url(#guanyinSkin)" stroke="#ffd8b8" strokeWidth="0.8" />
          </g>

          {/* Tay phải kết ấn cát tường làm động tác "bắn tim" nhỏ xíu */}
          <circle cx="53" cy="92" r="4.5" fill="url(#guanyinSkin)" stroke="#ffd8b8" strokeWidth="0.8" />
          <path d="M 53 88 Q 51 84 53 82 Q 55 84 53 88" stroke="#ffd8b8" strokeWidth="1.5" fill="none" />
        </g>

        {/* Đầu Bồ Tát Chibi xinh đẹp ngọt ngào */}
        <g id="head">
          {/* Khăn voan trắng phủ đầu bồng bềnh */}
          <path d="M 44 54 C 40 32, 90 32, 86 54 C 88 78, 88 94, 82 100 L 48 100 C 42 94, 42 78, 44 54 Z" fill="#ffffff" stroke="#dcdde1" strokeWidth="1.2" />

          {/* Búi tóc tiên vấn cao & Trâm sen vàng */}
          <circle cx="65" cy="30" r="11" fill="#2d3436" />
          <circle cx="65" cy="24" r="4" fill="#f1c40f" />
          <path d="M 58 26 Q 65 22 72 26" stroke="#ff79a8" strokeWidth="2.5" fill="none" />

          {/* Khuôn mặt ngọc ngà Chibi tròn trĩnh */}
          <circle cx="65" cy="56" r="21" fill="url(#guanyinSkin)" />

          {/* Đôi tai xinh xắn đeo hoa tai ngọc hồng */}
          <circle cx="42" cy="58" r="4" fill="url(#guanyinSkin)" />
          <circle cx="41" cy="63" r="2.2" fill="#ff7675" />
          <circle cx="88" cy="58" r="4" fill="url(#guanyinSkin)" />
          <circle cx="89" cy="63" r="2.2" fill="#ff7675" />

          {/* Chấm chu sa đỏ rực may mắn giữa trán */}
          <circle cx="65" cy="45" r="2.2" fill="#e84118" />

          {/* Chân mày lá liễu thanh tú cong cong */}
          <path d="M 52 47 Q 57 43 61 47" stroke="#718093" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 69 47 Q 73 43 78 47" stroke="#718093" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Đôi mắt Anime to tròn long lanh cực kỳ đáng yêu */}
          {/* Mắt trái */}
          <g id="leftEye">
            <ellipse cx="55" cy="53" rx="6.5" ry="7.5" fill="#2d3436" />
            <circle cx="55" cy="54" r="5" fill="#0984e3" />
            <circle cx="55" cy="54" r="3.5" fill="#74b9ff" />
            {/* Điểm sáng to tròn lấp lánh */}
            <circle cx="53" cy="50.5" r="2.4" fill="#ffffff" />
            <circle cx="57.5" cy="56" r="1.3" fill="#ffffff" />
            {/* Hàng mi cong vút */}
            <path d="M 48 49 Q 53 46 58 48" stroke="#2d3436" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <line x1="48" y1="48" x2="46" y2="45" stroke="#2d3436" strokeWidth="1.4" strokeLinecap="round" />
          </g>

          {/* Mắt phải */}
          <g id="rightEye">
            <ellipse cx="75" cy="53" rx="6.5" ry="7.5" fill="#2d3436" />
            <circle cx="75" cy="54" r="5" fill="#0984e3" />
            <circle cx="75" cy="54" r="3.5" fill="#74b9ff" />
            {/* Điểm sáng to tròn */}
            <circle cx="73" cy="50.5" r="2.4" fill="#ffffff" />
            <circle cx="77.5" cy="56" r="1.3" fill="#ffffff" />
            {/* Hàng mi cong vút */}
            <path d="M 72 48 Q 77 46 82 49" stroke="#2d3436" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <line x1="82" y1="48" x2="84" y2="45" stroke="#2d3436" strokeWidth="1.4" strokeLinecap="round" />
          </g>

          {/* Chiếc mũi nhỏ nhắn thanh tú */}
          <circle cx="65" cy="58" r="1.1" fill="#e0b880" />

          {/* Đôi má bánh bao hồng phấn siêu đáng yêu */}
          <ellipse cx="47" cy="62" rx="4.5" ry="3" fill="#ff7675" opacity="0.6" />
          <ellipse cx="83" cy="62" rx="4.5" ry="3" fill="#ff7675" opacity="0.6" />

          {/* Miệng cười chúm chím ngọt ngào thiên thần */}
          <path d="M 60 64 Q 65 68 70 64" stroke="#e84393" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <circle cx="65" cy="65.5" r="1.5" fill="#ff79a8" />
        </g>
      </svg>
    </div>
  );
};
