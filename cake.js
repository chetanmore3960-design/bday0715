// ===== INTERACTIVE CAKE CUTTING SCRIPT =====
let isCakeCut = false;

function cutCake() {
    if (isCakeCut) return;
    isCakeCut = true;

    // 1. Animate Knife
    const knife = document.getElementById('knifeCursor');
    if (knife) knife.classList.add('cutting');

    // 2. Blow out candle flames
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => {
        flame.classList.add('blown-out');
    });

    // 3. Slicing line animation
    const cutLine = document.getElementById('cakeCutLine');
    if (cutLine) cutLine.classList.add('sliced');

    // 4. Trigger celebration Confetti & Play Tum Mere Ho Bday Song
    if (typeof triggerConfetti === 'function') {
        triggerConfetti();
        setTimeout(triggerConfetti, 800);
    }
    if (typeof playBgMusic === 'function') {
        playBgMusic();
    }

    // 5. Reveal served cake slice & sweet message
    setTimeout(() => {
        const sliceContainer = document.getElementById('servedSliceContainer');
        if (sliceContainer) sliceContainer.classList.add('visible');

        const cutBtn = document.getElementById('cutCakeBtn');
        if (cutBtn) {
            cutBtn.innerHTML = 'Cake Sliced With Love! 🎂✨';
            cutBtn.style.opacity = '0.85';
            cutBtn.style.pointerEvents = 'none';
        }
    }, 400);

    // 6. Unfold the Cute Romantic Note
    setTimeout(() => {
        const noteWrapper = document.getElementById('cuteNoteWrapper');
        if (noteWrapper) {
            noteWrapper.classList.add('visible');
            noteWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 900);
}

function initCakePage() {
    isCakeCut = false;
    const cutBtn = document.getElementById('cutCakeBtn');
    const cakeStage = document.getElementById('cakeStage');

    if (cutBtn) cutBtn.onclick = cutCake;
    if (cakeStage) cakeStage.onclick = cutCake;

    // Swipe/Touch gesture support on mobile
    let touchStartY = 0;
    if (cakeStage) {
        cakeStage.ontouchstart = (e) => {
            touchStartY = e.touches[0].clientY;
        };
        cakeStage.ontouchend = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            if (Math.abs(touchEndY - touchStartY) > 30 || Math.abs(touchEndY - touchStartY) < 10) {
                cutCake();
            }
        };
    }
}

window.initCakePage = initCakePage;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCakePage);
} else {
    initCakePage();
}
