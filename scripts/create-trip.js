/* ============================================
   TRAVELOOP — Create Trip JavaScript
   Screen 3: Planner Interactivity
   ============================================ */

(function () {
  'use strict';

  // ── Vibe Selection ──
  const vibeItems = document.querySelectorAll('.vibe-item');
  const heroImage = document.querySelector('.hero-image');

  const vibeImages = {
    coastal: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
    alpine: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    urban: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80',
    desert: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80'
  };

  vibeItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all
      vibeItems.forEach(v => v.classList.remove('active'));
      // Add to clicked
      item.classList.add('active');
      
      // Update hero image
      const vibe = item.getAttribute('data-vibe');
      if (heroImage && vibeImages[vibe]) {
        heroImage.style.opacity = '0.5';
        setTimeout(() => {
          heroImage.src = vibeImages[vibe];
          heroImage.style.opacity = '1';
        }, 200);
      }
    });
  });

  // ── Form Submission ──
  const saveBtn = document.getElementById('save-trip-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      
      saveBtn.textContent = 'Crafting...';
      saveBtn.disabled = true;

      // Simulate creation
      await new Promise(r => setTimeout(r, 2000));
      
      // Redirect to next screen (Screen 4: Discovery)
      window.location.href = 'discovery.html';
    });
  }

  // ── Add Collaborator Mock ──
  const addBtn = document.getElementById('add-collaborator');
  const stack = document.getElementById('collaborator-stack');
  
  if (addBtn && stack) {
    addBtn.addEventListener('click', () => {
      const email = prompt("Enter travel companion's email:");
      if (email && email.includes('@')) {
        const initial = email.charAt(0).toUpperCase();
        const newAvatar = document.createElement('div');
        newAvatar.className = 'avatar-circle';
        newAvatar.style.background = 'var(--blush-200)';
        newAvatar.style.color = 'var(--rose-500)';
        newAvatar.style.marginLeft = '-12px';
        newAvatar.textContent = initial;
        stack.insertBefore(newAvatar, addBtn);
      }
    });
  }

})();
