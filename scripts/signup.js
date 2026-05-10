/* ============================================
   TRAVELOOP — Signup Screen JavaScript
   Screen 2: Registration Interactions
   ============================================ */

(function () {
  'use strict';

  // ── Multi-step Navigation ──
  const step1 = document.getElementById('step-1-container');
  const step2 = document.getElementById('step-2-container');
  const step3 = document.getElementById('step-3-container');
  const fill = document.getElementById('step-fill');
  const labels = [
    document.getElementById('step-label-1'),
    document.getElementById('step-label-2'),
    document.getElementById('step-label-3')
  ];

  function goToStep(n) {
    [step1, step2, step3].forEach((s, i) => {
      if (i === n - 1) s.classList.remove('hidden');
      else s.classList.add('hidden');
    });

    fill.style.width = (n / 3 * 100) + '%';
    
    labels.forEach((l, i) => {
      if (i < n - 1) {
        l.classList.add('done');
        l.classList.remove('active');
      } else if (i === n - 1) {
        l.classList.add('active');
        l.classList.remove('done');
      } else {
        l.classList.remove('active', 'done');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Step 1 Form ──
  const step1Form = document.getElementById('step-1-form');
  if (step1Form) {
    step1Form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic validation would go here
      goToStep(2);
    });
  }

  // ── Step 2 Form ──
  const step2Form = document.getElementById('step-2-form');
  const backBtn = document.getElementById('step2-back-btn');

  if (backBtn) {
    backBtn.addEventListener('click', () => goToStep(1));
  }

  if (step2Form) {
    step2Form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nextBtn = document.getElementById('step2-next-btn');
      nextBtn.classList.add('btn--loading');
      nextBtn.disabled = true;

      // Simulate API call
      await new Promise(r => setTimeout(r, 1500));
      
      goToStep(3);
    });
  }

  // ── Chips & Cards Selection ──
  document.querySelectorAll('.chip, .dest-card').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('selected');
    });
  });

  // ── Password Toggle ──
  const pwToggle = document.getElementById('su-pw-toggle');
  const pwInput = document.getElementById('su-password-input');
  const eyeOpen = document.getElementById('su-eye-open');
  const eyeClosed = document.getElementById('su-eye-closed');

  if (pwToggle && pwInput) {
    pwToggle.addEventListener('click', () => {
      const isHidden = pwInput.type === 'password';
      pwInput.type = isHidden ? 'text' : 'password';
      eyeOpen.style.display = isHidden ? 'none' : '';
      eyeClosed.style.display = isHidden ? '' : 'none';
    });
  }

  // ── Password Strength ──
  if (pwInput) {
    const fillBar = document.getElementById('pw-strength-fill');
    const label = document.getElementById('pw-strength-label');
    
    pwInput.addEventListener('input', () => {
      const val = pwInput.value;
      let score = 0;
      if (val.length > 5) score++;
      if (val.length > 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      const colors = ['#ddd', '#e8807a', '#e8c26a', '#7ab87e', '#5c8f60'];
      const text = ['', 'Weak', 'Fair', 'Good', 'Strong'];
      
      const level = Math.min(score, 4);
      fillBar.style.width = (level * 25) + '%';
      fillBar.style.background = colors[level];
      label.textContent = text[level];
      label.style.color = colors[level];
    });
  }

})();
