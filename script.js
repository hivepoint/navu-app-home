"use strict";

const Radius = 2;
const LineDistance = 100;
class ConnectedDots extends HTMLElement {
  constructor() {
    super();
    this._mousePos = { x: -1000, y: -1000 };
    this._left = 0;
    this._top = 0;
    this._width = 0;
    this._height = 0;
    this._dots = [];
    this._count = 0;
    this._animating = false;
    this._pendingResize = false;
    this._root = this.attachShadow({ mode: 'open' });
    this._root.innerHTML = `
    <style>
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #242424;
        z-index: -1;
      }
      canvas {
        display: block;
      }
    </style>
    <canvas></canvas>
    `;
  }
  resize() {
    if (!this._pendingResize) {
      this._pendingResize = true;
      setTimeout(() => {
        this._pendingResize = false;
        const { width, height, left, top } = this.getBoundingClientRect();
        const update = (window.innerWidth < 600) ? (width !== this._width) : ((width !== this._width) || (height !== this._height) || (left !== this._left) || (top !== this._top));
        if (update) {
          this._setup();
        }
      }, 1000);
    }
  }
  connectedCallback() {
    this._canvas = this._root.querySelector('canvas');
    this._canvas.addEventListener('mousemove', (event) => {
      this._mousePos = this._getMousePos(event);
    }, false);
    this._setup();
    this._animate();
    window.addEventListener('resize', () => this.resize(), { passive: true });
  }
  _getMousePos(event) {
    return {
      x: event.clientX - this._left,
      y: event.clientY - this._top
    };
  }
  _xScale(n) {
    if (this._count) {
      return Math.min(this._width, n * this._width / this._count);
    }
    return 0;
  }
  _colorRampLines(distance) {
    const opacity = Math.max(0, Math.min(0.3, (-0.3 / LineDistance) * distance + 0.3));
    return `rgba(255,255,255,${opacity})`;
  }
  _colorRampLinesHover(distance) {
    const opacity = Math.max(0, Math.min(1, (-1 / LineDistance) * distance + 1));
    return `rgba(17,146,238,${opacity})`;
  }
  _setup() {
    const { width, height, left, top } = this.getBoundingClientRect();
    this._left = left;
    this._top = top;
    this._width = width;
    this._height = height;
    this._canvas.width = width;
    this._canvas.height = height;
    this._dots = [];
    this._count = Math.min(250, (height + width) / 14);
    for (let i = 0; i < this._count; i++) {
      const randRadius = Math.random() * Radius;
      this._dots.push({
        x: this._xScale(i),
        y: (Math.random() * height),
        radius: randRadius,
        direction: (Math.random() * (Math.PI * 2)),
        speed: randRadius * 0.2
      });
    }
  }
  _animate() {
    if (!this._animating) {
      this._animating = true;
      window.requestAnimationFrame(() => this._tick());
    }
  }
  _tick() {
    if (!this._ctx) {
      this._ctx = this._canvas.getContext('2d');
    }
    const width = this._width;
    const height = this._height;
    const ctx = this._ctx;
    const dots = this._dots;
    ctx.clearRect(0, 0, width, height);
    dots.forEach((d) => {
      d.direction = d.direction + ((Math.random() * .1) - 0.05);
      d.x = d.x + Math.cos(d.direction) * d.speed;
      d.y = d.y + Math.sin(d.direction) * d.speed;
      if (d.x > (width + d.radius)) {
        d.x = 0 - d.radius;
      }
      if (d.x < (0 - d.radius)) {
        d.x = width + d.radius;
      }
      if (d.y > (height + d.radius)) {
        d.y = 0 - d.radius;
      }
      if (d.y < (0 - d.radius)) {
        d.y = height + d.radius;
      }
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#1292ee';
      ctx.fill();
      ctx.closePath();
      // LINES
      dots.forEach((dot) => {
        const distance = Math.sqrt(((d.x - dot.x) * (d.x - dot.x)) + ((d.y - dot.y) * (d.y - dot.y)));
        if (distance < LineDistance) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(d.x, d.y);
          ctx.strokeStyle = this._colorRampLines(distance);
          ctx.stroke();
          ctx.closePath();
        }
      });
      const mouseDistance = Math.sqrt(((d.x - this._mousePos.x) * (d.x - this._mousePos.x)) + ((d.y - this._mousePos.y) * (d.y - this._mousePos.y)));
      if (mouseDistance < LineDistance) {
        ctx.beginPath();
        ctx.moveTo(this._mousePos.x, this._mousePos.y);
        ctx.lineTo(d.x, d.y);
        ctx.strokeStyle = this._colorRampLinesHover(mouseDistance);
        ctx.stroke();
        ctx.closePath();
      }
    });
    window.requestAnimationFrame(() => this._tick());
  }
}
customElements.define('connected-dots', ConnectedDots);