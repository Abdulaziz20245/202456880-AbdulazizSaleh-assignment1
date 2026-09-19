# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website developed for SWE 363 Assignment 1: Foundation & AI Integration.

The website presents information about my background, projects, experience, education, technical skills, and contact information. It was built using HTML, CSS, and vanilla JavaScript without external frameworks or libraries.

The implementation focuses on simplicity, responsive design, accessibility, performance, and maintainable code.

---

## 2. Technology Stack

### HTML5

HTML provides the semantic structure and content of the portfolio.

Semantic elements used include:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `form`

### CSS3

CSS handles:

- Page layout
- Typography
- Light and dark themes
- Responsive design
- Project and skill grids
- Mobile navigation
- Contact form styling
- Hover and focus states
- Reduced-motion preferences

The project uses both CSS Grid and Flexbox.

### JavaScript

Vanilla JavaScript provides the interactive behavior of the website:

- Mobile navigation menu
- Dark/light theme switching
- Theme preference persistence
- System theme detection
- Contact form interaction
- Accessibility state updates

No JavaScript libraries or frameworks are required.

---

## 3. Project Structure

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

The project separates structure, presentation, behavior, assets, and documentation into logical locations.

---

## 4. Page Structure

The portfolio is implemented as a single-page website.

The main sections are:

1. About
2. Projects
3. Experience & Activities
4. Education
5. Skills
6. Contact

The navigation links use section IDs to move between different parts of the page.

The document follows a semantic structure:

```text
body
├── skip link
├── header
│   └── navigation
├── main
│   ├── about
│   ├── projects
│   ├── experience
│   ├── education
│   ├── skills
│   └── contact
└── footer
```

---

## 5. Responsive Design

The website was designed to work across desktop, tablet, and mobile screen sizes.

The main responsive breakpoints are:

- `800px` — tablet and smaller laptop layout
- `650px` — mobile navigation and mobile-specific layout
- `400px` — small mobile adjustments

### Desktop

On larger screens:

- The hero uses a two-column layout.
- Project cards use a two-column CSS Grid.
- Skill groups use a two-column CSS Grid.
- Navigation links are displayed directly in the header.

### Tablet

At smaller widths:

- The hero changes to a single-column layout.
- Project cards become one column.
- Skill groups become one column.
- Section spacing is reduced.

### Mobile

On mobile devices:

- A Menu button replaces the full navigation list.
- The navigation opens as a vertical menu.
- Experience and education headings stack vertically.
- Buttons and links wrap when necessary.
- Content spacing is reduced for smaller screens.

The layout uses relative sizing, CSS Grid, Flexbox, `min()`, `clamp()`, and media queries to adapt to different viewport sizes.

---

## 6. Theme System

The website supports light and dark themes.

Colors are defined using CSS custom properties such as:

```css
--color-background
--color-surface
--color-text
--color-text-muted
--color-border
```

Dark mode overrides these variables using:

```css
[data-theme="dark"]
```

This avoids duplicating theme-specific styles throughout the stylesheet.

### Theme Selection

JavaScript determines the initial theme using the following order:

1. Check for a previously saved user preference in `localStorage`.
2. If no preference exists, check the operating system's `prefers-color-scheme`.
3. Apply either the light or dark theme.

When the user manually changes the theme, the preference is saved in `localStorage`.

This means the selected theme remains active after refreshing or reopening the page.

---

## 7. Mobile Navigation

On desktop, all navigation links are visible.

On screens at or below `650px`, the normal navigation is replaced by a Menu button.

JavaScript controls the menu by adding or removing the `is-open` class.

The menu also updates:

```text
aria-expanded
```

and its accessible label so assistive technologies can determine whether the navigation is open or closed.

The menu closes when:

- The Menu button is pressed again
- A navigation link is selected
- The Escape key is pressed
- The viewport changes back to the desktop layout

---

## 8. Contact Form

The Contact section contains the three fields required by the assignment:

- Name
- Email
- Message

The form uses HTML validation through:

- `required`
- `type="email"`

No backend is used because the assignment does not require one.

JavaScript prevents the form from attempting a real submission. After valid input is submitted, the website displays a confirmation message and resets the fields.

The confirmation message uses an ARIA live region so it can also be announced by assistive technology.

---

## 9. Accessibility

Several accessibility considerations were included in the implementation.

### Semantic HTML

Semantic HTML elements are used instead of relying entirely on generic `div` elements.

### Skip Link

A "Skip to main content" link allows keyboard users to bypass the navigation.

### Keyboard Navigation

Interactive elements use native links, buttons, inputs, and text areas, allowing them to work with keyboard navigation.

The mobile menu can also be closed using the Escape key.

### Focus Indicators

Links, buttons, and form fields have visible focus states.

### Alternative Text

Portfolio and project images include descriptive `alt` attributes.

### ARIA

ARIA attributes are used where additional state information is necessary, including:

- `aria-expanded`
- `aria-controls`
- `aria-label`
- `aria-live`
- `role="status"`

ARIA is used only where native HTML does not already provide the required information.

### Reduced Motion

The stylesheet respects:

```css
prefers-reduced-motion: reduce;
```

When enabled, smooth scrolling and nonessential transitions or animations are minimized.

---

## 10. Performance Considerations

The website is intentionally lightweight.

### No Frameworks

The project does not require:

- Bootstrap
- Tailwind CSS
- React
- jQuery
- External JavaScript libraries

This reduces the number and size of resources required to load the page.

### System Fonts

A system font stack is used instead of downloading an external web font.

### Image Loading

The profile image is prioritized because it appears near the top of the page.

Project images appear further down the page and use lazy loading:

```html
loading="lazy"
```

Image dimensions are provided to help the browser reserve layout space before images finish loading.

### Minimal JavaScript

JavaScript is limited to functionality that benefits the user:

- Mobile navigation
- Theme selection
- Contact form interaction

---

## 11. Browser Compatibility

The website uses standards-based HTML, CSS, and JavaScript.

It is intended to work on current versions of major browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

A CSS fallback is provided before the `color-mix()` header background so browsers without support for that feature still receive a valid background color.

The `-webkit-backdrop-filter` property is also included alongside `backdrop-filter` for additional Safari compatibility.

---

## 12. Design Decisions

The visual direction was inspired by minimal developer portfolio websites.

The design intentionally uses:

- Neutral colors
- Limited visual effects
- Consistent spacing
- Subtle borders
- Clear typography
- Simple cards
- Minimal animation
- Generous whitespace

The assignment specifically recommends focusing on clarity and structure rather than over-design, so unnecessary animations, dependencies, and complex UI components were avoided.

The portfolio reference used during the design process was treated as inspiration rather than copied source code.

---

## 13. Code Organization

The application separates responsibilities across three main files:

### `index.html`

Contains:

- Semantic structure
- Portfolio content
- Forms
- Navigation
- Accessibility markup

### `css/style.css`

Contains:

- Design variables
- Global styles
- Component styles
- Responsive layouts
- Theme styles
- Accessibility styles

### `js/script.js`

Contains:

- Mobile menu behavior
- Theme behavior
- Theme persistence
- Responsive menu-state handling
- Contact form interaction

This separation keeps the project understandable and makes future assignments easier to extend.

---

## 14. Testing

The website should be tested at several viewport sizes, including approximately:

- 1440px — desktop
- 1024px — laptop
- 768px — tablet
- 375px — mobile
- 320px — small mobile

The following functionality should also be tested:

- Navigation links
- Mobile menu
- Escape-key menu closing
- Theme switching
- Theme persistence after refresh
- External links
- Resume link
- Project images
- Contact form validation
- Contact confirmation message
- Keyboard navigation
- Skip link
- Visible focus states

The browser console should contain no JavaScript errors, and local assets should load without failed network requests.

---

## 15. Future Improvements

This project is intended to serve as the foundation for later SWE 363 portfolio assignments.

Possible future improvements include:

- Connecting the contact form to a backend or form service
- Adding dedicated project detail pages
- Connecting projects to their GitHub repositories
- Adding more detailed project results
- Improving project media and screenshots
- Expanding portfolio content
- Adding additional web-engineering features as required by future assignments

The current implementation intentionally remains simple so it can be extended incrementally in later assignments.
