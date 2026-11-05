/**
 * MUHAMMAD FAHRI - Flagship Portfolio Main Controller
 * Web Developer • Professional Basketball Athlete • Programmer
 * Interactions, Dual-Language, 3D Tilt, Project Modals, Sound Integration
 */

// --- Translation Dictionary (ID / EN) ---
const translations = {
  id: {
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_work: "Karya",
    nav_experience: "Pengalaman",
    nav_contact: "Kontak",
    nav_hire: "Hubungi Saya",
    
    hero_badge: "Staf IT di PT Cinta Sejati • Terbuka untuk Kolaborasi",
    hero_greeting: "Halo, Dunia. Saya",
    hero_role: "Web Developer • Basketball Pro • Programmer",
    hero_desc: "Perpaduan presisi kode seorang Web Developer & Programmer dengan ketangguhan mental, taktik, dan disiplin tinggi atlet basket profesional. Berpengalaman di Diskominfo, Universitas Battuta, hingga PT Cinta Sejati.",
    hero_cta_explore: "Jelajahi Karya & Proyek",
    hero_cta_resume: "Lihat & Unduh CV",
    hero_stat_exp: "Spesialis Frontend & UI",
    hero_stat_projects: "Basketball Athlete",
    hero_stat_perf: "Logika & Problem Solving",
    hero_stat_clients: "PT Cinta Sejati",

    skills_title: "Keahlian & Spesialisasi",
    skills_sub: "Tiga pilar keahlian Muhammad Fahri: Web Developer, Basketball Profesional, dan Programmer.",
    skills_tab_all: "Semua",
    skills_tab_frontend: "Web Developer",
    skills_tab_backend: "Basketball Pro",
    skills_tab_ai: "Programmer",

    work_title: "Karya Unggulan & Portofolio",
    work_sub: "Koleksi karya web dan sistem digital hasil karya Muhammad Fahri.",
    work_filter_all: "Semua Kategori",
    work_filter_ai: "AI & Smart Web",
    work_filter_3d: "3D & Interaktif",
    work_filter_fullstack: "Sistem Informasi",
    work_filter_fintech: "Web Portal",

    exp_title: "Rekam Jejak & Pengalaman",
    exp_sub: "Perjalanan dedikasi karir Muhammad Fahri dari instansi kedinasan, kampus, hingga perusahaan.",

    contact_title: "Mari Terhubung & Berkolaborasi",
    contact_sub: "Punya tawaran proyek web development, kebutuhan tenaga IT handal, atau kolaborasi olahraga bola basket? Kirimkan pesan langsung.",
    contact_name: "Nama Lengkap Anda",
    contact_email: "Alamat Surel Kontak",
    contact_budget: "Estimasi Anggaran Proyek / Kerja Sama:",
    contact_message: "Ceritakan tujuan proyek atau kerjasama...",
    contact_submit: "Kirim Pesan ke fm9865554@gmail.com",
    contact_direct_info: "Kanal Langsung",

    terminal_hint: "Tekan Ctrl+K atau klik ikon terminal untuk membuka Cyber CLI",
    footer_tagline: "Didesain & Diciptakan untuk Muhammad Fahri — Web Dev, Athlete & Programmer."
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_work: "Work",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_hire: "Get in Touch",

    hero_badge: "IT Staff @ PT Cinta Sejati • Open for Projects & Collaboration",
    hero_greeting: "Hello, World. I am",
    hero_role: "Web Developer • Professional Basketball Athlete • Programmer",
    hero_desc: "The fusion of sharp code precision of a Web Developer & Programmer with the mental toughness, tactics, and peak discipline of a professional basketball athlete.",
    hero_cta_explore: "Explore Work & Projects",
    hero_cta_resume: "View & Download CV",
    hero_stat_exp: "Frontend & UI Specialist",
    hero_stat_projects: "Basketball Athlete",
    hero_stat_perf: "Logic & Problem Solving",
    hero_stat_clients: "PT Cinta Sejati",

    skills_title: "Arsenal & Core Proficiencies",
    skills_sub: "Three pillars of Muhammad Fahri: Web Developer, Basketball Pro, and Programmer.",
    skills_tab_all: "All Stacks",
    skills_tab_frontend: "Web Developer",
    skills_tab_backend: "Basketball Pro",
    skills_tab_ai: "Programmer",

    work_title: "Featured Works & Portfolio",
    work_sub: "Collection of web and digital systems engineered by Muhammad Fahri.",
    work_filter_all: "All Categories",
    work_filter_ai: "AI & Smart Web",
    work_filter_3d: "3D & Interactive",
    work_filter_fullstack: "Information Systems",
    work_filter_fintech: "Web Portals",

    exp_title: "Proven Track Record & Journey",
    exp_sub: "Muhammad Fahri's professional journey from government service, campus leadership, to enterprise IT.",

    contact_title: "Let's Connect & Collaborate",
    contact_sub: "Have a web development opportunity, need solid IT expertise, or sports collaboration? Reach out directly.",
    contact_name: "Your Full Name",
    contact_email: "Contact Email Address",
    contact_budget: "Estimated Budget / Project Scope:",
    contact_message: "Detail your vision, specifications, or role...",
    contact_submit: "Send Message to fm9865554@gmail.com",
    contact_direct_info: "Direct Coordinates",

    terminal_hint: "Press Ctrl+K or click terminal icon to launch Cyber CLI",
    footer_tagline: "Engineered & Designed for Muhammad Fahri — Web Dev, Athlete & Programmer."
  }
};

// --- Featured Projects Database ---
const projectsData = [
  {
    id: "nexus-ai",
    title: "Portal Digital Universitas Battuta",
    tagline: "Sistem Antarmuka & Informasi Kampus Modern Terpadu",
    category: "fullstack",
    categoryBadge: "Desain Web Kampus",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-cyan-500/20 to-blue-600/20",
    stats: { role: "Kepala Desainer Web", campus: "Universitas Battuta", status: "Aktif" },
    tech: ["Web Design", "HTML5", "CSS3 / Tailwind", "JavaScript", "UI/UX Prototyping"],
    overview: "Proyek perancangan dan standarisasi antarmuka portal kampus Universitas Battuta. Menghadirkan navigasi yang jelas, arsitektur informasi akademik yang rapi, dan desain visual yang mencerminkan kampus modern bereputasi.",
    highlights: [
      "Perancangan sistem navigasi akademik ramah pengguna untuk ribuan mahasiswa",
      "Optimasi antarmuka responsif yang nyaman diakses lewat smartphone maupun desktop",
      "Penerapan prinsip UI/UX modern dengan tipografi bersih dan hierarki visual yang kuat"
    ],
    liveUrl: "#contact",
    githubUrl: "mailto:fm9865554@gmail.com"
  },
  {
    id: "aetheria-3d",
    title: "Platform Data & Layanan Publik Diskominfo",
    tagline: "Digitalisasi Sistem Informasi Kedinasan Pemerintahan",
    category: "fintech",
    categoryBadge: "Diskominfo Project",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-purple-500/20 to-pink-600/20",
    stats: { role: "Mahasiswa Magang", org: "Diskominfo", focus: "Layanan Publik" },
    tech: ["Web Portal", "Basis Data", "Sistem Informasi", "PHP / JS", "Keamanan Data"],
    overview: "Kontribusi nyata selama program magang kedinasan di Dinas Komunikasi dan Informatika (Diskominfo), membantu akselerasi transformasi digital layanan publik dan tata kelola data pemerintahan.",
    highlights: [
      "Asistensi pengelolaan basis data informasi publik dan portal terpadu daerah",
      "Pengecekan kualitas dan konsistensi data pada sistem pelayanan masyarakat",
      "Kolaborasi tim teknis dalam menjaga kestabilan sistem informasi instansi"
    ],
    liveUrl: "#contact",
    githubUrl: "mailto:fm9865554@gmail.com"
  },
  {
    id: "krypton-core",
    title: "Sistem Manajemen IT PT Cinta Sejati",
    tagline: "Infrastruktur Operasional & Dukungan Teknis Perusahaan",
    category: "fullstack",
    categoryBadge: "Infrastruktur IT",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-emerald-500/20 to-teal-600/20",
    stats: { role: "Staf IT", company: "PT Cinta Sejati", status: "Aktif" },
    tech: ["IT Support", "Jaringan Komputer", "Troubleshooting", "System Admin", "Hardware & Software"],
    overview: "Pengelolaan dan pemeliharaan menyeluruh atas infrastruktur teknologi informasi di PT Cinta Sejati. Memastikan seluruh perangkat kerja, jaringan komunikasi, dan sistem data operasional berjalan tanpa hambatan.",
    highlights: [
      "Pemeliharaan berkala infrastruktur jaringan LAN/WLAN dan perangkat kantor",
      "Penanganan cepat (troubleshooting) terhadap kendala software dan hardware karyawan",
      "Penerapan standar operasional keamanan sistem data perusahaan"
    ],
    liveUrl: "#contact",
    githubUrl: "mailto:fm9865554@gmail.com"
  },
  {
    id: "apex-sentinel",
    title: "Basketball Tactic & Team Performance Web",
    tagline: "Aplikasi Web Interaktif Analisis Taktik Bola Basket",
    category: "3d",
    categoryBadge: "Sports & Analytics",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-amber-500/20 to-orange-600/20",
    stats: { role: "Creator & Athlete", sports: "Basketball", focus: "Taktik & Performa" },
    tech: ["JavaScript", "Interactive Canvas", "Sports Tech", "Data Visualization", "Tailwind CSS"],
    overview: "Aplikasi web inovatif yang mengawinkan dunia pemrograman dengan dunia olahraga bola basket profesional. Digunakan untuk merancang pola serangan, evaluasi pertahanan, dan statistik performa tim di lapangan.",
    highlights: [
      "Papan taktik interaktif berbasis kanvas web untuk simulasi pergerakan pemain",
      "Visualisasi statistik akurasi tembakan dan efisiensi rebound",
      "Antarmuka intuitif yang mempermudah pelatih dan pemain menganalisis strategi tanding"
    ],
    liveUrl: "#contact",
    githubUrl: "mailto:fm9865554@gmail.com"
  }
];

class PortfolioApp {
  constructor() {
    this.currentLang = localStorage.getItem('user_lang') || 'id';
    this.init();
  }

  init() {
    this.setupCursor();
    this.setupNavbar();
    this.setupScrollProgress();
    this.setupLanguage();
    this.setupSoundToggle();
    this.setupTiltCards();
    this.setupWorkFilters();
    this.setupProjectModal();
    this.setupResumeModal();
    this.setupContactForm();
    this.setupClock();
    this.setupSoundAudioTriggers();
    this.applyTranslations();
  }

  // --- 1. Custom Interactive Cursor ---
  setupCursor() {
    const dot = document.querySelector('.custom-cursor-dot');
    const ring = document.querySelector('.custom-cursor-ring');
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    const hoverElements = 'a, button, input, textarea, select, .tilt-card, [role="button"], .interactive-target';
    document.querySelectorAll(hoverElements).forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // --- 2. Navbar & Mobile Drawer ---
  setupNavbar() {
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('py-3', 'shadow-2xl', 'border-b', 'border-white/10', 'bg-slate-950/80');
        header.classList.remove('py-5', 'bg-transparent');
      } else {
        header.classList.remove('py-3', 'shadow-2xl', 'border-b', 'border-white/10', 'bg-slate-950/80');
        header.classList.add('py-5', 'bg-transparent');
      }
    });

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (window.soundSystem) window.soundSystem.playClick();
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }
  }

  // --- 3. Scroll Progress Bar ---
  setupScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        bar.style.width = `${progress}%`;
      }
    });
  }

  // --- 4. Dual Language Toggle ---
  setupLanguage() {
    const langBtn = document.getElementById('lang-toggle-btn');
    if (!langBtn) return;

    const updateBtnLabel = () => {
      langBtn.innerHTML = this.currentLang === 'id' 
        ? '<span class="text-base">🇮🇩</span> <span class="font-mono text-xs font-bold text-cyan-300">ID</span>' 
        : '<span class="text-base">🇬🇧</span> <span class="font-mono text-xs font-bold text-cyan-300">EN</span>';
    };

    updateBtnLabel();

    langBtn.addEventListener('click', () => {
      this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
      localStorage.setItem('user_lang', this.currentLang);
      updateBtnLabel();
      this.applyTranslations();
      if (window.soundSystem) window.soundSystem.playClick();
    });
  }

  applyTranslations() {
    const dict = translations[this.currentLang] || translations.id;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }

  // --- 5. Sound FX Toggle ---
  setupSoundToggle() {
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (!soundBtn || !window.soundSystem) return;

    const updateIcon = () => {
      const active = !window.soundSystem.isMuted;
      soundBtn.innerHTML = active
        ? '<svg class="w-5 h-5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg><span class="hidden md:inline font-mono text-xs text-cyan-300">AUDIO ON</span>'
        : '<svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg><span class="hidden md:inline font-mono text-xs text-slate-400">MUTED</span>';
    };

    updateIcon();

    soundBtn.addEventListener('click', () => {
      window.soundSystem.toggle();
      updateIcon();
    });
  }

  // --- 6. Sound Audio Triggers on Interaction ---
  setupSoundAudioTriggers() {
    const clickables = 'a, button, input[type="radio"], input[type="checkbox"], .tab-btn';
    document.querySelectorAll(clickables).forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (window.soundSystem) window.soundSystem.playHover();
      });
      el.addEventListener('click', () => {
        if (window.soundSystem) window.soundSystem.playClick();
      });
    });
  }

  // --- 7. Interactive 3D Card Tilt ---
  setupTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // --- 8. Work Categories Filter ---
  setupWorkFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/25');
          b.classList.add('bg-white/5', 'text-slate-300', 'hover:bg-white/10');
        });
        btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/25');
        btn.classList.remove('bg-white/5', 'text-slate-300', 'hover:bg-white/10');

        const category = btn.dataset.filter;

        projectCards.forEach((card) => {
          if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
            card.classList.add('animate-fadeIn');
          } else {
            card.classList.add('hidden');
          }
        });

        if (window.soundSystem) window.soundSystem.playClick();
      });
    });
  }

  // --- 9. Project Detail Modal ---
  setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-project-modal');
    if (!modal) return;

    const modalTitle = document.getElementById('modal-project-title');
    const modalTagline = document.getElementById('modal-project-tagline');
    const modalBadge = document.getElementById('modal-project-badge');
    const modalImage = document.getElementById('modal-project-image');
    const modalOverview = document.getElementById('modal-project-overview');
    const modalHighlights = document.getElementById('modal-project-highlights');
    const modalTech = document.getElementById('modal-project-tech');
    const modalLive = document.getElementById('modal-project-live');
    const modalGithub = document.getElementById('modal-project-github');

    document.querySelectorAll('.open-project-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pid = btn.dataset.projectId;
        const project = projectsData.find(p => p.id === pid);
        if (!project) return;

        modalTitle.textContent = project.title;
        modalTagline.textContent = project.tagline;
        modalBadge.textContent = project.categoryBadge;
        modalImage.src = project.image;
        modalOverview.textContent = project.overview;

        modalHighlights.innerHTML = project.highlights.map(h => `
          <li class="flex items-start gap-2 text-sm text-slate-300">
            <span class="text-cyan-400 mt-0.5">✦</span>
            <span>${h}</span>
          </li>
        `).join('');

        modalTech.innerHTML = project.tech.map(t => `
          <span class="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
            ${t}
          </span>
        `).join('');

        modalLive.href = project.liveUrl;
        modalGithub.href = project.githubUrl;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        if (window.soundSystem) window.soundSystem.playWarp();
      });
    });

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      if (window.soundSystem) window.soundSystem.playClick();
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // --- 10. Interactive Resume / CV Modal ---
  setupResumeModal() {
    const modal = document.getElementById('resume-modal');
    const openBtns = document.querySelectorAll('.open-resume-btn');
    const closeBtn = document.getElementById('close-resume-btn');
    const printBtn = document.getElementById('print-resume-btn');

    if (!modal) return;

    openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        if (window.soundSystem) window.soundSystem.playWarp();
      });
    });

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      if (window.soundSystem) window.soundSystem.playClick();
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // --- 11. Interactive Contact Form with Confetti ---
  setupContactForm() {
    const form = document.getElementById('contact-form');
    const budgetSlider = document.getElementById('budget-slider');
    const budgetValue = document.getElementById('budget-value');
    const submitBtn = document.getElementById('contact-submit-btn');
    const statusMsg = document.getElementById('contact-status-msg');

    if (budgetSlider && budgetValue) {
      const budgetSteps = ["Kerjasama Fleksibel", "Proyek Standar", "Proyek Menengah", "Kebutuhan Tim / Enterprise"];
      budgetSlider.addEventListener('input', (e) => {
        budgetValue.textContent = budgetSteps[e.target.value] || "Proyek Menengah";
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Mengirimkan Pesan ke Muhammad Fahri...
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();

          if (statusMsg) {
            statusMsg.classList.remove('hidden');
            setTimeout(() => statusMsg.classList.add('hidden'), 8000);
          }

          if (typeof confetti === 'function') {
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.7 },
              colors: ['#00f5ff', '#f59e0b', '#8b5cf6', '#ffffff']
            });
          }

          if (window.soundSystem) {
            window.soundSystem.playSuccess();
          }
        }, 1200);
      });
    }

    // Copy to clipboard
    document.querySelectorAll('.copy-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.copy;
        if (text) {
          navigator.clipboard.writeText(text);
          const feedback = btn.querySelector('.copy-feedback');
          if (feedback) {
            const original = feedback.textContent;
            feedback.textContent = 'Tersalin!';
            feedback.classList.add('text-emerald-400');
            setTimeout(() => {
              feedback.textContent = original;
              feedback.classList.remove('text-emerald-400');
            }, 2000);
          }
          if (window.soundSystem) window.soundSystem.playSuccess();
        }
      });
    });
  }

  // --- 12. Real-Time Dynamic Clock ---
  setupClock() {
    const clockEl = document.getElementById('realtime-clock');
    if (!clockEl) return;

    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      clockEl.textContent = `${timeStr} WIB (Jakarta, UTC+7)`;
    };

    updateTime();
    setInterval(updateTime, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});
