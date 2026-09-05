// ===== MEMORY MEDIA DATA =====
const mediaItems = [
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.20.jpeg', caption: 'Every smile of yours is pure magic ✨' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.26 (1).jpeg', caption: 'My heart beats for you 💕' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.26.jpeg', caption: 'Cutest moments together 🥰' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.27 (1).jpeg', caption: 'Forever my favorite person 💖' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.27.jpeg', caption: 'You make every second unforgettable 🌸' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.28 (1).jpeg', caption: 'With you, life is beautiful 💫' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.28 (2).jpeg', caption: 'Pure happiness by your side 🌈' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.31.28.jpeg', caption: 'My today and all of my tomorrows 💍' },
    { type: 'video', src: 'WhatsApp Video 2026-09-03 at 01.34.03.mp4', caption: 'Our precious laughter 🎥💕' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.35.06.jpeg', caption: 'Lost in your eyes forever 🌟' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.31.jpeg', caption: 'Adventures with my love 🗺️💖' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.32 (1).jpeg', caption: 'Sweetest moments together 🍯' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.32 (2).jpeg', caption: 'Cherished forever and always 💕' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.32 (3).jpeg', caption: 'You and me against the world 🌍❤️' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.32.jpeg', caption: 'A love so genuine and true 🌹' },
    { type: 'video', src: 'WhatsApp Video 2026-09-03 at 01.34.05.mp4', caption: 'Unforgettable memories in motion 🎬💖' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.33 (1).jpeg', caption: 'The smile that stole my heart 🥰' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.33 (2).jpeg', caption: 'Holding onto you always 🤝💕' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.33.jpeg', caption: 'Every picture tells our story 📸' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.37.34.jpeg', caption: 'Endless love, endless giggles 💕' },
    { type: 'video', src: 'WhatsApp Video 2026-09-03 at 01.37.34.mp4', caption: 'Every beat of my heart sings for you 🎶✨' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 01.38.29.jpeg', caption: 'Our unforgettable moments & beyond 💖🏔️' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 02.19.44.jpeg', caption: 'Every look from you melts my heart 💖' },
    { type: 'image', src: 'WhatsApp Image 2026-09-03 at 02.19.45.jpeg', caption: 'Forever intertwined with you, my love ✨💕' }
];

// Normalize date helper
function normalizeDate(str) {
    if (!str) return '';
    const cleaned = str.trim().replace(/[-.]/g, '/');
    const parts = cleaned.split('/');
    if (parts.length === 3) {
        const d = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);
        const y = parseInt(parts[2], 10);
        if (!isNaN(d) && !isNaN(m) && !isNaN(y)) {
            return `${d}/${m}/${y}`;
        }
    }
    return cleaned.toLowerCase();
}

// Romantic Quiz Questions
const questions = [
    {
        badge: 'Milestone 1 of 6 💕',
        title: 'What is our relationship number? 💕',
        hint: 'Our special secret number...',
        placeholder: 'Enter number...',
        validate: (ans) => {
            const clean = ans.replace(/\D/g, '');
            return clean === '0715' || clean === '715';
        }
    },
    {
        badge: 'Milestone 2 of 6 💌',
        title: 'When did I send you a request? 💌',
        hint: 'When a simple message changed everything...',
        placeholder: 'DD/MM/YYYY',
        validate: (ans) => {
            const d = normalizeDate(ans);
            return d === '7/1/2023' || d === '07/01/2023' || ans.includes('7/1/2023') || ans.includes('7-1-2023');
        }
    },
    {
        badge: 'Milestone 3 of 6 💑',
        title: 'When did our relationship officially start? 💑',
        hint: 'The beautiful day our journey began...',
        placeholder: 'DD/MM/YYYY',
        validate: (ans) => {
            const d = normalizeDate(ans);
            return d === '7/4/2023' || d === '07/04/2023' || ans.includes('7/4/2023') || ans.includes('7-4-2023');
        }
    },
    {
        badge: 'Milestone 4 of 6 💋',
        title: 'The date of our unforgettable first kiss 💋',
        hint: 'That magical moment we shared together...',
        placeholder: 'DD/MM/YYYY',
        validate: (ans) => {
            const d = normalizeDate(ans);
            return d === '19/5/2024' || d === '19/05/2024' || ans.includes('19/5/2024') || ans.includes('19-5-2024');
        }
    },
    {
        badge: 'Milestone 5 of 6 💖',
        title: 'Our first intimate date together 💖',
        hint: 'Our most special, sacred milestone together...',
        placeholder: 'DD/MM/YYYY',
        validate: (ans) => {
            const d = normalizeDate(ans);
            return d === '7/3/2026' || d === '07/03/2026' || ans.includes('7/3/2026') || ans.includes('7-3-2026');
        }
    },
    {
        badge: 'Milestone 6 of 6 ✨',
        title: 'Our favourite and best memory together ✨',
        hint: 'That dream journey we took together...',
        placeholder: 'Enter memory...',
        validate: (ans) => {
            const clean = ans.toLowerCase().replace(/[^a-z0-9]/g, '');
            return clean.includes('2026yatra') || clean.includes('yatra2026') || clean.includes('yatra');
        }
    }
];

let currentQuestionIndex = 0;
let isUnlocked = false;

// Audio Object (Ed Sheeran - Perfect, from 0:00 to 1:35)
const audio = new Audio('Edd_Sheeran_-_Perfect_(mp3.pm).mp3');
const MAX_AUDIO_TIME = 95; // 1:35 = 95 seconds
audio.currentTime = 0;

audio.addEventListener('timeupdate', () => {
    if (audio.currentTime >= MAX_AUDIO_TIME) {
        audio.pause();
        audio.currentTime = 0;
        updateMusicUI();
    }
    updateMusicTime();
});

function updateMusicTime() {
    const timeEl = document.getElementById('musicTime');
    if (!timeEl) return;
    const cur = Math.floor(audio.currentTime);
    const m = Math.floor(cur / 60);
    const s = cur % 60;
    const sStr = s < 10 ? '0' + s : s;
    timeEl.textContent = `${m}:${sStr} / 1:35`;
}

function updateMusicUI() {
    const bars = document.getElementById('musicBars');
    const title = document.getElementById('musicTitle');
    if (audio.paused) {
        if (bars) bars.classList.remove('playing');
        if (title) title.textContent = '▶ Play Music';
    } else {
        if (bars) bars.classList.add('playing');
        if (title) title.textContent = '🎵 Ed Sheeran - Perfect';
    }
}

function toggleMusic() {
    if (audio.paused) {
        audio.play().catch(e => console.log('Audio play error:', e));
    } else {
        audio.pause();
    }
    updateMusicUI();
}

// Initialize Quiz UI
function renderQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('quizBadge').textContent = q.badge;
    document.getElementById('quizQuestion').textContent = q.title;
    document.getElementById('quizHint').textContent = q.hint;
    const input = document.getElementById('quizInput');
    input.value = '';
    input.placeholder = q.placeholder;
    input.focus();

    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('quizProgressFill').style.width = progressPercent + '%';

    const feedback = document.getElementById('quizFeedback');
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
}

function handleQuizSubmit(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('quizInput');
    const val = input.value.trim();
    const feedback = document.getElementById('quizFeedback');
    const card = document.getElementById('quizCard');

    if (!val) {
        feedback.textContent = 'Please enter your answer, sweetheart 💕';
        feedback.className = 'quiz-feedback error';
        return;
    }

    const q = questions[currentQuestionIndex];
    if (q.validate(val)) {
        // Correct Answer!
        feedback.textContent = 'You remembered! 🥰✨ Pure love!';
        feedback.className = 'quiz-feedback success';
        if (window.triggerConfetti) window.triggerConfetti();

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                renderQuestion();
            }, 900);
        } else {
            // Completed all questions!
            setTimeout(() => {
                unlockMemories();
            }, 1000);
        }
    } else {
        // Incorrect Answer!
        card.classList.add('shake-anim');
        setTimeout(() => card.classList.remove('shake-anim'), 600);
        feedback.innerHTML = 'Oops, my love! Not quite right 🥺 Think back to our special moment and <a href="#" id="tryAgainBtn" style="color:var(--pink-accent); font-weight:700; text-decoration:underline;">Try Again</a> 💕';
        feedback.className = 'quiz-feedback error';

        document.getElementById('tryAgainBtn')?.addEventListener('click', (ev) => {
            ev.preventDefault();
            input.value = '';
            input.focus();
            feedback.textContent = '';
        });
    }
}

// Unlocking the Media Section
function unlockMemories() {
    isUnlocked = true;
    document.getElementById('quizWrapper').style.display = 'none';
    const unlockedSec = document.getElementById('unlockedMediaSection');
    unlockedSec.style.display = 'block';

    // Pause Tum Mere Ho bday song when memories start
    if (typeof pauseBgMusic === 'function') pauseBgMusic();
    if (window.bgAudio) window.bgAudio.pause();

    // Start background memories music (0:00 to 1:35)
    audio.currentTime = 0;
    audio.play().then(() => {
        updateMusicUI();
    }).catch(err => {
        console.log('Audio autoplay blocked by browser policy:', err);
    });

    document.getElementById('musicPlayerPill').style.display = 'flex';

    if (window.triggerConfetti) window.triggerConfetti();

    initSlideshow();
    initMediaGrid();
}

// Slideshow implementation (beat-synced ~3.8s tempo)
let currentSlide = 0;
let slideInterval = null;

function initSlideshow() {
    const viewport = document.getElementById('slideshowViewport');
    viewport.innerHTML = '';

    mediaItems.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'slideshow-item' + (idx === 0 ? ' active' : '');
        div.dataset.index = idx;

        if (item.type === 'video') {
            const vid = document.createElement('video');
            vid.src = item.src;
            vid.autoplay = false;
            vid.muted = true; // muted so background music shines
            vid.loop = true;
            vid.playsInline = true;
            div.appendChild(vid);
        } else {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.caption;
            div.appendChild(img);
        }

        const overlay = document.createElement('div');
        overlay.className = 'slideshow-overlay';
        overlay.innerHTML = `<span>${item.caption}</span><span>${idx + 1} / ${mediaItems.length} 💕</span>`;
        div.appendChild(overlay);

        viewport.appendChild(div);
    });

    // Start beat-synced cycle (~3.8 seconds per beat cycle)
    startSlideshowTimer();
}

function startSlideshowTimer() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3800);
}

function nextSlide() {
    const items = document.querySelectorAll('.slideshow-item');
    if (!items.length) return;
    items[currentSlide].classList.remove('active');
    const prevVid = items[currentSlide].querySelector('video');
    if (prevVid) prevVid.pause();

    currentSlide = (currentSlide + 1) % items.length;
    items[currentSlide].classList.add('active');

    const nextVid = items[currentSlide].querySelector('video');
    if (nextVid) {
        nextVid.currentTime = 0;
        nextVid.play().catch(e => console.log(e));
    }
}

function prevSlide() {
    const items = document.querySelectorAll('.slideshow-item');
    if (!items.length) return;
    items[currentSlide].classList.remove('active');
    const prevVid = items[currentSlide].querySelector('video');
    if (prevVid) prevVid.pause();

    currentSlide = (currentSlide - 1 + items.length) % items.length;
    items[currentSlide].classList.add('active');

    const nextVid = items[currentSlide].querySelector('video');
    if (nextVid) {
        nextVid.currentTime = 0;
        nextVid.play().catch(e => console.log(e));
    }
}

// Media Grid & Lightbox
let activeLightboxIndex = 0;

function initMediaGrid() {
    const grid = document.getElementById('unlockedGrid');
    grid.innerHTML = '';

    mediaItems.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'media-item-card';
        card.addEventListener('click', () => openLightbox(idx));

        if (item.type === 'video') {
            const vid = document.createElement('video');
            vid.src = item.src;
            vid.muted = true;
            vid.playsInline = true;
            card.appendChild(vid);

            const hint = document.createElement('div');
            hint.className = 'video-play-hint';
            hint.innerHTML = '▶';
            card.appendChild(hint);

            const badge = document.createElement('div');
            badge.className = 'media-card-badge';
            badge.textContent = '🎥 Video';
            card.appendChild(badge);
        } else {
            const img = document.createElement('img');
            img.src = item.src;
            img.loading = 'lazy';
            img.alt = item.caption;
            card.appendChild(img);

            const badge = document.createElement('div');
            badge.className = 'media-card-badge';
            badge.textContent = '📷 Photo';
            card.appendChild(badge);
        }

        grid.appendChild(card);
    });
}

function openLightbox(index) {
    activeLightboxIndex = index;
    const modal = document.getElementById('lightboxModal');
    const content = document.getElementById('lightboxContent');
    const item = mediaItems[index];

    content.innerHTML = '';
    if (item.type === 'video') {
        const vid = document.createElement('video');
        vid.src = item.src;
        vid.controls = true;
        vid.autoplay = true;
        vid.playsInline = true;
        content.appendChild(vid);
    } else {
        const img = document.createElement('img');
        img.src = item.src;
        content.appendChild(img);
    }

    modal.classList.add('active');
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    const content = document.getElementById('lightboxContent');
    const vid = content.querySelector('video');
    if (vid) vid.pause();
    modal.classList.remove('active');
}

function nextLightbox() {
    activeLightboxIndex = (activeLightboxIndex + 1) % mediaItems.length;
    openLightbox(activeLightboxIndex);
}

function prevLightbox() {
    activeLightboxIndex = (activeLightboxIndex - 1 + mediaItems.length) % mediaItems.length;
    openLightbox(activeLightboxIndex);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderQuestion();

    document.getElementById('quizForm')?.addEventListener('submit', handleQuizSubmit);
    document.getElementById('musicPlayerPill')?.addEventListener('click', toggleMusic);

    document.getElementById('slideshowNext')?.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
        startSlideshowTimer();
    });
    document.getElementById('slideshowPrev')?.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
        startSlideshowTimer();
    });

    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxNext')?.addEventListener('click', (e) => { e.stopPropagation(); nextLightbox(); });
    document.getElementById('lightboxPrev')?.addEventListener('click', (e) => { e.stopPropagation(); prevLightbox(); });
    document.getElementById('lightboxModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'lightboxModal') closeLightbox();
    });

    // Keyboard support for lightbox
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('lightboxModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextLightbox();
            if (e.key === 'ArrowLeft') prevLightbox();
        }
    });

    // Pause memories music when leaving gallery page
    window.addEventListener('beforeunload', () => {
        if (audio) {
            audio.pause();
        }
    });
});
