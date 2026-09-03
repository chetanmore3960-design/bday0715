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
                }, 700);
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
    document.addEventListener('DOMContentLoaded', initPasswordProtection);
} else {
    initPasswordProtection();
}

