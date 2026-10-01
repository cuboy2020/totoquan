// Hệ thống âm thanh Smart Audio & Procedural Web Audio Synth

class ZenAudioService {
  private audioCtx: AudioContext | null = null;
  private bgmAudio: HTMLAudioElement | null = null;
  private isMusicPlaying: boolean = false;
  private synthTimer: number | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    // Không khởi tạo AudioContext ngay tại đây để tuân thủ autoplay policy
  }

  public getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      const AudioClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  public initBgm(audioElement: HTMLAudioElement) {
    this.bgmAudio = audioElement;
  }

  public subscribe(listener: (playing: boolean) => void): () => void {
    this.listeners.push(listener);
    listener(this.isMusicPlaying);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l(this.isMusicPlaying));
  }

  public get isPlaying(): boolean {
    return this.isMusicPlaying;
  }

  public toggleMusic(): boolean {
    this.getAudioContext();

    if (this.isMusicPlaying) {
      this.stopMusic();
    } else {
      this.startMusic();
    }
    return this.isMusicPlaying;
  }

  public startMusic() {
    this.getAudioContext();
    this.isMusicPlaying = true;
    this.notify();

    if (this.bgmAudio) {
      const playPromise = this.bgmAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Không thể phát nhạc mp3, chuyển sang Web Audio Synth:", err);
          this.playSingingBowlTone();
        });
      }
    } else {
      this.playSingingBowlTone();
    }
  }

  public stopMusic() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
    }
    if (this.synthTimer) {
      clearTimeout(this.synthTimer);
      this.synthTimer = null;
    }
    this.isMusicPlaying = false;
    this.notify();
  }

  // Chuông xoay tịnh tâm Procedural Web Audio (Tần số thiền định G3, G4, D5, A5)
  public playSingingBowlTone = () => {
    if (!this.isMusicPlaying) return;
    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;
      const freqs = [196, 392, 587.3, 880];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq + (Math.random() * 2 - 1), now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08 / (idx + 1), now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 4.6);
      });

      this.synthTimer = window.setTimeout(this.playSingingBowlTone, 4800);
    } catch (e) {
      console.error("Lỗi phát chuông xoay:", e);
    }
  };

  // Tiếng quẹt diêm khi dâng hương
  public playMatchStrikeSFX() {
    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;
      const bufSize = Math.floor(ctx.sampleRate * 0.25);
      const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = ctx.createBufferSource();
      noise.buffer = buf;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1500, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 0.1);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } catch (e) {
      console.error("Lỗi phát SFX que diêm:", e);
    }
  }

  // Tiếng lắc ống xăm tre
  public playBambooShakeSFX() {
    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;
      for (let i = 0; i < 5; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(380 + Math.random() * 260, now + i * 0.16);

        gain.gain.setValueAtTime(0, now + i * 0.16);
        gain.gain.linearRampToValueAtTime(0.2, now + i * 0.16 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.16 + 0.11);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.16);
        osc.stop(now + i * 0.16 + 0.12);
      }
    } catch (e) {
      console.error("Lỗi phát SFX ống xăm:", e);
    }
  }
}

export const zenAudio = new ZenAudioService();
