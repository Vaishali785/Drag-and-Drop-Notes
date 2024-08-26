# Drag-and-Drop-Notes

## Overview

This project is a React-based application that offers a custom rich text editor for note-taking, integrated with a custom drag-and-drop functionality for managing and organizing notes. The application supports basic CRUD operations, tag management, and search functionality. It is designed to be responsive, providing an optimal experience across different devices.

## Features

### 1. Rich Text Editor

- **Implementation**: A custom rich text editor built to allow users to format their notes. Formatting options include bold, italic, underline, and bullet points.
- **Tagging**: Supports inline tagging (e.g., `#important`, `#todo`) within the text. Tags are visually distinct to enhance note categorization.
- **Text Formatting**: Users can select and format text. Formatting is preserved even after saving and reopening notes.

### 2. Custom Drag-and-Drop Functionality

- **Manual Drag-and-Drop**: A custom implementation for dragging and dropping notes to reorder them. This does not rely on third-party libraries such as `react-dnd` or `react-beautiful-dnd`.
- **Reordering**: Changes in note order are reflected in the UI and persisted between sessions.

### 3. Note Management

- **CRUD Operations**: Users can add new notes, edit existing ones, and delete notes.
- **Persistence**: Notes are stored using browser local storage or session storage, ensuring data is retained across sessions.

### 4. Responsive Design

- **Cross-Device Compatibility**: The application is fully responsive, ensuring a seamless experience on mobile devices, tablets, and desktops.

### 5. Code Quality

- **Component Modularity**: The application is structured using modular, reusable components for better maintainability and scalability.
- **Best Practices**: Adheres to best practices in React/Next.js, including clean code, proper state management, and effective use of hooks.

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vaishali785/Drag-and-Drop-Notes.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## Key Design Decisions

- **Custom Rich Text Editor**: A custom editor was chosen over third-party solutions to allow greater flexibility in handling text formatting and inline tagging.
- **Manual Drag-and-Drop**: Implementing custom drag-and-drop functionality provided better control over note reordering and interaction, avoiding reliance on external libraries.
- **Local Storage for Persistence**: Using local storage ensures that user data is saved even if the application is closed or refreshed, without requiring backend integration.

## Future Improvements

- **Search Functionality**: Implement a search feature to allow users to quickly find notes based on their content or tags. This will improve the user experience by making it easier to locate specific information.
- **Categorization**: Add the ability for users to categorize notes and filter views based on categories. This feature would help in organizing notes more effectively, especially when dealing with a large number of notes.
- **TypeScript Integration**: The current project is built using JavaScript. Converting the project to TypeScript could provide better type safety, catch potential errors during development, and improve code maintainability and performance.
- **User Authentication**: Introduce user authentication features to secure access to notes and allow users to manage their notes across different devices.
- **Advanced Tagging and Filtering**: Enhance the tagging system to support more complex tagging options, such as nested tags or tag hierarchies, which could provide better organization and categorization of notes.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.
