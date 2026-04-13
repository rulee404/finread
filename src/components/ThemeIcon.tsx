"use client";

import type { ThemeId } from "@/lib/themes";

interface Props {
  theme: ThemeId;
  size?: number;
  className?: string;
}

function AIIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain outline */}
      <circle
        cx="40"
        cy="40"
        r="28"
        stroke="url(#ai-grad)"
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Neural network nodes */}
      {[
        [40, 20],
        [56, 28],
        [60, 44],
        [52, 58],
        [40, 62],
        [28, 58],
        [20, 44],
        [24, 28],
      ].map(([cx, cy], i) => (
        <circle
          key={`outer-${i}`}
          cx={cx}
          cy={cy}
          r="3"
          fill="#818cf8"
          opacity="0.6"
          style={{
            animation: `ai-pulse 2.5s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}

      {/* Inner nodes */}
      {[
        [40, 32],
        [48, 38],
        [46, 50],
        [34, 50],
        [32, 38],
      ].map(([cx, cy], i) => (
        <circle
          key={`inner-${i}`}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="#a78bfa"
          opacity="0.8"
          style={{
            animation: `ai-pulse 2s ease-in-out ${i * 0.4 + 0.2}s infinite`,
          }}
        />
      ))}

      {/* Central core */}
      <circle cx="40" cy="42" r="5" fill="url(#ai-grad)" opacity="0.9">
        <animate
          attributeName="r"
          values="4.5;6;4.5"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Circuit lines */}
      {[
        "M40,32 L40,20",
        "M48,38 L56,28",
        "M46,50 L52,58",
        "M34,50 L28,58",
        "M32,38 L24,28",
        "M40,32 L48,38",
        "M48,38 L46,50",
        "M46,50 L34,50",
        "M34,50 L32,38",
        "M32,38 L40,32",
        "M40,42 L40,32",
        "M40,42 L48,38",
        "M40,42 L46,50",
        "M40,42 L34,50",
        "M40,42 L32,38",
      ].map((d, i) => (
        <path
          key={`line-${i}`}
          d={d}
          stroke="#818cf8"
          strokeWidth="0.8"
          opacity="0.3"
          strokeDasharray="60"
          style={{
            animation: `ai-circuit 3s linear ${i * 0.15}s infinite`,
          }}
        />
      ))}

      <defs>
        <radialGradient id="ai-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function DeFiIcon({ size }: { size: number }) {
  const nodes = [
    { cx: 40, cy: 16, delay: 0 },
    { cx: 60, cy: 28, delay: 0.3 },
    { cx: 60, cy: 52, delay: 0.6 },
    { cx: 40, cy: 64, delay: 0.9 },
    { cx: 20, cy: 52, delay: 1.2 },
    { cx: 20, cy: 28, delay: 1.5 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rotating outer ring */}
      <g style={{ transformOrigin: "40px 40px", animation: "defi-rotate 20s linear infinite" }}>
        <circle cx="40" cy="40" r="30" stroke="#34d399" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 6" />
      </g>

      {/* Hex connections */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <line
            key={`conn-${i}`}
            x1={n.cx}
            y1={n.cy}
            x2={next.cx}
            y2={next.cy}
            stroke="#34d399"
            strokeWidth="1"
            opacity="0.25"
          />
        );
      })}

      {/* Cross connections */}
      {[
        [0, 2], [0, 4], [1, 3], [1, 5], [2, 4], [3, 5],
      ].map(([a, b], i) => (
        <line
          key={`cross-${i}`}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="#10b981"
          strokeWidth="0.6"
          opacity="0.15"
        />
      ))}

      {/* Chain link symbol in center */}
      <g style={{ transformOrigin: "40px 40px" }}>
        <ellipse
          cx="36"
          cy="38"
          rx="8"
          ry="5"
          stroke="#34d399"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          transform="rotate(-30 36 38)"
        />
        <ellipse
          cx="44"
          cy="42"
          rx="8"
          ry="5"
          stroke="#34d399"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          transform="rotate(-30 44 42)"
        />
      </g>

      {/* Nodes with pulse */}
      {nodes.map((n, i) => (
        <g key={`node-${i}`}>
          <circle cx={n.cx} cy={n.cy} r="3" fill="#34d399" opacity="0.7">
            <animate
              attributeName="r"
              values="3;4.5;3"
              dur="2.5s"
              begin={`${n.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2.5s"
              begin={`${n.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={n.cx} cy={n.cy} r="7" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0">
            <animate
              attributeName="r"
              values="3;10"
              dur="2.5s"
              begin={`${n.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0"
              dur="2.5s"
              begin={`${n.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function SpaceIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stars */}
      {[
        { x: 12, y: 14, d: 0 },
        { x: 68, y: 20, d: 1.2 },
        { x: 15, y: 60, d: 2.4 },
        { x: 65, y: 62, d: 0.8 },
        { x: 50, y: 10, d: 1.8 },
        { x: 10, y: 38, d: 3.0 },
        { x: 70, y: 42, d: 0.4 },
      ].map((s, i) => (
        <circle
          key={`star-${i}`}
          cx={s.x}
          cy={s.y}
          r="1"
          fill="#f59e0b"
          opacity="0.3"
          style={{
            animation: `space-star 3s ease-in-out ${s.d}s infinite`,
          }}
        />
      ))}

      {/* Orbit rings */}
      <ellipse
        cx="40"
        cy="42"
        rx="26"
        ry="10"
        stroke="#f59e0b"
        strokeWidth="0.6"
        opacity="0.15"
        transform="rotate(-20 40 42)"
        strokeDasharray="3 5"
        style={{ transformOrigin: "40px 42px", animation: "defi-rotate 30s linear infinite" }}
      />
      <ellipse
        cx="40"
        cy="42"
        rx="22"
        ry="8"
        stroke="#fbbf24"
        strokeWidth="0.5"
        opacity="0.1"
        transform="rotate(15 40 42)"
        strokeDasharray="2 4"
        style={{ transformOrigin: "40px 42px", animation: "defi-rotate 25s linear reverse infinite" }}
      />

      {/* Planet / Central body */}
      <circle cx="40" cy="42" r="12" fill="url(#space-planet-grad)" opacity="0.8">
        <animate
          attributeName="r"
          values="11.5;12.5;11.5"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="40" cy="42" r="14" stroke="#f59e0b" strokeWidth="0.8" opacity="0.2">
        <animate
          attributeName="r"
          values="14;16;14"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.2;0.1;0.2"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Rocket */}
      <g style={{ transformOrigin: "40px 42px", animation: "space-orbit 8s linear infinite" }}>
        <g transform="translate(40, 16)">
          {/* Rocket body */}
          <path
            d="M0,-6 L2,-2 L2,3 L0,5 L-2,3 L-2,-2 Z"
            fill="#fbbf24"
            opacity="0.9"
          />
          {/* Flame */}
          <path
            d="M-1.5,4 L0,9 L1.5,4"
            fill="#ef4444"
            opacity="0.7"
            style={{
              transformOrigin: "0px 4px",
              animation: "space-thrust 0.8s ease-in-out infinite",
            }}
          />
          {/* Window */}
          <circle cx="0" cy="-1" r="1" fill="#080a0f" opacity="0.6" />
        </g>
      </g>

      {/* Small moon */}
      <g style={{ transformOrigin: "40px 42px", animation: "space-orbit 12s linear reverse infinite" }}>
        <circle cx="62" cy="42" r="3" fill="#d97706" opacity="0.5">
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <defs>
        <radialGradient id="space-planet-grad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function ThemeIcon({ theme, size = 80, className }: Props) {
  return (
    <div className={`inline-flex items-center justify-center ${className ?? ""}`}>
      {theme === "ai" && <AIIcon size={size} />}
      {theme === "defi" && <DeFiIcon size={size} />}
      {theme === "space" && <SpaceIcon size={size} />}
    </div>
  );
}
