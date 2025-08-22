# Client Management System

A full-stack web application for managing clients with features like adding new clients, sorting, and filtering.

## Features

- View all clients in a sortable table
- Add new clients with validation
- Sort clients by different fields
- Responsive design for all screen sizes

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Hook Form
- **Backend**: Node.js, Express.js
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```s

## Project Structure

```
CreateExp/
├── backend/
│   ├── src/
│   │   ├── controller/     # Request handlers
│   │   ├── data/          # Data storage
│   │   ├── middleware/    # Custom middleware
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utility functions
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/           # Static files
    └── src/
        ├── components/   # Reusable components
        ├── context/      # React context providers
        ├── services/     # API service calls
        ├── App.js        # Main application component
        └── index.js      # Application entry point
```
