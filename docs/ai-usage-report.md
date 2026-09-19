# AI Usage Report

## 1. Overview

AI-assisted development was used throughout this assignment as a support tool for planning, implementation, debugging, review, and documentation.

The primary AI tool used was **ChatGPT**.

Rather than asking AI to generate the entire assignment at once and submitting the output unchanged, I developed the portfolio incrementally. I reviewed the suggestions, implemented them in stages, tested the results, identified problems, and modified the implementation when necessary.

This approach helped me use AI as a development assistant while maintaining responsibility for the final code and understanding how the website works.

---

## 2. AI Tools Used

### ChatGPT

ChatGPT was used for:

- Analyzing the assignment requirements and grading rubric
- Planning the website structure
- Analyzing portfolio design inspiration
- Organizing portfolio content
- Suggesting semantic HTML structure
- Developing responsive CSS
- Explaining CSS Grid and Flexbox decisions
- Developing JavaScript interactions
- Debugging implementation issues
- Reviewing accessibility
- Reviewing performance considerations
- Auditing the website against the assignment requirements
- Assisting with technical documentation

No AI-generated suggestion was treated as automatically correct. Suggestions were reviewed and tested before being accepted.

---

## 3. Requirements Analysis

One of the first uses of AI was breaking the assignment into smaller implementation milestones.

Instead of developing the entire website in one step, the work was divided into areas such as:

1. Repository setup
2. Semantic HTML
3. Portfolio sections
4. Global CSS
5. Component styling
6. Responsive design
7. Mobile navigation
8. Theme functionality
9. Accessibility
10. Performance
11. Requirement compliance
12. Documentation

This made the development process easier to understand and also resulted in a more meaningful Git commit history.

### What I learned

I learned that requirements should be reviewed before implementation and again before submission. A feature can work correctly while still failing to satisfy a specific assignment requirement.

---

## 4. UI/UX Design Assistance

I used ChatGPT to help analyze a professional developer portfolio as visual inspiration.

The goal was not to copy the website. Instead, I identified general design characteristics that could be adapted to my own portfolio, including:

- Minimal navigation
- Neutral colors
- Generous whitespace
- Clear typography
- Simple project cards
- Limited animation
- Light and dark themes
- Content-focused layout

I then adapted these ideas to my own content and the assignment requirement to keep the website simple.

### Modification

A more complex portfolio could have included additional animations, frameworks, and visual effects. I intentionally avoided those features because the assignment emphasizes clarity and structure rather than over-design.

### What I learned

I learned the difference between using an existing website as design inspiration and copying its implementation. I focused on general design principles while creating my own structure, code, and content.

---

## 5. HTML Structure

AI assistance was used to plan a semantic HTML structure.

The final page uses elements such as:

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <form>
            <footer></footer>
          </form>
        </article>
      </section>
    </main>
  </nav>
</header>
```

The website was built section by section rather than generated as one large file.

The implementation sequence included:

- Navigation
- About/Hero
- Projects
- Experience
- Education
- Skills
- Contact
- Footer

### Modification and review

I reviewed the proposed structure and made changes as the project developed.

For example, the site-wide footer was initially located inside the `main` element. During a later review, this was identified and corrected so that the footer is outside the primary page content.

### What I learned

I improved my understanding of semantic HTML and how elements should represent the purpose of content rather than only being used for visual layout.

---

## 6. Responsive CSS

ChatGPT assisted with suggestions for responsive layout techniques using CSS Grid, Flexbox, and media queries.

The final implementation uses breakpoints for:

- Tablet/smaller laptop layouts
- Mobile layouts
- Small mobile devices

Examples of responsive changes include:

- Converting the hero from two columns to one column
- Converting project and skill grids to one column
- Stacking experience and education information
- Replacing desktop navigation with a mobile menu
- Reducing spacing on smaller screens

### Modification

The first mobile approach simply hid the navigation links on small screens. I recognized that this removed access to navigation for mobile users.

The implementation was then improved by adding an accessible Menu button and JavaScript-controlled mobile navigation.

### What I learned

Responsive design is not only about making content fit on smaller screens. Functionality must remain available and usable at every viewport size.

---

## 7. Debugging With AI

AI was also used during debugging.

### Example: Mobile Menu Button

While implementing the mobile menu, the Menu button did not appear even though the HTML was correct.

The problem was traced to this CSS selector:

```css
..menu-toggle {
  display: block;
}
```

The selector accidentally contained two periods.

It was corrected to:

```css
.menu-toggle {
  display: block;
}
```

After the correction, the Menu button appeared at the intended mobile breakpoint.

### What I learned

A very small syntax error can prevent a CSS rule from applying while the rest of the page continues to work. I also learned to inspect both the HTML and the relevant media-query rules instead of assuming the JavaScript was responsible.

---

## 8. JavaScript Assistance

AI assistance was used to implement and explain the JavaScript features.

### Mobile Navigation

JavaScript controls:

- Opening the mobile menu
- Closing the menu
- Updating `aria-expanded`
- Updating the accessible button label
- Closing the menu after selecting a navigation link
- Closing the menu using Escape
- Resetting the menu when returning to desktop layout

### Theme System

JavaScript also controls:

- Light/dark theme switching
- Detecting system color preference
- Reading a previously saved preference
- Saving the selected theme with `localStorage`
- Updating the theme button label

### Contact Form

The contact form does not use a backend because one is not required for this assignment.

JavaScript prevents a real form submission, displays a confirmation message, and resets the fields after valid input.

### What I learned

I gained a better understanding of:

- DOM selection
- Event listeners
- Class manipulation
- HTML attributes
- `localStorage`
- `matchMedia`
- Form events
- Accessibility state synchronization

---

## 9. Accessibility Review

AI was used to review the website for accessibility improvements.

The resulting implementation includes:

- Semantic HTML
- A skip-to-content link
- Visible keyboard focus states
- Alternative text for images
- Accessible mobile-menu state
- Keyboard support
- Escape-key menu closing
- Form labels
- An ARIA live status message
- Reduced-motion support

### Modification

Accessibility was not treated as a separate feature added only at the end. Several accessibility improvements changed the actual implementation.

For example, the mobile Menu button uses:

```html
aria-expanded aria-controls aria-label
```

and JavaScript keeps the accessible state synchronized with the visual menu state.

### What I learned

I learned that accessibility includes both markup and behavior. A control can look correct visually while still providing incomplete information to keyboard or assistive-technology users.

---

## 10. Performance Review

AI assistance was used to identify unnecessary complexity and performance considerations.

The final implementation intentionally avoids external frameworks and libraries.

The website uses:

- HTML
- CSS
- Vanilla JavaScript
- System fonts
- Local images and documents

Project images below the initial viewport use lazy loading.

The hero image is prioritized because it is part of the initial page content.

### Modification

Frameworks such as React, Bootstrap, and Tailwind were considered unnecessary for the scope of Assignment 1.

I kept the implementation framework-free because the assignment focuses on HTML, CSS, JavaScript, clarity, and structure.

### What I learned

Performance improvements do not always require advanced optimization. Avoiding unnecessary dependencies and loading resources appropriately can keep a simple website lightweight.

---

## 11. Assignment Compliance Review

One of the most useful AI-assisted steps was performing a final comparison between the implementation and the original assignment requirements.

During this review, two missing requirements were identified:

1. Project images
2. A contact form containing Name, Email, and Message

At that point, the website already contained project descriptions and contact links, but those did not fully satisfy the written assignment specification.

The project cards were updated with images, and a complete contact form was added.

### What I learned

This demonstrated why final requirement verification is important. A website can look complete while still missing explicit grading requirements.

---

## 12. Suggestions I Did Not Follow Directly

AI suggestions were not automatically accepted.

### Frameworks

I did not introduce a JavaScript or CSS framework because it would add unnecessary complexity for this assignment.

### Excessive visual effects

I avoided complex animations, parallax effects, loading screens, and other visual effects because they did not support the assignment goals.

### Overly complex architecture

I kept the website as a static single-page application using separate HTML, CSS, and JavaScript files rather than creating an unnecessary build system.

### Fabricated portfolio information

When exact information about a project was not available, I avoided inventing project metrics, repository links, technologies, or achievements simply to make the portfolio appear more complete.

### What I learned

AI suggestions still require engineering judgment. A technically possible solution is not automatically the most appropriate solution for the requirements.

---

## 13. Benefits of Using AI

The main benefits were:

- Faster requirements analysis
- Clearer development planning
- Explanations of unfamiliar implementation details
- Faster debugging
- Accessibility suggestions
- Code-review assistance
- Identification of missing assignment requirements
- Documentation assistance

AI was particularly useful for explaining _why_ a change should be made rather than only providing code.

---

## 14. Challenges and Limitations

There were also challenges when using AI.

### Suggestions still required testing

AI-generated code could not be assumed to work correctly in my local project. Every change still needed to be tested in the browser.

### Context changed during development

As the implementation evolved, some earlier suggestions became outdated and needed to be adjusted.

### Small implementation errors still occurred

For example, the mobile-menu CSS contained a selector typo. AI assistance helped locate the issue, but debugging still required examining the actual implementation.

### Requirements had to remain authoritative

The assignment specification was more important than any design suggestion. During the final review, the original requirements revealed missing features that needed to be added.

---

## 15. Responsible AI Use and Modifications

I used AI as an assistant rather than treating its output as a finished submission.

My process was generally:

```text
Assignment requirement or development problem
        ↓
Ask AI for analysis or a possible implementation
        ↓
Read and understand the suggestion
        ↓
Implement the change incrementally
        ↓
Test it in the browser
        ↓
Identify problems or unnecessary complexity
        ↓
Modify the implementation
        ↓
Commit the completed milestone
```

I remained responsible for:

- Deciding which suggestions to use
- Typing and integrating changes into the project
- Testing functionality
- Fixing errors
- Verifying personal portfolio information
- Reviewing the assignment requirements
- Maintaining the Git repository
- Understanding the final implementation

This helped ensure that AI use remained transparent and consistent with the assignment's academic-integrity requirements.

---

## 16. Learning Outcomes

Using AI during this assignment helped me improve my understanding of:

### HTML

- Semantic page structure
- Forms
- Accessibility attributes
- Image attributes
- Document organization

### CSS

- CSS custom properties
- Grid
- Flexbox
- Responsive media queries
- Theme variables
- Focus states
- Reduced-motion preferences

### JavaScript

- DOM selection
- Event listeners
- Functions
- Class manipulation
- Attribute manipulation
- `localStorage`
- `matchMedia`
- Form handling

### Web Engineering Workflow

- Breaking requirements into milestones
- Using meaningful Git commits
- Testing incrementally
- Reviewing requirements before submission
- Separating HTML, CSS, and JavaScript responsibilities
- Considering accessibility and performance during implementation

---

## 17. Final Reflection

The most useful part of AI-assisted development in this assignment was not simply generating code. It was using AI throughout the development cycle for planning, explanation, debugging, and review.

I still needed to understand the code, test it, identify mistakes, compare the result against the assignment specification, and decide which suggestions were appropriate.

The final website therefore reflects both AI assistance and my own implementation, testing, modifications, and technical decisions.
