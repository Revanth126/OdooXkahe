/* ============================================
   TRAVELOOP — Settings JavaScript
   Screen 13: Settings Interactivity
   ============================================ */

(function () {
  'use strict';

  // ── Toggle Switch Interaction ──
  const toggles = document.querySelectorAll('.toggle-switch');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  });

  // ── Sub-Nav Interaction ──
  const navItems = document.querySelectorAll('.set-nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      // Mock content change effect
      const content = document.querySelector('.settings-content');
      content.style.opacity = '0.5';
      setTimeout(() => content.style.opacity = '1', 300);
    });
  });

  // ── Save Button Interaction ──
  const saveBtn = document.querySelector('.btn--primary');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      saveBtn.textContent = 'Saving...';
      saveBtn.disabled = true;
      
      setTimeout(() => {
        saveBtn.textContent = 'Preferences Saved ✦';
        saveBtn.style.background = 'var(--sage-500)';
        
        setTimeout(() => {
          saveBtn.textContent = 'Save Preferences';
          saveBtn.style.background = 'var(--ink-900)';
          saveBtn.disabled = false;
        }, 2000);
      }, 1000);
    });
  }

})();
