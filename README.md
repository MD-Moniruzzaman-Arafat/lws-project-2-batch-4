# Password Manager Application

A modern, secure password manager built with React and Vite. This application allows users to securely store, organize, and manage their passwords across different websites and services.

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
- **Sort**: Use the sort options to organize your password list

### Categories & Colors

- Assign meaningful categories (e.g., "Social Media", "Banking", "Work")
- Use color coding to quickly identify different types of accounts
