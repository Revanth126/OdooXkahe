/* ============================================
   TRAVELOOP — Activity JavaScript
   Screen 6: Activity Interactivity
   ============================================ */

(function () {
  'use strict';

  // ── Filter Pill Logic ──
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      // Mock filtering
      const list = document.querySelector('.activity-list');
      if (list) {
        list.style.opacity = '0.5';
        setTimeout(() => {
          list.style.opacity = '1';
        }, 300);
      }
    });
  });

  // ── "Add to Trip" Interaction ──
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('added')) {
        // Remove from trip
        btn.classList.remove('added');
        btn.textContent = 'Add to Trip';
        btn.style.background = 'var(--ink-900)';
      } else {
        // Add to trip
        btn.classList.add('added');
        btn.textContent = '✓ Added';
        btn.style.background = 'var(--sage-500)';
        
        // Show a small toast notification
        showToast('Activity added to your Amalfi itinerary ✦');
      }
    });
  });

  // ── Toast Utility (Consistent with Login) ──
  function showToast(message) {
    const existing = document.getElementById('tl-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'tl-toast';
    Object.assign(toast.style, {
      position:     'fixed',
      bottom:       '24px',
      left:         '50%',
      transform:    'translateX(-50%) translateY(10px)',
      background:   'var(--ink-900)',
      color:        '#fff',
      padding:      '12px 24px',
      borderRadius: '100px',
      fontSize:     '14px',
      fontFamily:   'var(--font-body)',
      boxShadow:    'var(--shadow-lg)',
      zIndex:       '9999',
      opacity:      '0',
      transition:   'opacity 0.3s ease, transform 0.3s ease',
      whiteSpace:   'nowrap',
    });
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity   = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity   = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

})();
