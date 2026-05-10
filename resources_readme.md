# Project Resources & Assets

This directory contains essential resources, mock datasets, and generated assets to kickstart the Travel Booking Platform.

## 📂 Directory Structure

*   `mock_data/` - Contains JSON files representing the database structures.
    *   `destinations.json`: Array of popular travel destinations.
    *   `trips.json`: Detailed trip itineraries and pricing tied to destinations.
    *   `users.json`: Sample user profiles for both 'user' and 'admin' roles.
    *   `reviews.json`: Mock reviews for the trips.
*   `assets/` - Contains styles and potentially media.
    *   `animations.css`: Pre-built CSS keyframes and utility classes to ensure a premium, dynamic feel (fade-ins, subtle zooms, hover effects).

## 🖼️ Generated Images (Artifacts)
I have generated high-quality, cinematic sample images using AI to use as placeholders in the UI. They are stored in the artifact storage, and you can reference them or copy them into your `public/images` folder once the framework is set up:
1.  **Hero Banner:** A stunning tropical beach scene.
2.  **Santorini Destination:** Premium shot of the classic Greek white buildings.
3.  **Swiss Alps Trip:** Cinematic shot of hikers in the mountains.

## 💡 How to Use
1.  **Mock Data:** In your frontend application, you can directly import these JSON files (e.g., `import trips from '../mock_data/trips.json'`) to populate your UI components (Cards, Details pages) before the backend API is ready.
2.  **Animations:** Import the `animations.css` file into your main CSS file (`index.css` or `App.css`) and apply the classes like `.animate-fade-in-up` to your trip cards, or `.card-hover` to interactive elements.
