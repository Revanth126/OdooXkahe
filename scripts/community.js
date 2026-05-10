/* ============================================
   TRAVELOOP — Community JavaScript
   Screen 10: Social Interactions
   ============================================ */

(function () {
  'use strict';

  // ── Like Interaction ──
  const cards = document.querySelectorAll('.story-card');
  cards.forEach(card => {
    const stats = card.querySelector('.stats');
    if (stats) {
      stats.style.cursor = 'pointer';
      stats.addEventListener('click', (e) => {
        e.stopPropagation();
        const isLiked = stats.classList.toggle('liked');
        let count = parseInt(stats.textContent.replace('❤ ', ''));
        
        if (isLiked) {
          stats.textContent = `❤ ${count + 1}`;
          stats.style.color = 'var(--rose-500)';
          stats.style.fontWeight = '700';
        } else {
          stats.textContent = `❤ ${count - 1}`;
          stats.style.color = 'var(--ink-300)';
          stats.style.fontWeight = '400';
        }
      });
    }
  });

  // ── Search Mock ──
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const storyCards = document.querySelectorAll('.story-card');
      
      storyCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        if (title.includes(term)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // ── Share Story Action ──
  const shareBtn = document.querySelector('.btn--primary');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      alert("Craft your story... ✦ \nOpening the editor.");
    });
  }

})();
