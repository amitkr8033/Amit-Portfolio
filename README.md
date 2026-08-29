# Amit Kumar - Full-Stack Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<br />

**A futuristic, high-performance developer portfolio featuring an Apple-style scroll-driven 300-frame image sequence canvas engine, 3D card stacking showcase, glowing neon gradient borders, and direct message inbox integration.**

[Explore Live Demo](https://amitkr8033.github.io) · [Report Bug](https://github.com/amitkr8033/amit_portfolio/issues) · [Request Feature](https://github.com/amitkr8033/amit_portfolio/issues)

</div>

---

## Key Features

- **Apple-Style 300-Frame Canvas Engine**: Ultra-smooth 60/120 FPS frame interpolation synchronized seamlessly with page scroll using HTML5 Canvas and linear interpolation (Lerp).
- **Interactive 3D Physical Card Stacking Deck**: Dynamic viewport-aware stacking cards in the Selected Projects section with progressive scaling, brightness dimming, and depth simulation.
- **Interactive Hover-to-Scroll Project Mockups**: Browser mockup windows with smooth CSS vertical scrolling on hover.
- **Glowing Futuristic Design System**: Custom neon gradient flowing borders, rotating conic-gradient border beams, and sleek dark mode glassmorphism.
- **Integrated Contact Form (AJAX Delivery)**: Asynchronous form submission powered by FormSubmit.co API directly to email inbox.
- **Sticky Radar WhatsApp Widget**: Floating instant-contact badge with live ping pulse and pre-filled inquiry text.
- **Lightning Fast Performance**: Built on React 19 and Vite 8 for sub-second hot module replacement and optimized bundle size.
- **100% Mobile & Tablet Responsive**: Seamlessly adapts across all viewport sizes with optimized mobile menu drawer.

---

## 🛠️ Tech Stack

| Category                    | Technology / Library                                                            |
| :-------------------------- | :------------------------------------------------------------------------------ |
| **Frontend Framework**      | [React 19](https://react.dev/)                                                  |
| **Build Tooling & Bundler** | [Vite 8](https://vitejs.dev/)                                                   |
| **Styling & Design System** | [Tailwind CSS 3.4](https://tailwindcss.com/) & Custom CSS3 Animations           |
| **Canvas & Animation**      | HTML5 2D Canvas API + Linear Interpolation (`requestAnimationFrame`)            |
| **Icons**                   | Devicons CDN & Inline SVG Icons                                                 |
| **Typography**              | Google Fonts (`Outfit`, `Plus Jakarta Sans`, `JetBrains Mono`, `Space Grotesk`) |
| **Form Backend API**        | [FormSubmit.co](https://formsubmit.co/) (AJAX endpoint)                         |

---

## Project Structure

```bash
amit_portfolio/
├── public/
│   ├── logoimg.png               # Branded logo
│   └── logoimg1.png
├── src/
│   ├── assets/
│   │   ├── Amit_images/          # 300 sequential animation frames (frame-001.jpg .. 300.jpg)
│   │   └── Projects/             # Screenshot previews for featured project cards
│   ├── components/
│   │   ├── Navbar.jsx            # Glassmorphic navbar with mobile drawer & socials
│   │   ├── Hero.jsx              # Typewriter role animation & action CTAs
│   │   ├── Skills.jsx            # 4-quadrant skill deck (Frontend, Backend, Languages, Tools)
│   │   ├── Experience.jsx        # Work history at N.D.S Infotech, impact metrics & achievements
│   │   ├── Projects.jsx          # 3D interactive card stacking deck & live project links
│   │   ├── Contact.jsx           # AJAX contact form & copyable email card
│   │   ├── Footer.jsx            # 4-column footer with quick links & smooth back-to-top
│   │   └── WhatsAppWidget.jsx    # Floating radar WhatsApp button
│   ├── App.jsx                   # Master canvas engine, scroll lerp loop & preloader
│   ├── index.css                 # Custom keyframes, border beams & glassmorphism
│   └── main.jsx                  # React 19 root entry
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started Locally

Follow these simple steps to run the portfolio locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/amitkr8033/amit_portfolio.git
cd amit_portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
```

The optimized production bundle will be generated inside the `dist/` directory.

---

## Featured Projects Highlighted in Portfolio

1. **Harsh Enterprises** — Premium Products & Distribution Architecture
   - _Tech:_ React.js, Node.js, Express, MongoDB, Tailwind CSS
   - _Live:_ [harshdistributors.com](https://harshdistributors.com/)

2. **FOT Engineers** — Industrial & Precision Engineering Portal
   - _Tech:_ React.js, Tailwind CSS, Node.js, REST APIs
   - _Live:_ [ndsinfotechitsolution.com/nds/fabotechEngineers](https://ndsinfotechitsolution.com/nds/fabotechEngineers/)

3. **Career Buddy** — Career Acceleration & EdTech Platform
   - _Tech:_ MERN Stack, Redux, Cloud Storage, Tailwind CSS
   - _Live:_ [ndsinfotechitsolution.com/nds/careerBuddy](https://ndsinfotechitsolution.com/nds/careerBuddy/)

---

## Contact & Connect

- **Author:** Amit Kumar
- **GitHub:** [@amitkr8033](https://github.com/amitkr8033)
- **LinkedIn:** [Amit Kumar](https://www.linkedin.com/in/amit-kumar-25b8b02a7)
- **Email:** [amit.kumar439306@gmail.com](mailto:amit.kumar439306@gmail.com)

---

<div align="center">

Made with by [Amit Kumar](https://github.com/amitkr8033) · © 2026 All Rights Reserved

</div>
