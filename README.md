# Likhith's Portfolio

Welcome to the source code of my personal portfolio website. This application is built with React and Vite, serving as a central hub for my professional experience, projects, and technical writings.

[Live Site](https://LikhithST.github.io/Likhith_Portfolio)

## 🚀 Features

- **GitHub Synchronization**: The "Projects" section dynamically fetches repositories and their `README.md` content from GitHub, acting as a "Source of Truth" to keep the portfolio automatically updated.
- **WebAssembly Demos**:
  - **Game of Life**: Implemented in Rust and compiled to WASM for high-performance state calculation.
  - **Pathfinder**: Implemented in Go and compiled to WASM to visualize BFS/DFS algorithms.
- **Article Rendering**: Custom layout for technical articles with syntax highlighting and Mermaid diagram support.
- **Responsive Design**: Mobile-friendly layout with a collapsible sidebar.

## 🛠️ Tech Stack

- **Core**: React 19, React Router 7
- **Build System**: Vite
- **Languages**: JavaScript, Rust (WASM), Go (WASM)
- **Utilities**: `react-markdown`, `mermaid`, `eslint`

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/LikhithST/Likhith_Portfolio.git
   cd portfolio-likhith
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

The project is configured to deploy to GitHub Pages:

```bash
npm run deploy
```