"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");
const themeToggle = document.querySelector(".theme-toggle");

// Keep the mobile menu's visual and accessibility states synchronized.
function setMenuState(isOpen) {
  navigation.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  setMenuState(!isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

const THEME_STORAGE_KEY = "portfolio-theme";

// Use a saved preference when available; otherwise respect the system theme.
function getPreferredTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function updateThemeButton(theme) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  themeToggle.textContent = nextTheme === "dark" ? "Dark" : "Light";

  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeButton(theme);
}

const initialTheme = getPreferredTheme();

setTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  setTheme(nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
});

// Reset the mobile menu when the layout switches back to desktop.
const mobileBreakpoint = window.matchMedia("(max-width: 650px)");

mobileBreakpoint.addEventListener("change", (event) => {
  if (!event.matches) {
    setMenuState(false);
  }
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// The assignment requires no backend, so simulate successful form interaction.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent =
    "Thanks for your message! This demo form does not send data yet.";

  contactForm.reset();
});
