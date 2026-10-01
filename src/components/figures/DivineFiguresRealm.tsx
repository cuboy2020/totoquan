import React from 'react';
import { BuddhaFigure } from './BuddhaFigure';
import { GuanYinFigure } from './GuanYinFigure';
import { JadeEmperorFigure } from './JadeEmperorFigure';
import { TripitakaFigure } from './TripitakaFigure';
import { DragonHorseFigure } from './DragonHorseFigure';
import { WukongFigure } from './WukongFigure';
import { BajieFigure } from './BajieFigure';
import { BullKingFigure } from './BullKingFigure';
import { RedBoyFigure } from './RedBoyFigure';
import { triggerSpellBurst } from '../canvas/FxCanvas';
import { zenAudio } from '../../audio/zenAudio';

export const DivineFiguresRealm: React.FC = () => {
  const handleFigureClick = (
    e: React.MouseEvent<HTMLDivElement>,
    color: string,
    text: string
  ) => {
    e.stopPropagation();
    zenAudio.getAudioContext();

    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Kích hoạt phép thuật hào quang trên FxCanvas
    triggerSpellBurst(cx, cy, color);

    // Hiển thị bong bóng chân ngôn bay lên
    const bubble = document.createElement('div');
    bubble.className = 'mantra-bubble';
    bubble.innerText = text;
    bubble.style.left = `${cx - 40}px`;
    bubble.style.top = `${cy - 30}px`;
    document.body.appendChild(bubble);
    setTimeout(() => {
      bubble.remove();
    }, 1400);
  };

  return (
    <div className="buddha-realm">
      <BuddhaFigure
        onClick={(e) => handleFigureClick(e, '#f1c40f', '卍 PHẬT QUANG PHỔ CHIẾU 卍')}
      />
      <GuanYinFigure
        onClick={(e) => handleFigureClick(e, '#74b9ff', '💧 CAM LỘ TỊNH TÂM 💧')}
      />
      <JadeEmperorFigure
        onClick={(e) => handleFigureClick(e, '#f39c12', '👑 THIÊN ÂN BAN PHƯỚC 👑')}
      />
      <TripitakaFigure
        onClick={(e) => handleFigureClick(e, '#ffeaa7', '📿 A DI ĐÀ PHẬT 📿')}
      />
      <DragonHorseFigure
        onClick={(e) => handleFigureClick(e, '#81ecec', '⚡ LONG MÃ HÍ VANG ⚡')}
      />
      <WukongFigure
        onClick={(e) => handleFigureClick(e, '#e74c3c', '🐒 THIẾT BẢNG QUẦN MA 🐒')}
      />
      <BajieFigure
        onClick={(e) => handleFigureClick(e, '#fab1a0', '🐷 HỈ HẢ AN NHIÊN 🐷')}
      />
      <BullKingFigure
        onClick={(e) => handleFigureClick(e, '#a4b0be', '🐂 OAI PHONG LẪM LIỆT 🐂')}
      />
      <RedBoyFigure
        onClick={(e) => handleFigureClick(e, '#ff4757', '🔥 TAM MUỘI CHÂN HỎA 🔥')}
      />
    </div>
  );
};
