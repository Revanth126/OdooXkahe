/* ============================================
   TRAVELOOP — Notes JavaScript
   Screen 11: Note Interactivity
   ============================================ */

(function () {
  'use strict';

  // ── Filter Interaction ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.textContent.toLowerCase();
      const cards = document.querySelectorAll('.note-card');
      
      cards.forEach(card => {
        const tag = card.querySelector('.tag').textContent.toLowerCase();
        if (filter === 'all notes' || tag.includes(filter.slice(0, -1))) { // Simple plural match
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── Checklist Toggling ──
  const listItems = document.querySelectorAll('.checklist li');
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
    });
  });

  // ── New Note Mock ──
  const newNoteBtn = document.querySelector('.btn--primary');
  if (newNoteBtn) {
    newNoteBtn.addEventListener('click', () => {
      alert("Pinning a new thought to your vision board... ✦");
    });
  }

})();
