/* ============================================
   TRAVELOOP — Login Screen JavaScript
   Screen 1: Authentication interactions
   ============================================ */

(function () {
  'use strict';

  /* ── Password Toggle ── */
  const pwToggle  = document.getElementById('pw-toggle-btn');
  const pwInput   = document.getElementById('password-input');
  const eyeOpen   = document.getElementById('eye-open');
  const eyeClosed = document.getElementById('eye-closed');

  if (pwToggle && pwInput) {
    pwToggle.addEventListener('click', () => {
      const isHidden = pwInput.type === 'password';
      pwInput.type = isHidden ? 'text' : 'password';
      eyeOpen.style.display   = isHidden ? 'none'  : '';
      eyeClosed.style.display = isHidden ? ''      : 'none';
    });
  }

  /* ── Form Validation & Submit ── */
  const loginForm  = document.getElementById('login-form');
  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');
  const pwError    = document.getElementById('pw-error');
  const signinBtn  = document.getElementById('signin-btn');

  function validateEmail(value) {
    if (!value) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
    return '';
  }

  function validatePassword(value) {
    if (!value) return 'Password is required.';
    if (value.length < 6) return 'Password must be at least 6 characters.';
    return '';
  }

  function setError(input, errorEl, message) {
    if (message) {
      input.classList.add('has-error');
      errorEl.textContent = message;
    } else {
      input.classList.remove('has-error');
      errorEl.textContent = '';
    }
    return !message;
  }

  if (loginForm) {
    /* Live validation on blur */
    emailInput.addEventListener('blur', () => {
      setError(emailInput, emailError, validateEmail(emailInput.value.trim()));
    });

    pwInput.addEventListener('blur', () => {
      setError(pwInput, pwError, validatePassword(pwInput.value));
    });

    /* Submit handler */
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const emailOk = setError(emailInput, emailError, validateEmail(emailInput.value.trim()));
      const pwOk    = setError(pwInput, pwError, validatePassword(pwInput.value));

      if (!emailOk || !pwOk) return;

      /* Simulate async sign-in */
      signinBtn.classList.add('btn--loading');
      signinBtn.disabled = true;

      await new Promise(r => setTimeout(r, 1400));

      /* On success → navigate to dashboard */
      window.location.href = 'dashboard.html';
    });
  }

  /* ── Social button placeholders ── */
  document.getElementById('google-signin-btn')?.addEventListener('click', () => {
    showToast('Google auth coming soon ✦');
  });

  document.getElementById('apple-signin-btn')?.addEventListener('click', () => {
    showToast('Apple auth coming soon ✦');
  });

  /* ── Minimal Toast Utility ── */
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
