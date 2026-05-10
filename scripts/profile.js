/* ============================================
   TRAVELOOP — Profile JavaScript
   Screen 5: Profile Interactivity
   ============================================ */

(function () {
  'use strict';

  // ── Tab Switching Logic ──
  const tabs = document.querySelectorAll('.tab-item');
  const content = document.querySelector('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active to clicked tab
      tab.classList.add('active');
      
      // Mock content switch effect
      if (content) {
        content.style.opacity = '0';
        setTimeout(() => {
          // In a real app, you'd load the specific content here
          content.style.opacity = '1';
        }, 300);
      }
    });
  });

  // ── Social Mock Interaction ──
  const followBtn = document.querySelector('.btn--primary');
  if (followBtn && followBtn.textContent === 'Follow') {
    followBtn.addEventListener('click', () => {
      if (followBtn.textContent === 'Follow') {
        followBtn.textContent = 'Following';
        followBtn.style.background = 'var(--sage-500)';
      } else {
        followBtn.textContent = 'Follow';
        followBtn.style.background = 'var(--ink-900)';
      }
    });
  }

})();
