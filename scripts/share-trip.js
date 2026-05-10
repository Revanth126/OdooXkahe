/* ============================================
   TRAVELOOP — Share Trip JavaScript
   Screen 14: Sharing & Collaborators
   ============================================ */

(function () {
  'use strict';

  // ── Copy Link Logic ──
  const copyBtn = document.querySelector('.copy-btn');
  const linkInput = document.querySelector('.link-input input');

  if (copyBtn && linkInput) {
    copyBtn.addEventListener('click', () => {
      linkInput.select();
      document.execCommand('copy');
      
      const originalIcon = copyBtn.innerHTML;
      copyBtn.innerHTML = '✓';
      copyBtn.style.color = 'var(--sage-500)';
      
      setTimeout(() => {
        copyBtn.innerHTML = originalIcon;
        copyBtn.style.color = 'var(--ink-400)';
      }, 2000);
    });
  }

  // ── Invite Simulation ──
  const inviteBtn = document.querySelector('.btn--primary');
  const emailInput = document.querySelector('.invite-form input');

  if (inviteBtn) {
    inviteBtn.addEventListener('click', () => {
      const email = emailInput.value;
      if (!email || !email.includes('@')) {
        alert("Please enter a valid traveler's email. ✦");
        return;
      }

      inviteBtn.textContent = 'Sending...';
      inviteBtn.disabled = true;

      setTimeout(() => {
        alert(`Invitation sent to ${email}! ✦`);
        emailInput.value = '';
        inviteBtn.textContent = 'Send Invite';
        inviteBtn.disabled = false;
      }, 1500);
    });
  }

  // ── Remove Collaborator ──
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm("Remove this collaborator from the trip?")) {
        btn.closest('.collab-item').style.opacity = '0';
        setTimeout(() => {
          btn.closest('.collab-item').remove();
        }, 300);
      }
    });
  });

})();
