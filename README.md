# Password Manager Application

A modern, secure password manager built with React and Vite. This application allows users to securely store, organize, and manage their passwords across different websites and services.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Components](#components)
- [Available Scripts](#available-scripts)
- [Development Guide](#development-guide)

## 🎯 Overview

The Password Manager Application is a web-based solution for managing passwords securely. Users can add, search, organize, and manage passwords categorized by website or service. The application features a clean, modern UI with a dark theme and provides an intuitive interface for password management.

## ✨ Features

- **Add Passwords**: Store passwords with associated website URLs, usernames, and custom categories
- **Search Functionality**: Search passwords by username or website URL in real-time
- **Categorization**: Organize passwords into custom categories
- **Color Coding**: Assign colors to different categories for better visual organization
- **View/Hide Passwords**: Toggle password visibility with a secure toggle button
- **Password Validation**:
  - Minimum password length requirement (6 characters)
  - URL validation for website entries
  - Form validation before submission
- **Sorting**: Sort passwords by creation date or other criteria
- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop
- **Modern UI**: Dark theme with gradient backgrounds and smooth transitions

## 🛠️ Technology Stack

### Core Technologies

- **React** (v19.2.0) - Frontend UI library
- **Vite** (v7.2.2) - Fast build tool and dev server
- **Tailwind CSS** (v4.1.17) - Utility-first CSS framework

### Development Tools

- **Vite React Plugin** - Fast Refresh support
- **ESLint** - Code quality and linting
- **Node.js** - JavaScript runtime

### Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "tailwindcss": "^4.1.17",
  "@tailwindcss/vite": "^4.1.17"
}
```

## 📁 Project Structure

```
lws-project-2-batch-4/
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   └── Card.jsx              # Password card display component
│   │   ├── common/
│   │   │   └── InputField.jsx        # Reusable input field component
│   │   ├── Form/
│   │   │   ├── Form.jsx              # Main form for adding passwords
│   │   │   ├── Category.jsx          # Category selection component
│   │   │   ├── ColorPicker.jsx       # Color selection component
│   │   │   └── WebSiteUrlInput.jsx   # URL input validation component
│   │   ├── Header/
│   │   │   └── Header.jsx            # Application header
│   │   ├── Footer/
│   │   │   └── Footer.jsx            # Application footer
│   │   └── Search/
│   │       └── Search.jsx            # Search functionality component
│   │   └── Sort/
│   │       └── Sort.jsx              # Sorting functionality component
│   ├── utils/
│   │   └── index.js                  # Utility functions
│   ├── App.jsx                       # Main app component
│   ├── App.css                       # App-specific styles
│   ├── main.jsx                      # Application entry point
│   └── index.css                     # Global styles
├── public/                           # Static assets
├── package.json                      # Project dependencies
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint configuration
└── README.md                         # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd lws-project-2-batch-4
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 💻 Usage

### Adding a Password

1. Fill in all form fields:

   - **Website URL**: Enter the full URL of the website
   - **Username**: Enter your username or email
   - **Password**: Enter your password (minimum 6 characters)
   - **Category**: Select or create a category
   - **Color**: Choose a color for visual organization

2. Click the "Add" button to save the password

### Searching Passwords

- Use the search bar to filter passwords by username or website URL
- Search is case-insensitive and works in real-time

### Managing Passwords

- **View Password**: Click the eye icon to toggle password visibility
- **Delete Password**: Click the trash/delete icon to remove a password entry
- **Sort**: Use the sort options to organize your password list

### Categories & Colors

- Assign meaningful categories (e.g., "Social Media", "Banking", "Work")
- Use color coding to quickly identify different types of accounts

## 🧩 Components

### Form Component (`Form.jsx`)

Handles password entry with validation:

- Validates URL format using `isValidUrl()` utility
- Checks password length (minimum 6 characters)
- Stores form data in state before submission
- Manages form reset after successful submission

**Props:**

- `items`: Array of stored passwords
- `setItems`: Function to update password list

### Card Component (`Card.jsx`)

Displays individual password entries:

- Shows website domain name (first 2 letters as icon)
- Category badge
- Username and password fields
- Toggle button to show/hide password
- Delete button to remove entry
- Hover effects for better UX

**Props:**

- `item`: Password entry object

### Search Component (`Search.jsx`)

Real-time search functionality:

- Searches across username and URL fields
- Case-insensitive search
- Updates results as user types

### Sort Component (`Sort.jsx`)

Sorting options for password list:

- Sort by creation date (newest/oldest)
- Sort alphabetically

### Header Component (`Header.jsx`)

Application header with branding and navigation

### Footer Component (`Footer.jsx`)

Application footer with copyright information

## 📝 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server with HMR    |
| `npm run build`   | Build for production                 |
| `npm run lint`    | Run ESLint to check code quality     |
| `npm run preview` | Preview the production build locally |

## 🔧 Development Guide

### Adding New Features

1. **Create new components** in the appropriate subdirectory under `src/components/`
2. **Use utility functions** from `src/utils/index.js` for common operations
3. **Follow component naming conventions**: PascalCase for component names
4. **Style with Tailwind CSS**: Avoid custom CSS when possible

### Utility Functions

Key utilities available in `src/utils/index.js`:

- `isValidUrl()` - Validates URL format
- `getDomainName()` - Extracts domain name from URL

### State Management

Currently uses React `useState` hook for local state management. For larger applications, consider implementing:

- Context API for global state
- Redux or Zustand for complex state management
- LocalStorage for persistence

### Code Quality

- Run `npm run lint` before committing code
- Follow ESLint rules defined in `eslint.config.js`
- Use meaningful variable and function names
- Add comments for complex logic

## 🎨 Styling

The application uses **Tailwind CSS** for styling:

- Dark theme with neutral color palette
- Gradient backgrounds
- Responsive grid layout
- Smooth transitions and hover effects
- Custom spacing and typography

### Color Scheme

- Background: Neutral-900 (dark)
- Borders: Neutral-800
- Text: Neutral-50 (light)
- Accents: Blue-500

## 🔐 Security Considerations

> **Note**: This is a demonstration project. For production use with actual sensitive data, consider:

- Implementing end-to-end encryption
- Adding authentication/authorization
- Using secure storage (encrypted database)
- Adding session management
- Implementing password strength meters
- Adding backup and recovery mechanisms

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Grid layout adjusts:

- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

## 🐛 Troubleshooting

### Development server not starting

```bash
npm install
npm run dev
```

### Build errors

```bash
npm run lint  # Check for linting errors
npm run build  # Rebuild
```

### Module not found errors

- Ensure all dependencies are installed: `npm install`
- Check import paths are correct
- Verify component exists in the correct directory

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📄 License

This project is part of the Learn With Sumit educational series.

## 👨‍💻 Author

Created as part of LWS Project 2 - Batch 4

---

**Last Updated**: November 16, 2025
