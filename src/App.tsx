import React, { useState, useEffect, useRef } from 'react';
import { HeavenBackdrop } from './components/background/HeavenBackdrop';
import { DivineFiguresRealm } from './components/figures/DivineFiguresRealm';
import { PetalCanvas } from './components/canvas/PetalCanvas';
import { FxCanvas } from './components/canvas/FxCanvas';
import { IncenseStage } from './components/incense/IncenseStage';
import { Header } from './components/Header';
import { ControlBar } from './components/controls/ControlBar';
import { MusicButton } from './components/controls/MusicButton';
import { BambooShaker } from './components/fortune/BambooShaker';
import { FortuneModal } from './components/fortune/FortuneModal';
import { zenAudio } from './audio/zenAudio';
import { FORTUNE_DATA } from './constants/fortuneData';
import { FortuneItem } from './types/fortune';

export const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Trạng thái thắp hương
  const [incenseCount, setIncenseCount] = useState<number>(() => {
    return parseInt(localStorage.getItem('incense_count') || '0', 10);
  });
  const [isOffering, setIsOffering] = useState<boolean>(false);
  const [offeringStep, setOfferingStep] = useState<'idle' | 'offering' | 'praying'>('idle');
  const [offeringStartTime, setOfferingStartTime] = useState<number>(0);
  const [isLit, setIsLit] = useState<boolean>(false);

  // Trạng thái bốc quẻ
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [selectedFortune, setSelectedFortune] = useState<FortuneItem | null>(null);
  const [isFortuneModalOpen, setIsFortuneModalOpen] = useState<boolean>(false);

  // Khởi tạo audio và autoplay handler
  useEffect(() => {
    if (audioRef.current) {
      zenAudio.initBgm(audioRef.current);
    }

    const autoStartAudio = () => {
      if (!zenAudio.isPlaying) {
        zenAudio.startMusic();
      }
    };
    document.addEventListener('pointerdown', autoStartAudio, { once: true });

    return () => {
      document.removeEventListener('pointerdown', autoStartAudio);
    };
  }, []);

  // Xử lý nghi thức dâng hương
  const handleLightIncense = () => {
    if (isOffering) return;

    setIsOffering(true);
    setOfferingStep('offering');
    zenAudio.getAudioContext();
    zenAudio.playMatchStrikeSFX();

    // Kích hoạt animation que hương dâng lên
    const startTime = performance.now();
    setOfferingStartTime(startTime);

    // Tại 2.6s: 3 que nhang phát sáng, tăng bộ đếm
    setTimeout(() => {
      setIsLit(true);
      setIncenseCount((prev) => {
        const next = prev + 1;
        localStorage.setItem('incense_count', next.toString());
        return next;
      });
      setOfferingStep('praying');
    }, 2600);

    // Tại 3.6s: Hoàn tất nghi thức, sẵn sàng cho lần dâng hương kế tiếp
    setTimeout(() => {
      setOfferingStep('idle');
      setIsOffering(false);
    }, 3600);
  };

  // Xử lý nghi thức xin xăm bốc quẻ
  const handleDrawFortune = () => {
    if (isDrawing) return;

    setIsDrawing(true);
    setIsShaking(true);
    zenAudio.getAudioContext();
    zenAudio.playBambooShakeSFX();

    setTimeout(() => {
      setIsShaking(false);
      const randomIndex = Math.floor(Math.random() * FORTUNE_DATA.length);
      const chosen = FORTUNE_DATA[randomIndex];
      setSelectedFortune(chosen);
      setIsFortuneModalOpen(true);
      setIsDrawing(false);
    }, 1400);
  };

  const handleCloseFortune = () => {
    setIsFortuneModalOpen(false);
  };

  return (
    <>
      {/* Phần tử audio cho nhạc nền */}
      <audio ref={audioRef} id="bgmAudio" loop preload="auto" playsInline>
        <source src="/nhac.mp3" type="audio/mpeg" />
      </audio>

      {/* Nút bật/tắt nhạc nổi góc trên bên phải */}
      <MusicButton />

      {/* Nền thiên đình: Cung điện, cột trời, các tầng mây trôi */}
      <HeavenBackdrop isLit={isLit} />

      {/* Bầu trời chư vị thần tiên bay lượn (9 nhân vật SVG) */}
      <DivineFiguresRealm />

      {/* 2 lớp canvas toàn màn hình: Cánh hoa đào rơi & Hiệu ứng phép thuật hào quang */}
      <PetalCanvas />
      <FxCanvas />

      {/* Tiêu đề ứng dụng */}
      <Header />

      {/* Sân khấu bát hương tâm linh & khói nhang */}
      <IncenseStage
        isOffering={isOffering}
        offeringStartTime={offeringStartTime}
        isLit={isLit}
      />

      {/* Cụm điều khiển: Nút dâng hương, bốc quẻ, số lượng và câu thiền */}
      <ControlBar
        incenseCount={incenseCount}
        isOffering={isOffering}
        isDrawing={isDrawing}
        offeringStep={offeringStep}
        onLightIncense={handleLightIncense}
        onDrawFortune={handleDrawFortune}
      />

      {/* Ống xăm tre lắc lư khi bốc quẻ */}
      <BambooShaker isShaking={isShaking} />

      {/* Bảng cuộn thư pháp hoàng gia luận giải quẻ thẻ Kinh Dịch */}
      <FortuneModal
        fortune={selectedFortune}
        isOpen={isFortuneModalOpen}
        onClose={handleCloseFortune}
      />
    </>
  );
};
