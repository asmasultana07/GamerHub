#  GameHub
**Project Name :** Gamehub  — A Game Library

An engaging, interactive online library designed for discovering, exploring, and supporting independent game developers. 
Users can seamlessly browse a curated collection of indie games, view comprehensive technical and gameplay specifications, and quickly install their favorite titles.
The primary mission of **Gamehub** is to bridge the gap between passionate independent game developers and eager players.

**Github Repo Link :** https://github.com/asmasultana07/GamerHub.git  
**Live URL :** https://gamehub-f8d2f.web.app 

---

## Key Features

- **User Authentication :** Secure Firebase authentication handling user registration, login, and session persistence.
- **Responsive Design :** Fully responsive and adaptive layouts built with Tailwind CSS to ensure a flawless experience across mobile, tablet, and desktop screens.
- **Game Details Pages :** Dedicated, dynamic pages for each game showcasing specific gameplay details, technical requirements, and key features.
- Developer Page : A curated, separate section highlighting independent game developers, their creative profiles, and their portfolios.
- **Smooth Routing :** Client-side navigation managed via React Router, featuring protected private routing restricted to authenticated Firebase users.
- **Engaging Animations :** Fluid UI transitions and interactive elements brought to life using Motion (formerly Framer Motion.
- **Deployment :** Hosted and deployed seamlessly on Firebase for reliable, fast-loading live access.
- **Smart Filtering & Searching :** Instantly isolate games by specific tags, genres, or developer names using an optimized client-side search engine.
- **One-Click Installations :** Integrated handling for direct downloads or links to developer-supported launch platforms.

---
## 🛠️ npm Packages Used

- `react` / `react-dom`
- `react-router-dom`
- `firebase`
- `tailwindcss`
- `framer-motion` (Motion)
- `react-spring`
- `lucide-react` (or `react-icons`)

---
##  Built With & npm Packages Used

This project leverages a modern JavaScript stack to ensure rich interactivity, fast rendering, and reliable state management. Below are the key `npm` packages driving the application:

#### Core Framework & State
- **`react` / `react-dom`**: Powers the component-based, high-performance UI architecture.
- **`react-router-dom`**: Handles declarative routing, dynamic parameter matching (`/game/:id`), and smooth view transitions without page refreshes.

### UI Styling & Layout
- **`styled-components`** (or **`tailwindcss`**): Leveraged for highly modular, scoped components and reactive layouts.
- **`lucide-react`** (or **`react-icons`**): Supplies a clean, scalable, and modern vector iconography suite across the platform.

### Data Fetching & State Synchronization
- **`axios`**: Manages asymmetric asynchronous HTTP requests to game catalogs and developer API microservices.
- **`framer-motion`**: Implements elegant, hardware-accelerated animations for hover states, modal popups, and list reorderings.

---

## 🔧 Getting Started

Follow these instructions to set up and run a local instance of Gamehub on your machine.

### Prerequisites
Make sure you have Node.js (v16.x or higher) and npm installed.
