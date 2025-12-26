# Go + WebAssembly Pathfinding Visualizer

This project demonstrates how to integrate Go code compiled to WebAssembly (WASM) into a React application. It visualizes Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms on a grid.

## Algorithms in Go

The pathfinding logic resides in a Go module.

- **BFS (Breadth-First Search)**: Implemented using a queue. It explores neighbor nodes level by level, ensuring the shortest path is found in an unweighted grid.
- **DFS (Depth-First Search)**: Implemented using recursion or a stack. It explores as deep as possible along each branch before backtracking.

The Go code interacts with the JavaScript frontend via the `syscall/js` package, allowing it to read the grid state and call JavaScript functions to paint cells on the HTML Canvas.

## WebAssembly Conversion

To run Go code in the browser, it must be compiled to the WebAssembly format.

### 1. The Glue Code
Go provides a JavaScript file (`wasm_exec.js`) that acts as a bridge between the browser's WebAssembly runtime and the Go runtime. You must copy this file to your project's public directory.

Run this command in your terminal:

```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
```

*Note: Ensure this file is linked in your `index.html`.*

### 2. Compilation
To compile your Go code (`main.go`) into a `.wasm` binary, use the following environment variables:

```bash
GOOS=js GOARCH=wasm go build -o main.wasm main.go
```

Ensure the resulting `main.wasm` file is accessible to your React application (e.g., inside the `public/go-wasm-pkg/` directory).

## Running the React Project

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the Development Server**:
    ```bash
    npm start
    ```