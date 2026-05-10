/* ============================================
   TRAVELOOP — Itinerary JavaScript
   Screen 8: Itinerary Interactivity
   ============================================ */

(function () {
  'use strict';

  // ── Day Navigation ──
  const dayItems = document.querySelectorAll('.day-item');
  const timelineHeader = document.querySelector('.timeline-header h2');

  dayItems.forEach(item => {
    item.addEventListener('click', () => {
      // Update UI
      dayItems.forEach(d => d.classList.remove('active'));
      item.classList.add('active');
      
      const dayName = item.querySelector('.day-name').textContent;
      const dayDate = item.querySelector('.day-date').textContent;
      
      // Mock content change
      if (timelineHeader) {
        timelineHeader.innerHTML = `${dayName}: <em>Exploring More</em>`;
      }
      
      // Animation
      const timelineList = document.querySelector('.timeline-list');
      if (timelineList) {
        timelineList.style.opacity = '0.5';
        timelineList.style.transform = 'translateY(10px)';
        setTimeout(() => {
          timelineList.style.opacity = '1';
          timelineList.style.transform = 'translateY(0)';
        }, 300);
      }
    });
  });

  // ── Add Activity Mock ──
  const addBtn = document.querySelector('.add-activity-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      alert("Opening activity search to add to this day... ✦");
      window.location.href = 'activities.html';
    });
  }

})();
