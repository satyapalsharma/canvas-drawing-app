# Canvas Drawing App

A simple, interactive web-based paint application built using HTML5 Canvas, allowing users to draw freehand with various colors and brush sizes.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **Freehand Drawing**: Draw directly on the canvas using your mouse.
- **Color Selection**: Choose from a predefined set of colors for your brush.
- **Brush Size Adjustment**: Easily change the thickness of your brush strokes.
- **Clear Canvas**: Reset the drawing area to a blank state.
- **Responsive Design**: Basic responsiveness to ensure usability across different screen sizes.

## Tech Stack

- **HTML5**: For structuring the web page and embedding the canvas element.
- **CSS3**: For styling the application's layout, controls, and overall aesthetics.
- **JavaScript (Canvas API)**: The core logic for handling drawing operations, user interactions, and canvas manipulation.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You only need a modern web browser (e.g., Chrome, Firefox, Edge, Safari) to run this application. No server-side setup is required.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/canvas-drawing-app.git
    ```
    (Replace `your-username` with your actual GitHub username or the repository owner's username)

2.  **Navigate to the project directory:**
    ```bash
    cd canvas-drawing-app
    ```

3.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser. You can usually do this by double-clicking the file or by dragging it into an open browser window.

    ```bash
    # Example for Linux/macOS
    open index.html

    # Example for Windows
    start index.html
    ```

## Usage

1.  **Select a Color**: Click on one of the color swatches in the control panel to choose your desired brush color.
2.  **Adjust Brush Size**: Use the brush size slider to increase or decrease the thickness of your drawing line.
3.  **Draw**: Click and drag your mouse over the canvas area to start drawing.
4.  **Clear Canvas**: Click the "Clear Canvas" button to erase all drawings and start fresh.

## File Structure

```
canvas-drawing-app/
├── README.md
├── .gitignore
├── package.json
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

-   `README.md`: This file, providing an overview of the project.
-   `.gitignore`: Specifies intentionally untracked files to ignore.
-   `package.json`: (Optional) Can be used for managing development dependencies or scripts, even if minimal for a pure frontend project.
-   `index.html`: The main HTML file that structures the application, including the canvas and control elements.
-   `css/style.css`: Contains all the CSS rules for styling the application.
-   `js/app.js`: Contains the JavaScript logic for canvas drawing, event handling, and UI interactions.

## Future Enhancements

-   **Undo/Redo Functionality**: Implement a history stack to allow users to undo and redo actions.
-   **More Drawing Tools**: Add tools for drawing lines, rectangles, circles, etc.
-   **Save/Load Drawings**: Allow users to save their drawings as images (e.g., PNG) or load existing ones.
-   **Color Picker**: Integrate a full-fledged color picker for more precise color selection.
-   **Image Import**: Ability to import images onto the canvas to draw over them.
-   **Text Tool**: Add a tool to place text on the canvas.
-   **Layers**: Implement basic layer functionality for more complex drawings.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (Note: A `LICENSE.md` file would need to be created separately).