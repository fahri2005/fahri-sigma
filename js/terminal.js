/**
 * MUHAMMAD FAHRI - Cyber Command Terminal & Matrix Easter Egg
 * Web Developer • Professional Basketball Athlete • Programmer
 * Supports interactive command-line, hotkey (Ctrl+K), auto-complete, history navigation.
 */

class CyberTerminal {
  constructor() {
    this.modal = document.getElementById('terminal-modal');
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.openBtn = document.getElementById('open-terminal-btn');
    this.closeBtn = document.getElementById('close-terminal-btn');
    this.matrixCanvas = document.getElementById('matrix-canvas');

    this.isOpen = false;
    this.history = [];
    this.historyIndex = -1;
    this.isMatrixActive = false;
    this.matrixInterval = null;

    this.commands = {
      help: () => this.cmdHelp(),
      about: () => this.cmdAbout(),
      skills: () => this.cmdSkills(),
      projects: () => this.cmdProjects(),
      contact: () => this.cmdContact(),
      matrix: () => this.toggleMatrix(),
      sound: (arg) => this.cmdSound(arg),
      clear: () => this.cmdClear(),
      'sudo hire': () => this.cmdSudoHire(),
      date: () => this.cmdDate(),
      whoami: () => 'guest@muhammad-fahri-workstation:~$ Anda sedang melihat profil resmi Muhammad Fahri.',
      exit: () => this.close()
    };

    this.init();
  }

  init() {
    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => this.open());
    }
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Hotkey: Ctrl + K or Cmd + K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    if (this.input) {
      this.input.addEventListener('keydown', (e) => this.handleInputKeydown(e));
    }

    // Quick Command Pills
    document.querySelectorAll('.terminal-quick-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cmd = btn.dataset.cmd;
        if (cmd) {
          this.executeCommand(cmd);
          if (window.soundSystem) window.soundSystem.playClick();
        }
      });
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this.modal) return;
    this.isOpen = true;
    this.modal.classList.remove('hidden');
    this.modal.classList.add('flex');
    if (window.soundSystem) window.soundSystem.playWarp();
    setTimeout(() => {
      if (this.input) this.input.focus();
    }, 100);
  }

  close() {
    if (!this.modal) return;
    this.isOpen = false;
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
    if (window.soundSystem) window.soundSystem.playClick();
  }

  handleInputKeydown(e) {
    if (window.soundSystem) window.soundSystem.playKeypress();

    if (e.key === 'Enter') {
      const val = this.input.value.trim();
      if (val) {
        this.history.push(val);
        this.historyIndex = this.history.length;
        this.executeCommand(val);
        this.input.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.history.length > 0 && this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = this.history.length;
        this.input.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      this.handleAutocomplete();
    }
  }

  handleAutocomplete() {
    const val = this.input.value.toLowerCase();
    const matches = Object.keys(this.commands).filter(c => c.startsWith(val));
    if (matches.length === 1) {
      this.input.value = matches[0];
    }
  }

  executeCommand(rawCmd) {
    const cleanCmd = rawCmd.trim();
    const parts = cleanCmd.split(' ');
    const primary = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    this.printLine(`fahri@system:~$ <span class="text-cyan-400 font-semibold">${this.escapeHtml(cleanCmd)}</span>`);

    if (cleanCmd.toLowerCase() === 'sudo hire') {
      this.printLine(this.cmdSudoHire());
      return;
    }

    if (this.commands[primary]) {
      const res = this.commands[primary](arg);
      if (res) this.printLine(res);
    } else {
      this.printLine(`<span class="text-rose-400">Perintah tidak dikenali: '${this.escapeHtml(cleanCmd)}'. Ketik <span class="text-yellow-400 font-mono underline cursor-pointer" onclick="window.terminal.executeCommand('help')">help</span> untuk daftar perintah.</span>`);
      if (window.soundSystem) window.soundSystem.playGlitch();
    }

    if (this.output) {
      this.output.scrollTop = this.output.scrollHeight;
    }
  }

  printLine(html) {
    if (!this.output) return;
    const div = document.createElement('div');
    div.className = 'leading-relaxed text-sm';
    div.innerHTML = html;
    this.output.appendChild(div);
  }

  cmdHelp() {
    return `
<div class="p-3 bg-white/5 rounded-lg border border-white/10 my-1 space-y-1">
  <div class="text-cyan-300 font-bold tracking-wider mb-1">DAFTAR PERINTAH (COMMANDS):</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
    <div><span class="text-emerald-400 font-mono font-bold">about</span> - Profil lengkap Muhammad Fahri</div>
    <div><span class="text-emerald-400 font-mono font-bold">skills</span> - Rincian 3 keahlian utama</div>
    <div><span class="text-emerald-400 font-mono font-bold">projects</span> - Rekam jejak & karya digital</div>
    <div><span class="text-emerald-400 font-mono font-bold">matrix</span> - Aliran kode digital film Matrix</div>
    <div><span class="text-emerald-400 font-mono font-bold">sound [on|off]</span> - Atur efek audio cyber</div>
    <div><span class="text-emerald-400 font-mono font-bold">contact</span> - Surel langsung (fm9865554@gmail.com)</div>
    <div><span class="text-emerald-400 font-mono font-bold">sudo hire</span> - Akses prioritas rekrutmen VIP</div>
    <div><span class="text-emerald-400 font-mono font-bold">clear</span> - Bersihkan layar konsol</div>
    <div><span class="text-emerald-400 font-mono font-bold">exit</span> - Tutup jendela CLI</div>
  </div>
</div>`;
  }

  cmdAbout() {
    return `
<div class="text-slate-300 space-y-1 text-xs">
  <p><span class="text-cyan-400 font-bold">MUHAMMAD FAHRI</span> — Web Developer, Atlet Basket Profesional & Programmer.</p>
  <p class="text-slate-400">Rekam Jejak:</p>
  <ul class="list-disc list-inside text-slate-300 ml-2">
    <li><strong class="text-cyan-300">Staf IT</strong> di PT Cinta Sejati (Terkini)</li>
    <li><strong class="text-purple-300">Kepala Desainer Web</strong> di Universitas Battuta</li>
    <li><strong class="text-emerald-300">Mahasiswa Magang</strong> di Diskominfo</li>
  </ul>
  <p class="text-slate-400 mt-1">Menggabungkan logika pemrograman modern dengan etos disiplin, fokus tinggi, dan kerja sama tim lapangan basket.</p>
</div>`;
  }

  cmdSkills() {
    return `
<div class="text-xs space-y-1 text-slate-300">
  <div><span class="text-cyan-400 font-bold">1. Web Developer:</span> HTML5, CSS3, JavaScript, Tailwind CSS, Responsive Web Design, UI/UX</div>
  <div><span class="text-amber-400 font-bold">2. Basketball Profesional:</span> Tactical Playmaking, High Endurance, Team Leadership, Mental Resilience</div>
  <div><span class="text-purple-400 font-bold">3. Programmer & IT Dev:</span> Algoritma & Logika, Database Management, IT Support, Network Troubleshooting</div>
</div>`;
  }

  cmdProjects() {
    return `
<div class="space-y-1 text-xs">
  <div class="text-cyan-300 font-bold">Rekam Jejak & Proyek Unggulan:</div>
  <div>1. <span class="text-white font-semibold">Staf IT @ PT Cinta Sejati</span> - Pengelolaan infrastruktur & sistem IT terpadu</div>
  <div>2. <span class="text-white font-semibold">Kepala Desainer Web @ Universitas Battuta</span> - Perancangan portal web kampus</div>
  <div>3. <span class="text-white font-semibold">Mahasiswa Magang @ Diskominfo</span> - Digitalisasi layanan publik & tata kelola data</div>
  <div>4. <span class="text-white font-semibold">Basketball Tactic & Performance Web</span> - Aplikasi strategi olahraga interaktif</div>
</div>`;
  }

  cmdContact() {
    return `
<div class="text-xs space-y-1">
  <div><span class="text-slate-400">Surel Resmi:</span> <a href="mailto:fm9865554@gmail.com" class="text-cyan-400 underline">fm9865554@gmail.com</a></div>
  <div><span class="text-slate-400">Posisi:</span> <span class="text-emerald-400 font-bold">Staf IT @ PT Cinta Sejati</span></div>
  <div><span class="text-slate-400">Status:</span> <span class="text-white">Terbuka untuk proyek Web Development & kolaborasi olahraga</span></div>
</div>`;
  }

  cmdSound(arg) {
    if (!window.soundSystem) return 'Sistem suara tidak tersedia.';
    if (arg === 'on') {
      if (window.soundSystem.isMuted) window.soundSystem.toggle();
      return '<span class="text-emerald-400">Efek audio cyber diaktifkan [ON].</span>';
    } else if (arg === 'off') {
      if (!window.soundSystem.isMuted) window.soundSystem.toggle();
      return '<span class="text-yellow-400">Efek audio disenyapkan [OFF].</span>';
    } else {
      const state = window.soundSystem.toggle();
      return `Status Audio: <span class="${state ? 'text-emerald-400' : 'text-yellow-400'}">${state ? 'ON' : 'OFF'}</span>`;
    }
  }

  cmdClear() {
    if (this.output) this.output.innerHTML = '';
    return '';
  }

  cmdDate() {
    return `<span class="text-slate-300">Waktu Lokal: ${new Date().toLocaleString('id-ID', { timeZoneName: 'short' })}</span>`;
  }

  cmdSudoHire() {
    if (window.soundSystem) window.soundSystem.playSuccess();
    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    return `
<div class="p-3 bg-gradient-to-r from-emerald-950/60 to-cyan-950/60 border border-emerald-500/40 rounded-lg text-emerald-300 space-y-1">
  <div class="font-bold text-base flex items-center gap-2">
    <span>⚡</span> AKSES DIBERIKAN: JALUR PRIORITAS MUHAMMAD FAHRI
  </div>
  <p class="text-xs text-emerald-200">
    Muhammad Fahri siap menghadirkan ketangguhan mental atletik dan presisi teknis IT terbaik untuk tim Anda.
  </p>
  <div class="pt-2">
    <a href="#contact" onclick="window.terminal.close()" class="inline-block px-4 py-1.5 bg-emerald-500 text-slate-950 font-bold rounded hover:bg-emerald-400 transition-colors text-xs">
      Buka Formulir Kontak Langsung →
    </a>
  </div>
</div>`;
  }

  toggleMatrix() {
    if (this.isMatrixActive) {
      this.stopMatrix();
      return '<span class="text-yellow-400">Aliran Matrix dinonaktifkan.</span>';
    } else {
      this.startMatrix();
      return '<span class="text-emerald-400 font-bold">⚡ Matrix Digital Stream AKTIF! Ketik "matrix" lagi untuk mematikan.</span>';
    }
  }

  startMatrix() {
    if (!this.matrixCanvas) return;
    this.isMatrixActive = true;
    this.matrixCanvas.classList.remove('hidden');
    const ctx = this.matrixCanvas.getContext('2d');

    const resize = () => {
      this.matrixCanvas.width = window.innerWidth;
      this.matrixCanvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01MUHAMMADFAHRI<>{}[];/*+=!@#$%^&BASKETBALLDEV';
    const fontSize = 14;
    const columns = Math.floor(this.matrixCanvas.width / fontSize);
    const drops = Array(columns).fill(1);

    this.matrixInterval = setInterval(() => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, this.matrixCanvas.width, this.matrixCanvas.height);

      ctx.fillStyle = '#00f5ff';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillStyle = Math.random() > 0.85 ? '#ffffff' : (Math.random() > 0.5 ? '#00f5ff' : '#f59e0b');
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > this.matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 33);
  }

  stopMatrix() {
    this.isMatrixActive = false;
    if (this.matrixInterval) {
      clearInterval(this.matrixInterval);
      this.matrixInterval = null;
    }
    if (this.matrixCanvas) {
      this.matrixCanvas.classList.add('hidden');
      const ctx = this.matrixCanvas.getContext('2d');
      ctx.clearRect(0, 0, this.matrixCanvas.width, this.matrixCanvas.height);
    }
  }

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.terminal = new CyberTerminal();
});
