import React from 'react';
import { Link } from 'react-router-dom';

const WasmArticle = () => {
  return (
    <main className="main-content">
      <style>{`
        .article-body {
          max-width: 800px;
          line-height: 1.6;
          font-size: 1.05rem;
        }
        .article-body h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .article-body h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .article-body ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .article-body li {
          margin-bottom: 0.5rem;
        }
        .article-body code {
          background: #eee;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }
      `}</style>
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          WebAssembly in Action
        </h2>
        <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Technical Deep Dive • Jan 06, 2026
        </div>
      </header>

      <article className="article-body" style={{ marginTop: '2rem' }}>
        <p>
          WebAssembly (Wasm) is a binary instruction format designed to be a portable compilation target for high-level languages like C, C++, Rust, and Go. It enables deployment on the web for client and server applications, running at near-native speed alongside JavaScript.
        </p>

        <h3>When to Use WebAssembly</h3>
        <p>
          Wasm is not intended to replace JavaScript but to work alongside it. It is particularly useful in the following circumstances:
        </p>
        <ul>
          <li><strong>Performance-Critical Applications:</strong> Tasks like video editing, image recognition, and physics simulations where JavaScript's garbage collection and JIT compilation might introduce latency.</li>
          <li><strong>Porting Existing Codebases:</strong> Bringing mature C++ or Rust libraries to the web without rewriting them.</li>
          <li><strong>Polyglot Development:</strong> Allowing developers to write frontend logic in languages they are more comfortable with or that offer better safety guarantees (like Rust).</li>
        </ul>

        <h3>Case Study: Wasm in this Portfolio</h3>
        <p>
          Both projects in this portfolio follow the same fundamental pattern: <strong>WebAssembly handles the heavy computation, while JavaScript handles the rendering.</strong> However, they differ in how data is exchanged between the two worlds.
        </p>

        <h4>1. Conway's Game of Life (Rust)</h4>
        <p>
          The <Link to="/projects/wasm-game-of-life">wasm-game-of-life</Link> project uses a <strong>Shared Memory</strong> model.
        </p>
        <ul>
          <li><strong>Mechanism:</strong> Instead of copying data back and forth, the React component accesses the Wasm module's linear memory directly via a <code>Uint8Array</code>.</li>
          <li><strong>Benefit:</strong> This eliminates serialization overhead, making it ideal for high-frequency updates like a game loop where the entire grid state changes every frame.</li>
        </ul>

        <h4>2. Pathfinder Visualizer (Go)</h4>
        <p>
          The <Link to="/projects/path-finder">path-finder</Link> project uses an <strong>Interop Bridge</strong> model.
        </p>
        <ul>
          <li><strong>Mechanism:</strong> It relies on function calls crossing the boundary. JS calls Go to start the algorithm, and Go calls back into JS (<code>jsPaintCell</code>) to update specific cells.</li>
          <li><strong>Benefit:</strong> This approach is easier to implement for event-driven logic where specific updates happen sequentially, leveraging Go's <code>syscall/js</code> to interact with the host environment.</li>
        </ul>

        <h3>Trade-offs & Analysis</h3>

        <h4>Shared Memory (Rust Approach)</h4>
        <ul>
          <li><strong>Advantages:</strong>
            <ul>
              <li><strong>Zero-Copy Performance:</strong> Reading directly from Wasm memory avoids the expensive serialization overhead of passing data between JS and Wasm.</li>
              <li><strong>Throughput:</strong> Ideal for high-frequency updates (e.g., 60 FPS) involving large datasets, such as image buffers or simulation grids.</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li><strong>Complexity:</strong> Requires understanding of memory layout (pointers, offsets).</li>
              <li><strong>Safety Risks:</strong> If Wasm memory grows (reallocates), existing JavaScript views (like <code>Uint8Array</code>) become invalid and must be refreshed.</li>
            </ul>
          </li>
        </ul>

        <h4>Interop Bridge (Go Approach)</h4>
        <ul>
          <li><strong>Advantages:</strong>
            <ul>
              <li><strong>Simplicity:</strong> The programming model feels like standard function calls (RPC). Easier to write and debug for logic-heavy applications.</li>
              <li><strong>Direct DOM Access:</strong> Go's <code>syscall/js</code> allows manipulating the DOM directly from Wasm, simplifying the architecture for non-performance-critical UI updates.</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li><strong>Boundary Overhead:</strong> Crossing the JS-Wasm boundary is computationally expensive. Doing this thousands of times per frame (e.g., painting individual pixels via function calls) destroys performance.</li>
              <li><strong>Serialization:</strong> Passing complex objects often requires serialization (JSON), which adds latency.</li>
            </ul>
          </li>
        </ul>
      </article>
    </main>
  );
};

export default WasmArticle;