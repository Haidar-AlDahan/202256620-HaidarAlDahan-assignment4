# SWE363 – Portfolio Assignment 3

This project is a responsive personal portfolio website developed for SWE363 (Web Engineering).  
Assignment 3 builds on Assignments 1 and 2 by adding advanced functionality, API integration,
and performance improvements.

---

## Features

- Responsive layout (desktop, tablet, mobile)
- Mobile navigation menu (toggle button on small screens)
- Dark / Light theme toggle (saved using localStorage)
- Contact form with validation and user feedback
- Smooth hover effects and UI transitions

### Interactive Features (Assignment 2)

- **Project Filtering**
  - Filter projects by category (All, Mobile, Web)
  - Updates instantly without page reload

- **Project Search**
  - Search projects using keywords
  - Results update live as the user types

- **User Feedback**
  - Displays number of results
  - Shows message when no projects are found

- **Data Persistence**
  - Selected filter and search input are saved using localStorage
  - State is restored automatically after page refresh

---

### Assignment 3 Features (New)

- **GitHub API Integration**
  - Fetches and displays public repositories live from GitHub
  - Shows repo name, description, language, and star count
  - Includes a direct link to each repository
  - Displays a friendly error message if the API fails

- **Project Sorting**
  - Sort projects by name A–Z or Z–A
  - Works alongside existing filter and search

- **Visitor Timer**
  - Displays how long the visitor has been on the page
  - Updates every second in the footer

- **Debounced Search**
  - Search input waits 300ms after typing stops before running
  - Reduces unnecessary function calls for better performance

---

## Project Structure

├── index.html

├── css/styles.css

├── js/script.js

├── assets/images/

├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md

└── README.md

---

## How to Run the Project

This project does not require any installation or dependencies.

### Steps:

1. Download or clone the repository
2. Open the project folder
3. Double-click `index.html`  
   OR  
   Right-click → Open with browser
   OR
   Write in the termenal of the project `start index.html`

The website will run locally in your browser.

---

## How to Use the Website

- Use filter buttons to view projects by category
- Use the sort dropdown to sort projects by name
- Use the search box to find projects by keyword
- All three controls work together simultaneously
- Your last filter and search are remembered after refresh

### GitHub Repositories Section

- Loads automatically from the GitHub API
- Shows your 6 most recently updated public repositories

### Theme Toggle

- Click the theme button to switch between light and dark mode
- Preference is saved automatically

### Contact Form

- Enter name, email, and message
- Errors shown live as you type
- Status message appears after submission

### Navigation

- Use the navigation bar at the top to move between sections
- On small screens, click the **Menu button** to open navigation links

### Theme Toggle

- Click the **theme toggle button** to switch between light and dark mode
- Your preference is saved automatically

### Projects Section

- Browse project cards
- Click buttons to view more details or demos

### Contact Form

- Enter your name, email, and message
- Errors will be shown if inputs are invalid
- A status message will appear after submission

---

## Technologies Used

- HTML5
- HTML5
- CSS3 (Flexbox, Grid, CSS Variables, responsive design)
- JavaScript (DOM manipulation, Fetch API, localStorage, debouncing)
- GitHub REST API (public, no authentication required)

---

## AI Usage Summary

AI tools (ChatGPT, Claude) were used to:

- Assist in implementing GitHub API integration
- Help add sort functionality and visitor timer
- Apply performance improvements (debouncing)
- Refine documentation

All code was reviewed, tested, and modified manually.  
See `docs/ai-usage-report.md` for full details.

---

## Notes

- Front-end only project (no backend)
- Form submission is simulated and does not send real data
- GitHub API section requires an internet connection

---
