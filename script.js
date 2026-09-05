// ===== FLOATING HEARTS =====
function createHeart() {
    const container = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');

    const hearts = ['💕', '💖', '💗', '💝', '💘', '🩷', '🤍', '💙', '🩵', '🫧'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 12) + 'px';
    heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 18000);
}

setInterval(createHeart, 800);

// Create a bunch initially
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 300);
}


// ===== NAVBAR =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile nav when tapping outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active')) {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});


// ===== SCROLL & ENTRANCE ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
        }
    });
}, observerOptions);

// Observe wish cards & reason items
document.querySelectorAll('.wish-card, .reason-item').forEach(el => observer.observe(el));

// Fallback to make items visible if already in viewport or after delay
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.wish-card, .reason-item').forEach((el, index) => {
            if (!el.classList.contains('visible')) {
                setTimeout(() => el.classList.add('visible'), index * 100);
            }
        });
    }, 200);
});


// ===== ENVELOPE / LOVE LETTER =====
const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letterContent');

if (envelope && letterContent) {
    envelope.addEventListener('click', () => {
        envelope.classList.add('opened');
        letterContent.classList.add('visible');
        triggerConfetti();
    });
}


// ===== CONFETTI =====
function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = [
        '#ffc0cb', '#ff85a2', '#ff6b8a', '#87ceeb',
        '#5bb8e8', '#b3e0f7', '#ffb6c1', '#add8e6',
        '#ffd700', '#ff69b4', '#ffffff', '#e6e6fa'
    ];

    for (let i = 0; i < 200; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.5) * 4,
            speedY: Math.random() * 4 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            shape: Math.random() > 0.5 ? 'rect' : 'circle',
            opacity: 1
        });
    }

    let frame = 0;
    const maxFrames = 300;

    function animate() {
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            p.speedY += 0.05; // gravity

            if (frame > maxFrames - 60) {
                p.opacity -= 0.016;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillStyle = p.color;

            if (p.shape === 'rect') {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        });

        if (frame < maxFrames) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}


// ===== INITIAL CONFETTI ON PAGE LOAD (for pages with confettiCanvas) =====
window.addEventListener('load', () => {
    if (document.getElementById('confettiCanvas') && !document.getElementById('envelope')) {
        setTimeout(triggerConfetti, 500);
    }
});


// ===== RESIZE HANDLER =====
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});


// ===== PASSWORD PROTECTION (BIRTHDATE: 070909) =====
function initPasswordProtection() {
    const isUnlocked = sessionStorage.getItem('bday_unlocked') === 'true';
    const overlay = document.getElementById('passwordOverlay');
    const path = window.location.pathname.toLowerCase();
    const isHomePage = path.endsWith('index.html') || path.endsWith('/') || !path.includes('.html');

    if (!isUnlocked) {
        if (!isHomePage) {
            // Redirect to home page if not unlocked yet
            window.location.href = 'index.html';
            return;
        } else if (overlay) {
            overlay.classList.remove('unlocked');
        }
    } else if (overlay) {
        overlay.classList.add('unlocked');
    }

    const form = document.getElementById('passwordForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('passwordInput');
            const feedback = document.getElementById('passwordFeedback');
            const card = document.getElementById('passwordCard');
            const val = input.value.trim().replace(/[^0-9]/g, '');

            if (val === '070909' || val === '70909' || val === '07092009' || val === '7092009') {
                feedback.textContent = 'Welcome, Birthday Girl! 🥰✨ Unlocking your surprise...';
                feedback.className = 'lock-feedback success';
                sessionStorage.setItem('bday_unlocked', 'true');
                if (typeof triggerConfetti === 'function') triggerConfetti();

                setTimeout(() => {
                    overlay.classList.add('unlocked');
                    window.location.href = 'cake.html';
                }, 850);
            } else {
                card.classList.add('shake-anim');
                setTimeout(() => card.classList.remove('shake-anim'), 600);
                feedback.textContent = 'Oops, wrong birthdate! 🥺 Try again, sweetie 💕';
                feedback.className = 'lock-feedback error';
                input.value = '';
                input.focus();
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initPasswordProtection();
        initBackgroundMusic();
    });
} else {
    initPasswordProtection();
    initBackgroundMusic();
}

// ===== BACKGROUND MUSIC MANAGER ("Tum mere ho bdayy.mpeg") =====
let bgAudio = null;

function initBackgroundMusic() {
    const path = window.location.pathname.toLowerCase();
    const isGallery = path.includes('gallery.html');

    // On gallery page, DO NOT play Tum Mere Ho (Ed Sheeran plays on gallery instead)
    if (isGallery) {
        if (bgAudio) {
            bgAudio.pause();
        }
        return;
    }

    const isMusicActive = sessionStorage.getItem('bg_music_active') === 'true';
    if (!isMusicActive) {
        return;
    }

    if (!bgAudio) {
        bgAudio = new Audio('Tum%20mere%20ho%20bdayy.mpeg');
        bgAudio.loop = true;
        window.bgAudio = bgAudio;
    }

    // Restore saved playback position
    const savedTime = parseFloat(sessionStorage.getItem('bg_music_time') || '0');
    if (savedTime && !isNaN(savedTime)) {
        bgAudio.currentTime = savedTime;
    }

    // Periodically record playback time so navigation resumes seamlessly
    bgAudio.addEventListener('timeupdate', () => {
        sessionStorage.setItem('bg_music_time', bgAudio.currentTime.toString());
        updateBgMusicUI();
    });

    window.addEventListener('beforeunload', () => {
        if (bgAudio) {
            sessionStorage.setItem('bg_music_time', bgAudio.currentTime.toString());
        }
    });

    createBgMusicPill();

    const userPaused = sessionStorage.getItem('bg_music_user_paused') === 'true';
    if (!userPaused) {
        playBgMusic();
    } else {
        updateBgMusicUI();
    }
}

function playBgMusic() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('gallery.html')) return; // Do not play on gallery

    if (!bgAudio) {
        bgAudio = new Audio('Tum%20mere%20ho%20bdayy.mpeg');
        bgAudio.loop = true;
        window.bgAudio = bgAudio;
    }
    sessionStorage.setItem('bg_music_active', 'true');
    sessionStorage.setItem('bg_music_user_paused', 'false');

    createBgMusicPill();

    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            updateBgMusicUI();
        }).catch(() => {
            // Autoplay policy prevented immediate playback: play on first user interaction
            const resumeOnInteraction = () => {
                if (bgAudio) {
                    bgAudio.play().then(() => {
                        updateBgMusicUI();
                    }).catch(() => {});
                }
                document.removeEventListener('click', resumeOnInteraction);
                document.removeEventListener('touchstart', resumeOnInteraction);
            };
            document.addEventListener('click', resumeOnInteraction, { once: true });
            document.addEventListener('touchstart', resumeOnInteraction, { once: true });
        });
    }
    updateBgMusicUI();
}

function pauseBgMusic() {
    if (bgAudio) {
        bgAudio.pause();
        sessionStorage.setItem('bg_music_user_paused', 'true');
        updateBgMusicUI();
    }
}

function toggleBgMusic() {
    if (!bgAudio || bgAudio.paused) {
        playBgMusic();
    } else {
        pauseBgMusic();
    }
}

function createBgMusicPill() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('gallery.html')) return; // Gallery has its own player pill for Perfect

    if (document.getElementById('bgMusicPill')) return;

    const pill = document.createElement('div');
    pill.id = 'bgMusicPill';
    pill.className = 'music-player-pill';
    pill.title = 'Click to Play/Pause Birthday Song 💕';
    pill.innerHTML = `
        <div class="music-bars" id="bgMusicBars">
            <div class="music-bar"></div>
            <div class="music-bar"></div>
            <div class="music-bar"></div>
            <div class="music-bar"></div>
        </div>
        <div class="music-info">
            <span class="music-title">🎵 Tum Mere Ho ❤️</span>
            <span class="music-time" id="bgMusicTime">0:00</span>
        </div>
    `;

    pill.addEventListener('click', toggleBgMusic);
    document.body.appendChild(pill);
}

function updateBgMusicUI() {
    const bars = document.getElementById('bgMusicBars');
    const timeEl = document.getElementById('bgMusicTime');
    if (!bars || !timeEl || !bgAudio) return;

    if (!bgAudio.paused) {
        bars.classList.add('playing');
        const cur = Math.floor(bgAudio.currentTime);
        const m = Math.floor(cur / 60);
        const s = cur % 60;
        timeEl.textContent = `${m}:${s < 10 ? '0' + s : s}`;
    } else {
        bars.classList.remove('playing');
        timeEl.textContent = 'Paused ⏸️';
    }
}

window.playBgMusic = playBgMusic;
window.pauseBgMusic = pauseBgMusic;
window.toggleBgMusic = toggleBgMusic;

