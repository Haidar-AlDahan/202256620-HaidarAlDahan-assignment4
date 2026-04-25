# AI Usage Report – Assignment 4

## AI Tools Used

- ChatGPT
- Claude (Anthropic)

---

## Tools Used & Use Cases

### Claude (Anthropic)
Used as the primary AI assistant throughout Assignment 4 for:
- Integrating EmailJS into the contact form for real email delivery
- Implementing scroll-triggered animations using the IntersectionObserver API
- Building the typewriter/typing animation in the hero section
- Adding a dynamic back-to-top button with smooth scroll behavior
- Debugging JavaScript issues and reviewing code logic
- Writing and refining documentation (README, AI report)

### ChatGPT
Used as a secondary reference tool for:
- Cross-checking CSS animation approaches
- Exploring alternative implementation ideas for the visitor timer
- Understanding debouncing concepts and performance best practices

---

## How AI Was Used

AI was used as a support tool during development for:

1. Improving HTML structure and layout organization
2. Assisting in writing and refining CSS for responsive design
3. Implementing JavaScript features such as:
   - Theme toggle (Light/Dark mode)
   - Mobile navigation behavior
   - Project filtering, search, and sorting functionality
   - GitHub API integration to fetch and display public repositories
4. Adding sort functionality to the projects section (A–Z, Z–A)
5. Implementing a visitor timer in the footer
6. Applying debouncing to the search input for performance optimization
7. Debugging issues and identifying logic errors
8. Improving documentation clarity (README and technical documentation)

### Assignment 4 Specific AI Use
9. Wiring up EmailJS for real contact form email delivery — AI helped configure the service, template variables, and JavaScript integration
10. Implementing scroll animations using IntersectionObserver — AI suggested the approach, which was then adapted to match the existing CSS variable system
11. Building a typewriter effect for the hero tagline — AI provided the base logic, which was modified to fit the portfolio's tone and role descriptions
12. Adding a back-to-top button — AI helped with the scroll event logic and CSS transition for the show/hide behavior

---

## Modifications & Verification

All AI-generated code and suggestions were reviewed, tested, and modified before being used.

Examples of modifications include:

- Adjusting logic for project filtering and search to match requirements
- Refining localStorage usage for theme, filter, and search persistence
- Simplifying code structure for readability and maintainability
- Fixing UI behavior issues (e.g., mobile navigation, layout alignment)
- Adjusting GitHub API fetch logic to match the portfolio's card layout
- Integrating sort functionality into the existing filter and search system
- Verifying debounce behavior with different typing speeds
- Replacing EmailJS template variable names to match the actual form fields (`from_name`, `from_email`, `message`)
- Adjusting the typing animation roles and timing to match personal identity
- Tuning scroll animation threshold values for better visual feel
- Integrating the back-to-top button into the existing CSS variable system for dark/light mode compatibility

The final implementation reflects personal understanding and manual refinement.

---

## Benefits of Using AI

- Faster debugging and issue identification
- Better understanding of structuring responsive layouts
- Helped implement interactive features more efficiently
- Improved code organization and readability
- Better understanding of debouncing and performance optimization
- Enabled real email integration without a backend server
- Accelerated learning of browser APIs (IntersectionObserver, localStorage)

---

## Challenges & Limitations

- Some AI suggestions were too complex and required simplification
- Certain solutions needed adjustments to meet assignment constraints
- Required careful review to ensure correctness and avoid over-reliance
- Sort logic needed careful integration with the existing filter system
- Fetching and displaying data from external REST APIs
- Handling API errors gracefully with user-friendly messages
- EmailJS template variables required manual matching with form field IDs
- Typing animation needed customization — AI-generated version used generic placeholder roles

---

## Learning Outcomes

Through this process, I improved my understanding of:

- Writing semantic HTML structure
- Building responsive layouts using CSS Grid and Flexbox
- Handling DOM events and user interaction in JavaScript
- Implementing client-side data persistence using localStorage
- Using the IntersectionObserver API for scroll-based animations
- Integrating third-party services (EmailJS) without a backend
- Using AI responsibly as a development support tool
- Reviewing, testing, and adapting AI suggestions rather than copying them directly

---

## Responsible Use & Modifications

AI suggestions were never used directly without review. Every feature was:

- Read and understood before being added
- Tested in the browser for correct behavior
- Modified to fit the existing codebase and style
- Verified to meet assignment requirements
- Adapted to use the project's existing CSS variables and naming conventions

---

## Conclusion

AI was used to assist development, not replace it.  
All code was reviewed, tested, and adapted to ensure full understanding and correctness.  
The use of AI tools accelerated implementation while reinforcing learning — every feature added was understood, modified, and verified before being included in the final submission.
