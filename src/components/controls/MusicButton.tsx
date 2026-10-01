import React, { useEffect, useState } from 'react';
import { zenAudio } from '../../audio/zenAudio';

export const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = zenAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    zenAudio.toggleMusic();
  };

  return (
    <button
      className={`music-control-btn ${isPlaying ? 'playing' : ''}`}
      id="musicToggleBtn"
      onClick={handleToggle}
      title="Bật/Tắt nhạc thiền định"
    >
      <span id="musicIcon">{isPlaying ? '🎵' : '🔇'}</span>{' '}
      <span id="musicText">{isPlaying ? 'Đang Tịnh Tâm' : 'Bật Nhạc'}</span>
    </button>
  );
};
