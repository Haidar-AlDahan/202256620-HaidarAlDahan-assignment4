# Technical Documentation – Assignment 4

## Overview

This project is a responsive personal portfolio website built using:

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- GitHub REST API (external API integration)

No frameworks or backend were used. All functionality is implemented on the client side.

---

## Architecture

The project follows a clear separation of concerns:

- `index.html` → Structure and semantic layout
- `css/styles.css` → Styling, layout, responsiveness, and animations
- `js/script.js` → Interactivity, DOM manipulation, API calls, and state handling
- `docs/ai-usage-report.md` → AI tool usage documentation
- `docs/technical-documentation.md` → This file

---

## Key Technical Features

### 1. Responsive Design

- CSS Grid used for layout (projects, GitHub repos, sections)
- Flexbox used for navigation and alignment
- Media queries for tablet and mobile breakpoints
- Mobile navigation menu with toggle behavior

---

### 2. Theme Toggle (Dark / Light Mode)

- Uses `data-theme` attribute on `<html>`
- CSS variables define color schemes for both themes
- JavaScript updates theme dynamically on button click
- User preference is stored in `localStorage`

---

### 3. GitHub API Integration (New)

- Fetches public repositories from the GitHub REST API
- Endpoint: `https://api.github.com/users/{username}/repos?sort=updated&per_page=6`
- Displays repo name, description, language, and star count
- Each card links directly to the repository on GitHub
- Error handling: shows a user-friendly message if the API request fails
- Cards are dynamically created using `document.createElement`
- No API key required (public endpoint)

---

### 4. Project Filtering

- Each project card includes `data-category` attributes
- Filter buttons update visible elements dynamically
- Uses DOM manipulation to show/hide projects
- Active filter button is visually highlighted

---

### 5. Project Sorting (New)

- Sort dropdown allows sorting by name A–Z or Z–A
- Uses `Array.sort()` with `localeCompare()` for alphabetical comparison
- Cards are re-appended to the DOM in sorted order
- Works simultaneously with filtering and search
- Default order restored when "Default" option is selected

---

### 6. Project Search

- Search input uses debouncing (300ms delay) for performance
- Matches keywords using `data-title` attributes
- Filtering, sorting, and search all work together
- Results update after user stops typing

---

### 7. Debounced Search (New)

- Custom `debounce()` function wraps the search handler
- Waits 300ms after the last keystroke before running
- Reduces unnecessary DOM updates and function calls
- Improves performance on slower devices

---

### 8. Visitor Timer (New)

- Starts counting seconds when the page loads
- Updates every 1000ms using `setInterval`
- Displays seconds, then minutes and seconds, then hours
- Displayed in the footer
- Wrapped in an IIFE (Immediately Invoked Function Expression)
  to avoid polluting the global scope

---

### 9. Data Persistence (localStorage)

- Stores:
  - Selected theme
  - Selected filter
  - Search input value
- Restores state automatically on page load

---

### 10. User Feedback System

- Displays dynamic messages:
  - Number of matching projects
  - Combined filter + search status
  - "No projects found" state
- Contact form shows validation errors and submission status
- GitHub section shows loading state and error message if API fails

---

### 11. Form Validation

- Client-side validation only
- Regex-based email validation
- Real-time validation on input
- Prevents submission if inputs are invalid

---

### 12. Animations and Transitions

- CSS transitions applied to:
  - Project cards (hover + filtering)
  - Buttons and UI elements
- Smooth fade/slide effect when filtering or sorting projects

---

### 13. Scroll-triggered animations (Innovation)

- IntersectionObserver API used to animate sections on scroll
- No external libraries required

### 14. Typing animation (Innovation)

- Dynamic role cycling in the hero section
- Custom typewriter effect built in vanilla JS

### 15. Back-to-top button (Innovation)

- Appears dynamically after scrolling 400px
- Smooth scroll back to top

## API Details

| Property       | Value                                        |
| -------------- | -------------------------------------------- |
| API Name       | GitHub REST API                              |
| Endpoint       | /users/{username}/repos                      |
| Method         | GET                                          |
| Authentication | None (public)                                |
| Data Returned  | Repo name, description, language, stars, URL |
| Error Handling | User-friendly message displayed on failure   |

---

## Compatibility

Tested on:

- Google Chrome
- Brave

Responsive behavior verified using browser DevTools.

---

## Performance

- No external libraries or frameworks
- Debounced search reduces unnecessary function calls
- Images use `loading="lazy"` for faster initial load
- Lightweight static structure with minimal assets
- `<link rel="preconnect">` used for faster external connections

---

## Notes

- The project is fully front-end (no backend integration)
- Form submission is simulated and does not send data
- GitHub API section requires an active internet connection
