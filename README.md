# SWE363 – Portfolio Assignment 4

**Live Demo:** https://haidar-aldahan.github.io/202256620-HaidarAlDahan-assignment4/
---

---
This is the final and complete version of my personal portfolio web application, developed for SWE363 (Web Engineering) at KFUPM. It brings together all skills learned across assignments 1–4 into a polished, fully deployed, and production-ready portfolio.

---

## Objective

The goal of this assignment is to deliver a comprehensive personal web application that demonstrates mastery of all course concepts, including responsive design, JavaScript interactivity, API integration, real email functionality, performance optimization, and professional deployment.

---

## Features

### Core (Assignment 1)
- Semantic HTML5 structure with accessibility support (skip link, ARIA labels)
- Responsive layout for desktop, tablet, and mobile
- Hero section with profile image, tagline, and call-to-action buttons
- About, Skills, Projects, GitHub Repos, and Contact sections
- Sticky header with blur effect

### Interactive (Assignment 2)
- **Dark / Light theme toggle** — saved using `localStorage`
- **Mobile navigation menu** — toggle button on small screens
- **Project filtering** — filter by All, Mobile, or Web category
- **Data persistence** — filter, search, and theme restored after refresh
- **Contact form validation** — real-time inline errors

### Advanced (Assignment 3)
- **GitHub API integration** — live repos fetched from GitHub REST API
- **Visitor timer** — tracks and displays time spent on the page
- **Debounced search** — optimized input handling for performance
- **Project search** — live keyword search with debouncing (300ms)
- **Project sorting** — sort A–Z or Z–A by project name

### Final Polish (Assignment 4)
- **Real email delivery** — contact form sends actual emails via EmailJS (no backend required)
- **Scroll animations** — sections animate in using IntersectionObserver API
- **Typing animation** — hero tagline cycles through roles with a typewriter effect
- **Back-to-top button** — appears after scrolling, smooth scroll back to top
- **Fully deployed** — live on GitHub Pages

---

## Live Deployment

🔗 **https://haidar-aldahan.github.io/202256620-HaidarAlDahan-assignment4/**

Deployed via GitHub Pages. No build step required — fully static.

---

## Project Structure

```
202256620-HaidarAlDahan-assignment4/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
├── README.md
└── .gitignore
```

---

## How to Run Locally

This project has no dependencies or build tools required.

1. Clone the repository:
   ```bash
   git clone https://github.com/Haidar-AlDahan/202256620-HaidarAlDahan-assignment4.git
   ```
2. Open the project folder
3. Double-click `index.html` — or run in terminal:
   ```bash
   start index.html      # Windows
   open index.html       # macOS
   ```

The website will run instantly in your browser.

---

## How to Use the Website

### Navigation
- Use the top navbar to jump between sections
- On mobile, tap **Menu** to open navigation links

### Theme Toggle
- Click the **theme button** (top right) to switch between dark and light mode
- Your preference is saved automatically

### Projects Section
- Use **filter buttons** to view All, Mobile, or Web projects
- Use the **sort dropdown** to sort A–Z or Z–A
- Use the **search box** to find projects by keyword
- All three controls work together simultaneously
- State is remembered after page refresh

### GitHub Repositories
- Loads automatically from the GitHub API
- Shows 6 most recently updated public repositories

### Contact Form
- Fill in name, email, and message
- Errors are shown live as you type
- On submit, a real email is delivered to the site owner via EmailJS

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and accessibility |
| CSS3 | Flexbox, Grid, variables, animations, responsive design |
| JavaScript (Vanilla) | DOM manipulation, events, API calls, localStorage |
| GitHub REST API | Live repository display |
| EmailJS | Real contact form email delivery |
| GitHub Pages | Free static site deployment |

---

## AI Usage Summary

AI tools (Claude, ChatGPT) were used to assist with:

- Implementing GitHub API integration
- Adding EmailJS contact form integration
- Scroll animations using IntersectionObserver
- Typing animation in the hero section
- Debouncing and performance optimization
- Refining documentation

All AI-generated code was reviewed, tested, and manually modified before use.
See `docs/ai-usage-report.md` for full details.

---

## Notes

- Front-end only — no backend server required
- Contact form delivers real emails via EmailJS (free tier: 200 emails/month)
- GitHub API section requires an active internet connection
- Tested on Chrome, Brave — responsive verified via DevTools
