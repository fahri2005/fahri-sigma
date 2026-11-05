/**
 * Fahri Sigma Portfolio - Interactive Cosmic Particle Mesh Engine
 * Renders an ultra-smooth glowing particle constellation responding to mouse & touches.
 */

class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      isActive: false
    };
    this.ripple = null;
    this.animationFrame = null;
    this.width = 0;
    this.height = 0;
    this.particleCount = 75;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY + window.scrollY;
      this.mouse.isActive = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.isActive = false;
      this.mouse.targetX = -1000;
      this.mouse.targetY = -1000;
    });

    window.addEventListener('click', (e) => {
      this.triggerRipple(e.clientX, e.clientY + window.scrollY);
    });

    this.createParticles();
    this.animate();
  }

  resize() {
    const heroSection = document.getElementById('hero');
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = heroSection ? Math.max(heroSection.offsetHeight, window.innerHeight) : window.innerHeight;
    
    // Scale particle count to screen size
    if (this.width < 768) {
      this.particleCount = 35;
      this.mouse.radius = 100;
    } else {
      this.particleCount = 85;
      this.mouse.radius = 180;
    }
    this.createParticles();
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      const isCyan = Math.random() > 0.4;
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2 + 1,
        color: isCyan ? 'rgba(0, 245, 255, ' : 'rgba(168, 85, 247, ',
        baseAlpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  triggerRipple(x, y) {
    this.ripple = {
      x,
      y,
      radius: 5,
      maxRadius: 220,
      opacity: 0.8,
      speed: 8
    };
  }

  animate() {
    // Smooth lerp mouse coordinates
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.1;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.1;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const time = Date.now() * 0.002;

    // Draw active ripple if any
    if (this.ripple) {
      this.ctx.beginPath();
      this.ctx.arc(this.ripple.x, this.ripple.y, this.ripple.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(0, 245, 255, ${this.ripple.opacity})`;
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      this.ripple.radius += this.ripple.speed;
      this.ripple.opacity -= 0.025;

      if (this.ripple.opacity <= 0 || this.ripple.radius >= this.ripple.maxRadius) {
        this.ripple = null;
      }
    }

    // Connect particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = this.width < 768 ? 90 : 130;

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    // Update & draw particles
    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse repulsion/attraction field
      if (this.mouse.isActive) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 1.5;
          const angle = Math.atan2(dy, dx);
          // Push slightly away
          p.x -= Math.cos(angle) * force * 1.8;
          p.y -= Math.sin(angle) * force * 1.8;

          // Connect to mouse with neon cyan beam
          const mouseAlpha = (1 - dist / this.mouse.radius) * 0.45;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(0, 245, 255, ${mouseAlpha})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }

      // Pulse alpha
      const currentAlpha = p.baseAlpha + Math.sin(time + p.pulseOffset) * 0.2;
      
      // Draw particle circle with soft glow
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + Math.max(0.1, currentAlpha) + ')';
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color.includes('0, 245, 255') ? '#00f5ff' : '#a855f7';
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset
    }

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ParticleEngine('particle-canvas');
});

