// =========================
// Theme (Light / Dark)
// =========================

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  // Save choice so it stays after refresh
  localStorage.setItem("theme", theme);

  // Update the button label
  const themeButton = document.getElementById("themeToggle");
  if (themeButton) {
    const isDark = theme === "dark";
    themeButton.setAttribute("aria-pressed", isDark ? "true" : "false");

    // Simple: show current mode
    themeButton.textContent = isDark ? "Dark" : "Light";
  }
}

// Decide theme when page opens
function getStartingTheme() {
  // 1) If user picked before, use it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  // 2) Otherwise follow system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

// Start theme on page load
const startingTheme = getStartingTheme();
applyTheme(startingTheme);

// Toggle theme on click
const themeButton = document.getElementById("themeToggle");
if (themeButton) {
  themeButton.addEventListener("click", function () {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";

    if (currentTheme === "dark") {
      applyTheme("light");
    } else {
      applyTheme("dark");
    }
  });
}
// Mobile navigation toggle

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", isExpanded ? "false" : "true");
  });

  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
      navLinks.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// =========================
// Contact form — EmailJS
// =========================
emailjs.init("YWVenq0e9_hWkC7p3");

const form = document.getElementById("contactForm");
if (form) {
  const status = document.getElementById("formStatus");

  function setError(fieldName, message) {
    const errorEl = form.querySelector('[data-error-for="' + fieldName + '"]');
    if (errorEl) errorEl.textContent = message;
  }

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let valid = true;

    if (name.length < 2) {
      setError("name", "Please enter your name (at least 2 characters).");
      valid = false;
    } else {
      setError("name", "");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", "Please enter a valid email.");
      valid = false;
    } else {
      setError("email", "");
    }

    if (message.length < 10) {
      setError("message", "Message should be at least 10 characters.");
      valid = false;
    } else {
      setError("message", "");
    }

    return valid;
  }

  // Live validation
  ["name", "email", "message"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el)
      el.addEventListener("input", function () {
        if (status) status.textContent = "";
        validateForm();
      });
  });

  // Submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) {
      if (status) status.textContent = "Fix the errors above and try again.";
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;
    if (status) status.textContent = "Sending...";

    emailjs
      .send("service_9jnub3f", "template_x6424ze", {
        from_name: document.getElementById("name").value.trim(),
        from_email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
      })
      .then(function () {
        form.reset();
        setError("name", "");
        setError("email", "");
        setError("message", "");
        if (status)
          status.textContent = "Message sent! I'll get back to you soon.";
        if (submitBtn) submitBtn.disabled = false;
      })
      .catch(function (error) {
        console.error("EmailJS error:", error);
        if (status)
          status.textContent = "Something went wrong. Please try again.";
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}
// =========================
// Projects: Filter + Search
// =========================
const FILTER_KEY = "projectFilter";
const SEARCH_KEY = "projectSearch";
const SORT_KEY = "projectSort";
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const searchInput = document.getElementById("projectSearch");
const statusText = document.getElementById("projectsStatus");

let currentFilter = "all";
let currentSort = "default";
// Apply filtering + search
function updateProjects() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const grid = document.getElementById("projects-grid");

  // Get all cards as an array so we can sort them
  let cards = Array.from(projectCards);

  // Sort first
  if (currentSort === "az") {
    cards.sort(function (a, b) {
      return a
        .getAttribute("data-title")
        .localeCompare(b.getAttribute("data-title"));
    });
  } else if (currentSort === "za") {
    cards.sort(function (a, b) {
      return b
        .getAttribute("data-title")
        .localeCompare(a.getAttribute("data-title"));
    });
  }

  // Re-append in sorted order
  cards.forEach(function (card) {
    grid.appendChild(card);
  });

  // Now filter + search
  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.getAttribute("data-category");
    const title = card.getAttribute("data-title");

    const matchesFilter = currentFilter === "all" || category === currentFilter;
    const matchesSearch = title.includes(searchValue);

    if (matchesFilter && matchesSearch) {
      card.style.display = "block";
      requestAnimationFrame(() => {
        card.classList.remove("is-hidden");
        card.classList.add("visible");
      });
      visibleCount++;
    } else {
      card.classList.remove("visible");
      card.classList.add("is-hidden");
      setTimeout(() => {
        if (card.classList.contains("is-hidden")) {
          card.style.display = "none";
        }
      }, 250);
    }
  });

  // Update status text
  if (visibleCount === 0) {
    statusText.textContent =
      "No projects found. Try a different keyword or filter.";
  } else if (searchValue && currentFilter !== "all") {
    statusText.textContent = `Showing ${visibleCount} project(s) for "${searchValue}" in ${currentFilter}.`;
  } else if (searchValue) {
    statusText.textContent = `Showing ${visibleCount} project(s) for "${searchValue}".`;
  } else if (currentFilter !== "all") {
    statusText.textContent = `Showing ${visibleCount} ${currentFilter} project(s).`;
  } else {
    statusText.textContent = "Showing all projects.";
  }
}
// Handle filter buttons
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.getAttribute("data-filter");

    // Save filter
    localStorage.setItem(FILTER_KEY, currentFilter);

    updateProjects();
  });
});

// Handle sort dropdown
const sortSelect = document.getElementById("sortSelect");
if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    currentSort = sortSelect.value;
    localStorage.setItem(SORT_KEY, currentSort);
    updateProjects();
  });
}
// Handle search input
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

if (searchInput) {
  searchInput.addEventListener(
    "input",
    debounce(function () {
      localStorage.setItem(SEARCH_KEY, searchInput.value);
      updateProjects();
    }, 300),
  );
}
// Restore saved state
const savedFilter = localStorage.getItem(FILTER_KEY);
const savedSearch = localStorage.getItem(SEARCH_KEY);
const savedSort = localStorage.getItem(SORT_KEY);

// Restore filter
if (savedFilter) {
  currentFilter = savedFilter;

  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-filter") === savedFilter) {
      btn.classList.add("active");
    }
  });
}

// Restore search
if (savedSearch && searchInput) {
  searchInput.value = savedSearch;
}

// Restore sort
if (savedSort && sortSelect) {
  currentSort = savedSort;
  sortSelect.value = savedSort;
}

// Initial fade-in on page load
projectCards.forEach((card) => {
  card.classList.add("visible");
});

updateProjects();

// =========================
// GitHub API Integration
// =========================

function loadGitHubRepos() {
  const grid = document.getElementById("github-grid");
  const statusEl = document.getElementById("github-status");
  const username = "zFiora";

  fetch(
    "https://api.github.com/users/" +
      username +
      "/repos?sort=updated&per_page=6",
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("GitHub API request failed");
      }
      return response.json();
    })
    .then(function (repos) {
      // Remove loading text
      if (statusEl) statusEl.remove();

      if (repos.length === 0) {
        grid.innerHTML = "<p class='muted'>No public repositories found.</p>";
        return;
      }

      repos.forEach(function (repo) {
        const card = document.createElement("article");
        card.className = "card card-body github-card";

        card.innerHTML =
          "<h3>" +
          repo.name +
          "</h3>" +
          "<p>" +
          (repo.description || "No description provided.") +
          "</p>" +
          "<div class='github-meta'>" +
          "<span class='tag'>" +
          (repo.language || "N/A") +
          "</span>" +
          "<span>⭐ " +
          repo.stargazers_count +
          "</span>" +
          "</div>" +
          "<a class='btn primary' href='" +
          repo.html_url +
          "' target='_blank' rel='noopener'>View on GitHub</a>";

        grid.appendChild(card);
      });
    })
    .catch(function (error) {
      if (statusEl) {
        statusEl.textContent =
          "Could not load repositories. Please try again later.";
      }
      console.error("GitHub API error:", error);
    });
}

loadGitHubRepos();
// =========================
// Visitor Timer
// =========================
(function () {
  const timerEl = document.getElementById("visitTimer");
  if (!timerEl) return;

  let seconds = 0;

  setInterval(function () {
    seconds++;

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      timerEl.textContent = hrs + "h " + mins + "m " + secs + "s";
    } else if (mins > 0) {
      timerEl.textContent = mins + "m " + secs + "s";
    } else {
      timerEl.textContent = secs + "s";
    }
  }, 1000);
})();
// =========================
// Scroll animations
// =========================
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".section").forEach(function (section) {
  section.classList.add("fade-section");
  observer.observe(section);
});
// =========================
// Typing animation
// =========================
const roles = ["Software Engineer", "Flutter Developer", "Web Developer"];
const typingEl = document.querySelector(".tagline");
if (typingEl) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = roles[roleIndex];
    if (!deleting) {
      typingEl.textContent = current.slice(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      typingEl.textContent = current.slice(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 50 : 100);
  }
  type();
}
// =========================
// Back to top button
// =========================
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
  backToTop.classList.toggle("show", window.scrollY > 400);
});

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
