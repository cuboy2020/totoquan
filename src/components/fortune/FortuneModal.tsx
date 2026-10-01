import React from 'react';
import { FortuneItem } from '../../types/fortune';

interface FortuneModalProps {
  fortune: FortuneItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FortuneModal: React.FC<FortuneModalProps> = ({ fortune, isOpen, onClose }) => {
  if (!fortune) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fortune-modal-overlay ${isOpen ? 'active' : ''}`}
      id="fortuneOverlay"
      onClick={handleBackdropClick}
    >
      <div className="fortune-scroll">
        <div className="scroll-header" id="fTitle">
          {fortune.title}
        </div>
        <div className="fortune-rank" id="fRank">
          {fortune.rank}
        </div>
        <div className="poem-box" id="fPoem">
          {fortune.poem}
        </div>
        <div className="explanation-title">✦ LỜI THẦY BÓI LUẬN GIẢI:</div>
        <div className="aspects-grid">
          <div className="aspect-item">
            <strong>Gia Đạo:</strong> <span id="fHome">{fortune.home}</span>
          </div>
          <div className="aspect-item">
            <strong>Tài Lộc:</strong> <span id="fWealth">{fortune.wealth}</span>
          </div>
          <div className="aspect-item">
            <strong>Công Danh:</strong> <span id="fCareer">{fortune.career}</span>
          </div>
          <div className="aspect-item">
            <strong>Tình Duyên:</strong> <span id="fLove">{fortune.love}</span>
          </div>
        </div>
        <div className="advice-box" id="fAdvice">
          <strong>Lời thầy bói luận:</strong> {fortune.advice}
        </div>
        <button className="btn-close-scroll" onClick={onClose}>
          Gấp Quẻ Lại
        </button>
      </div>
    </div>
  );
};
