/* ============================================
   TRAVELOOP — My Trips JavaScript
   Screen 7: Dashboard Interactivity
   ============================================ */

(function () {
  'use strict';

  // ── Tab Navigation Logic ──
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.trip-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update UI
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const filter = tab.textContent.toLowerCase();
      
      // Filter logic (MOCK)
      cards.forEach(card => {
        const badge = card.querySelector('.status-badge');
        const status = badge.textContent.toLowerCase();
        
        if (filter === 'all trips') {
          card.style.display = 'flex';
        } else if (status === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      
      // Animation
      const grid = document.querySelector('.trips-grid');
      grid.style.opacity = '0';
      setTimeout(() => grid.style.opacity = '1', 100);
    });
  });

  // ── Search Interaction ──
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

})();
