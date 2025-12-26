import React, { useEffect, useRef, useState } from 'react';

const CELL_SIZE = 8;
const CELL_STRIDE = CELL_SIZE + 1;
const GRID_COLS = 40;
const GRID_ROWS = 40;
const CANVAS_WIDTH = GRID_COLS * CELL_STRIDE + 1;
const CANVAS_HEIGHT = GRID_ROWS * CELL_STRIDE + 1;
const GRID_COLOR = "#CCCCCC";

// Color mapping matching Go constants
const COLORS = {
  0: 'white',  // Empty
  1: '#2c3e50',// Wall (Dark Blue)
  2: '#2ecc71',// Start (Green)
  3: '#e74c3c',// End (Red)
  4: '#3498db',// Visited (Blue)
  5: '#f1c40f' // Path (Yellow)
};

const Pathfinder = () => {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState('wall'); // 'start', 'end', 'wall'
  const [isReady, setIsReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const lastPosRef = useRef({ x: -1, y: -1 });
  const startNodeRef = useRef({ x: -1, y: -1 });
  const endNodeRef = useRef({ x: -1, y: -1 });
  const [hasStart, setHasStart] = useState(false);
  const [hasEnd, setHasEnd] = useState(false);
  const gridRef = useRef(new Array(GRID_COLS * GRID_ROWS).fill(0));

  useEffect(() => {
    // --- 1. THE BRIDGE: Define Global Function for Go ---
    window.jsPaintCell = (x, y, type) => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;

      // Update local grid state
      if (x >= 0 && x < GRID_COLS && y >= 0 && y < GRID_ROWS) {
        gridRef.current[y * GRID_COLS + x] = type;
      }

      // Paint the cell
      ctx.fillStyle = COLORS[type] || 'white';
      // +1 to step over the grid line
      ctx.fillRect(x * CELL_STRIDE + 1, y * CELL_STRIDE + 1, CELL_SIZE, CELL_SIZE);
    };

    // --- 2. LOAD WASM ---
    const loadWasm = async () => {
      if (!window.Go) {
        console.error("Go runtime not found. Did you add wasm_exec.js to index.html?");
        return;
      }

      const go = new window.Go();
      go.importObject.env = { 
        'jsPaintCell': window.jsPaintCell 
      };

      try {
        const result = await WebAssembly.instantiateStreaming(
          fetch("./src/go-wasm-pkg/main.wasm"), 
          go.importObject
        );
        
        go.run(result.instance);
        
        window.goInitGrid(GRID_COLS, GRID_ROWS);
        
        // Draw initial grid lines in JS
        drawGridLines();
        setIsReady(true);
        console.log("WASM Pathfinder Loaded");

      } catch (err) {
        console.error("Failed to load WASM:", err);
      }
    };

    loadWasm();

    return () => {
      delete window.jsPaintCell;
    };
  }, []);

  // --- Helper: Draw Grid Lines ---
  const drawGridLines = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath();
    
    for (let x = 0; x <= CANVAS_WIDTH; x += CELL_STRIDE) {
      ctx.moveTo(x, 0); ctx.lineTo(x, CANVAS_HEIGHT);
    }
    for (let y = 0; y <= CANVAS_HEIGHT; y += CELL_STRIDE) {
      ctx.moveTo(0, y); ctx.lineTo(CANVAS_WIDTH, y);
    }
    ctx.stroke();
  };

  // --- Interaction Handlers ---
  const getGridPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: Math.floor((e.clientX - rect.left) / CELL_STRIDE),
      y: Math.floor((e.clientY - rect.top) / CELL_STRIDE)
    };
  };

  const handleMouseDown = (e) => {
    if (!isReady) return;
    setIsDragging(true);
    const { x, y } = getGridPos(e);
    if (x < 0 || x >= GRID_COLS || y < 0 || y >= GRID_ROWS) return;

    // Handle single start/end point logic
    if (mode === 'start') {
      if (startNodeRef.current.x !== -1) {
        window.goHandleClick(startNodeRef.current.x, startNodeRef.current.y, 'erase');
      }
      startNodeRef.current = { x, y };
      setHasStart(true);
      if (endNodeRef.current.x === x && endNodeRef.current.y === y) {
        endNodeRef.current = { x: -1, y: -1 };
        setHasEnd(false);
      }
    } else if (mode === 'end') {
      if (endNodeRef.current.x !== -1) {
        window.goHandleClick(endNodeRef.current.x, endNodeRef.current.y, 'erase');
      }
      endNodeRef.current = { x, y };
      setHasEnd(true);
      if (startNodeRef.current.x === x && startNodeRef.current.y === y) {
        startNodeRef.current = { x: -1, y: -1 };
        setHasStart(false);
      }
    } else if (mode === 'wall') {
      if (startNodeRef.current.x === x && startNodeRef.current.y === y) {
        startNodeRef.current = { x: -1, y: -1 };
        setHasStart(false);
      }
      if (endNodeRef.current.x === x && endNodeRef.current.y === y) {
        endNodeRef.current = { x: -1, y: -1 };
        setHasEnd(false);
      }
    }

    window.goHandleClick(x, y, mode);
    lastPosRef.current = { x, y };
  };

  const handleMouseMove = (e) => {
    if (!isReady || !isDragging) return;
    if (mode !== 'wall') return;

    const { x, y } = getGridPos(e);
    if (x < 0 || x >= GRID_COLS || y < 0 || y >= GRID_ROWS) return;
    if (x === lastPosRef.current.x && y === lastPosRef.current.y) return;

    if (mode === 'wall') {
      if (startNodeRef.current.x === x && startNodeRef.current.y === y) {
        startNodeRef.current = { x: -1, y: -1 };
        setHasStart(false);
      }
      if (endNodeRef.current.x === x && endNodeRef.current.y === y) {
        endNodeRef.current = { x: -1, y: -1 };
        setHasEnd(false);
      }
    }

    window.goHandleClick(x, y, mode);
    lastPosRef.current = { x, y };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    lastPosRef.current = { x: -1, y: -1 };
  };

  const handleReset = () => {
    if (!isReady) return;

    window.goInitGrid(GRID_COLS, GRID_ROWS);
    gridRef.current.fill(0);
    startNodeRef.current = { x: -1, y: -1 };
    endNodeRef.current = { x: -1, y: -1 };
    setHasStart(false);
    setHasEnd(false);

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawGridLines();
  };

  const resetPreservingWalls = () => {
    const walls = [];
    let start = null;
    let end = null;

    for (let i = 0; i < gridRef.current.length; i++) {
      const type = gridRef.current[i];
      const x = i % GRID_COLS;
      const y = Math.floor(i / GRID_COLS);
      
      if (type === 1) walls.push({ x, y });
      else if (type === 2) start = { x, y };
      else if (type === 3) end = { x, y };
    }

    window.goInitGrid(GRID_COLS, GRID_ROWS);
    gridRef.current.fill(0);

    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawGridLines();
    }

    if (start) window.goHandleClick(start.x, start.y, 'start');
    if (end) window.goHandleClick(end.x, end.y, 'end');
    walls.forEach(({ x, y }) => window.goHandleClick(x, y, 'wall'));
  };

  const handleRunBFS = () => {
    resetPreservingWalls();
    window.goRunBFS();
  };

  const handleRunDFS = () => {
    resetPreservingWalls();
    window.goRunDFS();
  };

  const canRun = hasStart && hasEnd;

  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <div style={styles.group}>
          <button style={mode === 'start' ? styles.activeBtn : styles.btn} onClick={() => setMode('start')}>📍 Start</button>
          <button style={mode === 'end' ? styles.activeBtn : styles.btn} onClick={() => setMode('end')}>🏁 End</button>
          <button style={mode === 'wall' ? styles.activeBtn : styles.btn} onClick={() => setMode('wall')}>🧱 Wall</button>
        </div>
        
        <div style={styles.group}>
          <button style={canRun ? styles.runBtn : styles.disabledBtn} onClick={handleRunBFS} disabled={!canRun}>Run BFS</button>
          <button style={canRun ? styles.runBtn : styles.disabledBtn} onClick={handleRunDFS} disabled={!canRun}>Run DFS</button>
          <button style={styles.runBtn} onClick={handleReset}>Reset</button>
        </div>
      </div>

      <div style={styles.canvasWrapper}>
        {!isReady && <div style={styles.loading}>Loading WASM...</div>}
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={styles.canvas}
        />
      </div>
      
      <p style={styles.hint}>Click to place items. Select an algorithm to see Go execute in the browser.</p>
    </div>
  );
};

// Simple CSS-in-JS styles
const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' },
  controls: { display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' },
  group: { display: 'flex', gap: '0.5rem' },
  canvasWrapper: { position: 'relative' },
  canvas: { cursor: 'crosshair', display: 'block', border: '1px solid #000', maxWidth: '100%', height: 'auto' },
  btn: { padding: '0.5rem 1rem', border: '1px solid #000', background: '#fff', color: '#000', cursor: 'pointer', fontSize: '0.9rem' },
  activeBtn: { padding: '0.5rem 1rem', border: '1px solid #000', background: '#000', color: '#fff', cursor: 'pointer', fontSize: '0.9rem' },
  runBtn: { padding: '0.5rem 1rem', border: '1px solid #000', background: '#fff', color: '#000', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' },
  disabledBtn: { padding: '0.5rem 1rem', border: '1px solid #ccc', background: '#f9f9f9', color: '#ccc', cursor: 'not-allowed', fontSize: '0.9rem' },
  loading: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold' },
  hint: { fontSize: '0.85rem', color: '#666', textAlign: 'center' }
};

export default Pathfinder;