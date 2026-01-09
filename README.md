# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# My Travel Agency Website (Travlr)

## 🛠 Tech Stack

For this project, I constructed the application using a modern frontend stack consisting of:
* **React**
* **TypeScript**
* **Vite**

In terms of styling and UI components, I integrated elements from **Bootstrap**, though I frequently found it necessary to rewrite them to ensure they functioned correctly within the React/TypeScript environment. Additionally, I incorporated a specialized component from **Reactbits** to add unique interactivity.

---

## 🚀 Where I Started

My development process began with the core layout components to establish the look and feel of the site:

1.  **The Navbar:** I started by taking the standard Navbar structure from Bootstrap. I customized it significantly to ensure it aligned with my personal design style and project requirements.
2.  **The Footer:** I decided to build the footer completely from scratch (custom) rather than using a pre-made component. This was the first major challenge I ran into during the project. However, overcoming this hurdle helped me learn a great deal about CSS layout and positioning.

By completing these two components early, I established a reusable template. This approach really helped me ease into the project, as I could simply leave space between the header and footer to build out the rest of the website's pages.

---

## 💡 Development Process & Challenges

As I mentioned, my initial challenges involved setting up the template and adapting library components. However, as I built specific pages, I encountered—and solved—several other interesting problems.

### 🏠 The Homepage
I focused first on the Homepage to set a modern tone for the user experience.
* **Carousel:** I implemented a carousel at the very top of the website to immediately grab the user's attention.
* **Trip Cards:** I customized cards to present various trips and arranged them into a clean grid layout.
* **Typography:** I spent time refining the titles and paragraphs to ensure they looked modern and consistent across every section.
* **Key Features & Animations:** I created a fully custom "Key Features" section. This is where I learned how to implement hover animations. I was proud of this as it was my first fully custom component besides the footer. I later applied this hover logic to the cards as well.
* **Dynamic Rendering:** A major learning point here was using the `.map()` function. This allowed me to render items dynamically rather than having hardcoded HTML, making the code much cleaner.

### 📍 Destinations Page
Next, I moved on to the Destinations page.
* **Heavy Customization:** I initially tried to use standard Bootstrap cards, but I ended up customizing them so heavily that only about 5% of the original Bootstrap code remains. While this was time-consuming, I learned a lot about styling and invested significant effort into making them look unique.
* **The Grid:** Once the cards were designed, arranging them into a responsive grid was very fast—it only took me about 5 minutes.
* **View More Button:** I implemented a "View More" button (currently a visual element). Since I primarily reused the logic from the Homepage button, this feature did not take much time to add.
* **Images:** The most time-consuming part of this section was finalizing the cards and ensuring the correct images were mapped to each specific card.

### 🌟 Experiences Page
This page probably took the longest to complete because I had to learn many new concepts and overcome specific technical hurdles.
* **Complex Card Layouts:** The hardest part was implementing a list *inside* a card and customizing that specific card design.
* **Custom List Icons:** I found it very difficult to change the standard list "dot" to a custom image. I eventually solved this with the help of AI to get the syntax right. Because of the heavy customization, these felt like completely custom components.
* **Striped Lists:** I also implemented a standard list on the page which I didn't customize as heavily. However, I added a "striped" effect and a hover state so that each row highlights when the cursor is over it, making it much easier for the customer to read line-by-line.

### ℹ️ About Us Page
* **Reactbits Animation:** When making this page, I learned about the **Reactbits** library. I implemented a "counting-up" component but reversed the logic so it counts the price *down* until it hits the new sale price.
* **Content Generation:** I wrote the company description using AI. Afterward, I added a picture to the right of the text. I also had to shorten the text significantly because my teacher advised me that the original version was too long.
* **Employee Section:** I added cards from Bootstrap for the employees. I chose not to change these too much and simply arranged them into a neat grid.
* **Our Values:** I added an "Our Values" tab to reflect on what the company cares about (with text generated by AI). Shortly after, I added quick stats to the page, such as the amount of destinations, customer satisfaction ratings, and total customer count.

---

## 📹 Other Information

I have uploaded a video demonstration to the website. In this video, I explain further details about the code and give a full run-through of the website, presenting all its features in action.