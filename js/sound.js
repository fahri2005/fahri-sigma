/**
 * Fahri Sigma Portfolio - Cyber Web Audio FX Synthesizer
 * 100% Procedural Web Audio API sound effects (no external audio files needed)
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sound_enabled') === 'true';
    this.isMuted = !this.enabled;
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.isMuted = !this.isMuted;
    this.enabled = !this.isMuted;
    localStorage.setItem('sound_enabled', this.enabled ? 'true' : 'false');
    if (!this.isMuted) {
      this.init();
      this.playSuccess();
    }
    return !this.isMuted;
  }

  playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.05, rampTo = 0.001) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(rampTo, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policies or context error
    }
  }

  playHover() {
    if (this.isMuted) return;
    this.playTone(880, 'sine', 0.04, 0.02, 0.0001);
  }

  playClick() {
    if (this.isMuted) return;
    this.playTone(520, 'triangle', 0.06, 0.06, 0.001);
  }

  playKeypress() {
    if (this.isMuted) return;
    const freqs = [350, 420, 500, 600];
    const randFreq = freqs[Math.floor(Math.random() * freqs.length)];
    this.playTone(randFreq, 'triangle', 0.03, 0.03, 0.001);
  }

  playSuccess() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        setTimeout(() => {
          this.playTone(freq, 'sine', 0.25, 0.06, 0.001);
        }, i * 70);
      });
    } catch (e) {}
  }

  playGlitch() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const freq = 200 + Math.random() * 1200;
          this.playTone(freq, 'sawtooth', 0.04, 0.03, 0.001);
        }, i * 35);
      }
    } catch (e) {}
  }

  playWarp() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1800, this.ctx.currentTime + 0.4);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch (e) {}
  }
}

window.soundSystem = new SoundSystem();

