(function() {
    "use strict"; // Enforce strict mode for cleaner code

    // --- DOM Elements ---
    // Get references to the canvas and its 2D rendering context
    const canvas = document.getElementById('drawingCanvas');
    // Check if canvas element exists before proceeding
    if (!canvas) {
        console.error('Error: Canvas element with ID "drawingCanvas" not found. Please ensure index.html contains <canvas id="drawingCanvas">.');
        return; // Stop execution if canvas is missing
    }
    const ctx = canvas.getContext('2d');
    // Check if 2D context is available
    if (!ctx) {
        console.error('Error: Could not get 2D rendering context