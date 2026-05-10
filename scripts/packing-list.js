/* ============================================
   TRAVELOOP — Packing List JavaScript
   Screen 12: Packing Progress & Logic
   ============================================ */

(function () {
  'use strict';

  const items = document.querySelectorAll('.item');
  const fill = document.querySelector('.progress-bar .fill');
  const countText = document.querySelector('.progress-info .count');
  const percentText = document.querySelector('.progress-info .percent');

  // ── Update Progress Utility ──
  function updateProgress() {
    const total = items.length;
    const checked = document.querySelectorAll('.item.checked').length;
    const percentage = Math.round((checked / total) * 100);

    if (fill) fill.style.width = `${percentage}%`;
    if (countText) countText.textContent = `${checked}/${total} items packed`;
    if (percentText) percentText.textContent = `${percentage}%`;
  }

  // ── Item Click Interaction ──
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      
      // Update the "checkbox" visual if needed (handled by CSS, but good to trigger logic)
      updateProgress();
      
      // Animation pop
      item.style.transform = 'scale(1.02) translateX(4px)';
      setTimeout(() => {
        item.style.transform = 'translateX(4px)';
      }, 200);
    });
  });

  // ── Filter Buttons ──
  const filterBtns = document.querySelectorAll('.cat-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.textContent.toLowerCase();
      const sections = document.querySelectorAll('.list-section');
      
      sections.forEach(section => {
        const title = section.querySelector('h3').textContent.toLowerCase();
        if (filter === 'all essentials' || title.includes(filter)) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });

  // ── Initial Progress Calculation ──
  updateProgress();

})();
