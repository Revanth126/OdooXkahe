function renderDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container) return;

    destinationsData.forEach((dest, index) => {
        const delay = 0.1 * index;
        const tagsHtml = dest.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        const html = `
            <div class="card card-hover animate-fade-in-up" style="animation-delay: ${delay}s;">
                <div class="card-img-container">
                    <img src="${dest.imageUrl}" alt="${dest.name}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'">
                </div>
                <div class="card-content">
                    <div class="card-tags">${tagsHtml}</div>
                    <h3 class="card-title">${dest.name}</h3>
                    <div class="card-footer">
                        <span class="rating">★ ${dest.rating}</span>
                        <a href="explore.html" style="color: var(--primary); font-weight: 700;">Explore</a>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function renderRecentTrips() {
    const container = document.getElementById('recent-trips-container');
    if (!container) return;

    myTripsData.forEach((trip, index) => {
        const delay = 0.1 * index;
        
        const html = `
            <div class="card card-hover animate-fade-in-up" style="animation-delay: ${delay}s;">
                <div class="card-img-container">
                    <img src="${trip.imageUrl}" alt="${trip.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'">
                </div>
                <div class="card-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <span class="tag" style="background-color: rgba(16, 185, 129, 0.1); color: var(--success);">${trip.status}</span>
                        <span style="color: var(--text-muted); font-size: 0.875rem;">${trip.durationDays} Days</span>
                    </div>
                    <h3 class="card-title">${trip.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem;">${trip.dates}</p>
                    <div class="card-footer">
                        <span class="price">Budget: $${trip.budget}</span>
                        <a href="itinerary-view.html" class="btn-secondary" style="font-size: 0.875rem;">View Plan</a>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function renderAllTrips() {
    const container = document.getElementById('all-trips-container');
    if (!container) return;

    // Adding a dummy 'Past' trip just for this grid to show variety
    const extendedTripsData = [
        ...myTripsData,
        {
            "id": "t3",
            "title": "Weekend in Tokyo",
            "budget": 2100.00,
            "durationDays": 4,
            "dates": "Mar 10 - Mar 14, 2025",
            "imageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
            "status": "Past",
            "stops": 1
        }
    ];

    extendedTripsData.forEach((trip, index) => {
        const delay = 0.1 * index;
        const stopsCount = trip.stops || 2; // default to 2 stops if undefined
        
        // Dynamic status color
        let statusColor = "var(--success)";
        let statusBg = "rgba(16, 185, 129, 0.1)"; // Emerald
        if (trip.status === "Past") {
            statusColor = "var(--text-muted)";
            statusBg = "var(--border-color)";
        } else if (trip.status === "Draft") {
            statusColor = "var(--warning)";
            statusBg = "rgba(245, 158, 11, 0.1)"; // Amber
        }

        const html = `
            <div class="card card-hover animate-fade-in-up" style="animation-delay: ${delay}s; width: 100%;">
                <div class="card-img-container">
                    <img src="${trip.imageUrl}" alt="${trip.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'">
                </div>
                <div class="card-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <span class="tag" style="background-color: ${statusBg}; color: ${statusColor};">${trip.status}</span>
                        <span style="color: var(--text-muted); font-size: 0.875rem;">${trip.durationDays} Days</span>
                    </div>
                    
                    <h3 class="card-title" style="margin-bottom: 0.25rem;">${trip.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem;">${trip.dates}</p>
                    
                    <div class="stop-count">
                        📍 ${stopsCount} Stops
                    </div>

                    <div class="card-footer" style="padding-top: 0.5rem; margin-top: 0.5rem;">
                        <div class="card-actions" style="width: 100%;">
                            <a href="itinerary-builder.html?id=${trip.id}" class="btn-secondary" style="text-decoration: none;">View Itinerary</a>
                            <button class="btn-icon" title="Delete Trip">🗑</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderRecentTrips();
    renderAllTrips(); // Note: This function renders my-trips page layout too
});
