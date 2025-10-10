# Shop (React) - README

English README for the Shop React project.

## Overview

This is a small React single-page application for a shop. The app uses React Router for navigation and Redux Toolkit for application state. Styling is handled with SCSS modules. The project was created with Create React App and is configured to be deployable to GitHub Pages.

## Tech stack

- React 18
- React Router v6
- Redux Toolkit
- React Redux
- SCSS (Sass) with CSS Modules
- Axios (for potential HTTP requests)
- Create React App (react-scripts)
- gh-pages (dev dependency for GitHub Pages deploy)

## Project structure

Key files and folders:

- `public/` - static html and manifest files.
- `src/index.js` - application entry, wraps App with Redux Provider and BrowserRouter.
- `src/Conponents/App/` - main App component and styles.
- `src/Shop/` - Shop page components.
- `src/Products/` - Product listing and product card components.
- `src/ShoppingCart/` - Shopping cart page and product-in-cart components.
- `src/data/` - Redux reducers and `store.js` (configures the Redux store).

Important Redux slices (from `src/data`):

- `shopReducers` - shop data (products, categories, etc.)
- `shoppingInfoReeducer` - purchase or user info (note: file has a misspelled name in the repo)
- `shoppingCartReducer` - manages items added to the cart

## Routing

App routes are defined in `src/Conponents/App/App.js` using React Router v6. The base path includes `app-shop-react` (matching the repository homepage) and maps:

- `/app-shop-react/` -> Shop page
- `/app-shop-react/shoppingCart` -> Shopping Cart page

If you host the app on GitHub Pages under a repository named `app-shop-react`, these paths will work correctly. If you host under a different path, adjust the `homepage` in `package.json` and the route paths accordingly.

## Available scripts

From the project root, use npm to run these scripts (see `package.json`):

- `npm start` - Start development server (Create React App)
- `npm test` - Run tests
- `npm run build` - Create production build
- `npm run deploy` - Build and deploy to GitHub Pages (uses `gh-pages`)

Example (Windows PowerShell):

```powershell
npm install
npm start
```

## Setup and running locally

1. Clone the repository.
2. Install dependencies:

```powershell
npm install
```

3. Start the development server:

```powershell
npm start
```

4. Open `http://localhost:3000/app-shop-react/` in your browser (if a different homepage is used, you may need to use `/`).

## License

Add a license file if you plan to open-source the repository.
