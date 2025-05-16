# ElectroRent - Premium Electronics Rental Platform

ElectroRent is a modern web application that allows users to rent high-quality electronics. The platform requires users to authenticate before accessing detailed product information or making rentals.

## Features

- User authentication with Firebase
- Product browsing and filtering
- Detailed product information (available after login)
- Shopping cart functionality
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ElectroRent.git
cd ElectroRent
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Adding This Project to GitHub

1. Create a new repository on GitHub
   - Go to [GitHub](https://github.com)
   - Click the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., "ElectroRent")
   - Choose public or private visibility
   - Do not initialize with README, .gitignore, or license (as we already have files)
   - Click "Create repository"

2. Initialize Git in your local project (if not already initialized)
```bash
git init
```

3. Add all files to Git
```bash
git add .
```

4. Commit your changes
```bash
git commit -m "Initial commit"
```

5. Add the GitHub repository as a remote
```bash
git remote add origin https://github.com/KurraSaiKiran/ElectroRent.git
```

6. Push your code to GitHub
```bash
git push -u origin main
# or if your default branch is "master"
git push -u origin master
```

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Firebase (Authentication, Firestore)
- Vite

## Project Structure

- `/src` - Main source code
  - `/components` - Reusable UI components
  - `/context` - React Context providers
  - `/data` - Mock data and models
  - `/firebase` - Firebase configuration
  - `/pages` - Application pages
  - `/types` - TypeScript type definitions

## Authentication

The application requires users to sign in before they can:
- View detailed product information
- Add items to cart or wishlist
- Complete the checkout process

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Created By

This project was created by Saikiran, Founder & CEO of ElectroRent.
