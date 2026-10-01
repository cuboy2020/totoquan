import React from 'react';

interface HeavenBackdropProps {
  isLit: boolean;
}

export const HeavenBackdrop: React.FC<HeavenBackdropProps> = ({ isLit }) => {
  return (
    <>
      <div className="heaven-backdrop">
        <svg className="heaven-palace" viewBox="0 0 600 240">
          <polygon points="300,20 200,65 400,65" fill="#f39c12" />
          <polygon points="300,55 130,105 470,105" fill="#e67e22" />
          <polygon points="300,95 60,155 540,155" fill="#d35400" />
          <rect x="180" y="155" width="16" height="85" fill="#f1c40f" opacity="0.6" />
          <rect x="240" y="155" width="16" height="85" fill="#f1c40f" opacity="0.6" />
          <rect x="344" y="155" width="16" height="85" fill="#f1c40f" opacity="0.6" />
          <rect x="404" y="155" width="16" height="85" fill="#f1c40f" opacity="0.6" />
          <rect x="270" y="125" width="60" height="24" rx="3" fill="#2c3e50" stroke="#f1c40f" />
          <circle cx="300" cy="137" r="4" fill="#e74c3c" />
        </svg>

        <div className="celestial-pillar pillar-left"></div>
        <div className="celestial-pillar pillar-right"></div>
        <div className="cloud-layer cloud-back"></div>
        <div className="cloud-layer cloud-front"></div>
      </div>

      <div
        className="celestial-glow"
        id="glow"
        style={{ opacity: isLit ? 1 : 0.45 }}
      ></div>
    </>
  );
};
