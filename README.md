# Abdulaziz Saleh — Personal Portfolio

A responsive personal portfolio website developed for **SWE 363 — Web Engineering & Development, Assignment 1: Foundation & AI Integration**.

The website introduces my background as a Computer Science student at KFUPM with interests in Artificial Intelligence, Machine Learning, and Computer Vision. It presents selected projects, experience, education, technical skills, and contact information.

The project was built using **HTML, CSS, and vanilla JavaScript**, with an emphasis on simplicity, responsive design, accessibility, performance, and responsible AI-assisted development.

---

## Features

- Responsive single-page portfolio
- About section with profile information
- Four featured projects
- Experience and activities
- Education history
- Organized technical skills
- Contact form with client-side interaction
- Light and dark themes
- Persistent theme preference using `localStorage`
- Automatic system-theme detection
- Responsive mobile navigation
- Smooth section navigation
- Keyboard-accessible controls
- Skip-to-content link
- Reduced-motion support
- Responsive layouts for desktop, tablet, and mobile

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### CSS Features

- CSS Grid
- Flexbox
- CSS custom properties
- Responsive media queries
- `clamp()`
- `min()`
- `prefers-reduced-motion`
- `prefers-color-scheme`

### JavaScript Features

- DOM manipulation
- Event listeners
- `localStorage`
- `matchMedia`
- Form event handling
- Dynamic ARIA state updates

No external JavaScript or CSS frameworks are required.

---

## Project Structure

```text
202456880-AbdulazizSaleh-assignment1/
├── assets/
│   ├── documents/
│   │   └── My_Resume.pdf
│   └── images/
│       ├── ME.jpg
│       └── projects/
│           ├── cvu-computer-vision.jpg
│           ├── neo-classification.jpg
│           ├── colorization.jpg
│           └── transformer.jpg
├── css/
│   └── style.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

---

## Getting Started

The portfolio is a static website and does not require package installation, a build process, or external dependencies.

### Prerequisites

You only need:

- A modern web browser
- Git, if cloning the repository

A code editor such as Visual Studio Code is optional.

### Clone the Repository

```bash
git clone https://github.com/Abdulaziz20245/202456880-AbdulazizSaleh-assignment1.git
```

Move into the project directory:

```bash
cd 202456880-AbdulazizSaleh-assignment1
```

---

## Running Locally

### Option 1 — Open Directly

Open:

```text
index.html
```

in a modern web browser.

Because the project uses only static HTML, CSS, JavaScript, and local assets, no installation step is required.

### Option 2 — Local Development Server

For development, the project can also be served using a local server such as the **Live Server** extension in Visual Studio Code.

1. Open the repository in Visual Studio Code.
2. Install Live Server if it is not already available.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

Using a local server is recommended while developing and testing.

---

## Usage

The navigation bar provides links to:

- About
- Projects
- Experience
- Education
- Skills
- Contact

On smaller screens, these links are available through the **Menu** button.

The theme button switches between light and dark modes. The selected theme is stored locally in the browser so that it persists between visits.

The Contact section contains Name, Email, and Message fields. This assignment does not require a backend, so submitting valid information displays a demonstration confirmation message without transmitting the data.

---

## Responsive Design

The website is designed for desktop, tablet, and mobile devices.

The layout uses CSS Grid and Flexbox together with responsive media queries.

Key responsive behaviors include:

- Two-column hero on larger screens
- Single-column hero on tablets and mobile
- Two-column project and skill grids on desktop
- Single-column project and skill layouts on smaller screens
- Mobile navigation at smaller viewport widths
- Stacked experience and education information on mobile
- Reduced spacing on small screens

The implementation includes adjustments around `800px`, `650px`, and `400px`.

---

## Accessibility

Accessibility considerations include:

- Semantic HTML5 elements
- Logical heading structure
- Skip-to-content link
- Keyboard-accessible navigation
- Visible focus indicators
- Descriptive image alternative text
- Form labels
- Accessible mobile-menu state
- ARIA live status message for the contact form
- Escape-key support for the mobile menu
- Reduced-motion support

The website uses native HTML controls wherever possible rather than recreating interactive elements with generic elements.

---

## Performance

The website was intentionally kept lightweight.

Performance decisions include:

- No frontend framework
- No external JavaScript libraries
- No CSS framework
- System font stack instead of an external font request
- Minimal JavaScript
- Local static assets
- Lazy-loaded project images
- Explicit image dimensions
- Prioritized hero image

This keeps the number of network requests and the amount of client-side processing low.

---

## Browser Compatibility

The portfolio is designed for current versions of major browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

The implementation primarily uses standards-based HTML, CSS, and JavaScript.

Fallback styling is included for newer CSS behavior where appropriate.

---

## AI-Assisted Development

ChatGPT was used as an AI-assisted development tool during this assignment.

AI assistance included:

- Requirements analysis
- Development planning
- UI/UX suggestions
- HTML structure
- Responsive CSS guidance
- JavaScript explanations
- Debugging
- Accessibility review
- Performance review
- Assignment compliance review
- Documentation assistance

AI-generated suggestions were reviewed, tested, and modified rather than submitted without evaluation.

For the detailed report, see:

[`docs/ai-usage-report.md`](docs/ai-usage-report.md)

---

## Technical Documentation

Detailed information about the implementation, responsive strategy, theme system, mobile navigation, accessibility, performance, and testing is available in:

[`docs/technical-documentation.md`](docs/technical-documentation.md)

---

## Development Process

The project was developed incrementally rather than as one large implementation.

Major stages included:

1. Repository and project structure
2. Semantic HTML foundation
3. Portfolio content
4. Global design system
5. Component styling
6. Responsive design
7. Mobile navigation
8. Light/dark theme
9. Accessibility improvements
10. Performance and code-quality review
11. Assignment compliance review
12. Documentation

Meaningful Git commits were used throughout the process to record these milestones.

---

## What I Learned

Through this assignment, I practiced:

- Structuring a webpage with semantic HTML
- Creating layouts with CSS Grid and Flexbox
- Designing responsive interfaces
- Manipulating the DOM with JavaScript
- Handling browser events
- Persisting preferences with `localStorage`
- Working with `matchMedia`
- Building accessible navigation and forms
- Considering performance during frontend development
- Using Git incrementally
- Using AI as a development and review tool
- Reviewing an implementation against a written specification

---

## Future Improvements

This portfolio is intended to serve as a foundation for later SWE 363 assignments.

Possible future improvements include:

- Connecting the contact form to a backend
- Adding project detail pages
- Linking projects to their repositories
- Adding more detailed project results
- Improving project screenshots
- Expanding the portfolio as additional coursework and projects are completed

---

## Documentation

Additional project documentation:

- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)

---

## Author

**Abdulaziz Saleh**

Computer Science student at King Fahd University of Petroleum & Minerals (KFUPM), focused on Artificial Intelligence, Machine Learning, and Computer Vision.

- GitHub: [Abdulaziz20245](https://github.com/Abdulaziz20245)
- LinkedIn: [Abdulaziz Saleh](https://www.linkedin.com/in/abdulaziz-saleh-4215721a9/)
