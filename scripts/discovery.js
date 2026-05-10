/* ============================================
   TRAVELOOP — Discovery JavaScript
   Screen 4: Explore Functionality
   ============================================ */

(function () {
  'use strict';

  // ── Category Filter Logic ──
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      // Mock filtering effect
      const grid = document.querySelector('.dest-grid');
      if (grid) {
        grid.style.opacity = '0.5';
        setTimeout(() => {
          grid.style.opacity = '1';
        }, 300);
      }
    });
  });

  // ── Wishlist Toggle ──
  const heartBtns = document.querySelectorAll('.wishlist-btn');
  heartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const svg = btn.querySelector('svg');
      const isLiked = btn.classList.toggle('liked');
      
      if (isLiked) {
        svg.style.fill = 'var(--rose-500)';
        svg.style.stroke = 'var(--rose-500)';
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => btn.style.transform = 'scale(1)', 200);
      } else {
        svg.style.fill = 'none';
        svg.style.stroke = 'currentColor';
      }
    });
  });

  // ── Search Interaction ──
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        alert(`Searching for: ${searchInput.value}...`);
      }
    });
  }

})();
