/* ============================================
   TRAVELOOP — Budget JavaScript
   Screen 9: Finance Analytics & Charts
   ============================================ */

(function () {
  'use strict';

  // ── Chart Colors ──
  const colors = {
    sage:  '#96a793',
    blush: '#e8d5d1',
    cream: '#f4f1ea',
    sky:   '#cbd5e0',
    ink:   '#2c2c2c'
  };

  // ── Initialize Charts ──
  window.addEventListener('load', () => {
    initCategoryChart();
    initTrendChart();
  });

  function initCategoryChart() {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Accommodation', 'Transport', 'Dining', 'Activities'],
        datasets: [{
          data: [1200, 820, 640, 400],
          backgroundColor: [colors.sage, colors.sky, colors.blush, colors.cream],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              font: { family: 'DM Sans', size: 10 }
            }
          }
        }
      }
    });
  }

  function initTrendChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['May 1', 'May 3', 'May 5', 'May 7', 'May 9', 'May 11'],
        datasets: [{
          label: 'Daily Spending',
          data: [120, 450, 240, 100, 820, 310],
          borderColor: colors.sage,
          backgroundColor: 'rgba(150, 167, 147, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#fff',
          pointBorderColor: colors.sage,
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { display: false },
            ticks: { font: { family: 'DM Sans', size: 10 } }
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: 'DM Sans', size: 10 } }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // ── Mock Interaction ──
  const selector = document.querySelector('.trip-selector');
  if (selector) {
    selector.addEventListener('change', () => {
      // Mock loading state
      const summary = document.querySelector('.budget-summary');
      summary.style.opacity = '0.5';
      setTimeout(() => summary.style.opacity = '1', 400);
    });
  }

})();
