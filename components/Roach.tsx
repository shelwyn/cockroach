"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const REACTIONS = ["startle", "headshake", "bristle"] as const;
type Reaction = (typeof REACTIONS)[number];

/** Legs are staggered slightly so the response reads as a gait, not a shudder. */
const LEG_STAGGER: Record<string, number> = {
  fl: 0,
  fr: 0.7,
  ml: 1.4,
  mr: 2.1,
  hl: 2.8,
  hr: 3.5,
};

/**
 * Hip (coxa) and knee pivot points, in viewBox units. These are set inline
 * because the CSS build collapses single-class selectors and would otherwise
 * let the generic `transform-origin` win.
 */
const JOINTS: Record<string, { hip: string; knee: string }> = {
  fl: { hip: "160px 143px", knee: "128px 118px" },
  fr: { hip: "240px 143px", knee: "272px 118px" },
  ml: { hip: "152px 164px", knee: "112px 158px" },
  mr: { hip: "248px 164px", knee: "288px 158px" },
  hl: { hip: "160px 183px", knee: "124px 212px" },
  hr: { hip: "240px 183px", knee: "276px 212px" },
};

function Leg({
  side,
  pair,
  coxa,
  knee,
  tip,
  spur,
}: {
  side: "l" | "r";
  pair: "f" | "m" | "h";
  coxa: string;
  knee: string;
  tip: string;
  spur: string;
}) {
  const id = `${pair}${side}`;
  const stagger = LEG_STAGGER[id] ?? 0;
  const joint = JOINTS[id];

  return (
    <g
      className={`roach-leg roach-leg-${side} roach-leg-${id}`}
      style={
        { "--stagger": stagger, transformOrigin: joint.hip } as CSSProperties
      }
    >
      <path d={coxa} strokeWidth="7" strokeOpacity="0.85" />
      <g
        className={`roach-shin roach-shin-${side} roach-shin-${id}`}
        style={{ transformOrigin: joint.knee }}
      >
        <path d={knee} strokeWidth="3.6" strokeOpacity="0.8" />
        <path d={tip} strokeWidth="2.4" strokeOpacity="0.65" />
        <path d={spur} strokeWidth="1.8" strokeOpacity="0.5" />
      </g>
    </g>
  );
}

export function Roach({ className = "" }: { className?: string }) {
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [tick, setTick] = useState(0);
  const nextReaction = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function provoke() {
    const next = REACTIONS[nextReaction.current % REACTIONS.length];
    nextReaction.current += 1;

    if (timer.current) clearTimeout(timer.current);
    setReaction(next);
    setTick((t) => t + 1);
    timer.current = setTimeout(() => setReaction(null), 1250);
  }

  return (
    <button
      type="button"
      onClick={provoke}
      aria-label="Cockroach specimen. Activate to startle it."
      className={`roach-trigger ${className}`}
    >
      <svg
        key={tick}
        viewBox="0 0 400 400"
        role="img"
        aria-label="Illustration of a cockroach, viewed from above"
        className={`roach-svg h-full w-full ${reaction ? `is-reacting react-${reaction}` : ""}`}
      >
        <defs>
          <linearGradient id="wing" x1="0.1" y1="0.05" x2="0.9" y2="0.95">
            <stop offset="0%" stopColor="#9aab66" />
            <stop offset="42%" stopColor="#525e35" />
            <stop offset="100%" stopColor="#1d2314" />
          </linearGradient>
          <linearGradient id="shield" x1="0" y1="0" x2="0.45" y2="1">
            <stop offset="0%" stopColor="#adbd76" />
            <stop offset="52%" stopColor="#5d6b39" />
            <stop offset="100%" stopColor="#2c3520" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e3a24a" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#e3a24a" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        <circle
          className="roach-glow"
          cx="200"
          cy="230"
          r="148"
          fill="url(#glow)"
          filter="url(#soft)"
        />

        <g transform="rotate(-7 200 250)">
          <g className="roach-body" style={{ transformOrigin: "200px 250px" }}>
            {/* legs */}
            <g fill="none" stroke="#7f8d53" strokeLinecap="round">
              <Leg
                side="l"
                pair="f"
                coxa="M160 143 L128 118"
                knee="M128 118 L104 90"
                tip="M104 90 L93 74"
                spur="M118 104 L110 97"
              />
              <Leg
                side="l"
                pair="m"
                coxa="M152 164 L112 158"
                knee="M112 158 L88 176"
                tip="M88 176 L78 187"
                spur="M104 143 L96 137"
              />
              <Leg
                side="l"
                pair="h"
                coxa="M160 183 L124 212"
                knee="M124 212 L106 250"
                tip="M106 250 L100 268"
                spur="M116 232 L108 226"
              />
              <Leg
                side="r"
                pair="f"
                coxa="M240 143 L272 118"
                knee="M272 118 L296 90"
                tip="M296 90 L307 74"
                spur="M282 104 L290 97"
              />
              <Leg
                side="r"
                pair="m"
                coxa="M248 164 L288 158"
                knee="M288 158 L312 176"
                tip="M312 176 L322 187"
                spur="M296 143 L304 137"
              />
              <Leg
                side="r"
                pair="h"
                coxa="M240 183 L276 212"
                knee="M276 212 L294 250"
                tip="M294 250 L300 268"
                spur="M284 232 L292 226"
              />
            </g>

            {/* head + antennae (the head group carries the antennae so they
                travel with it when it shakes) */}
            <g className="roach-head" style={{ transformOrigin: "200px 126px" }}>
              <g
                className="antenna-l"
                fill="none"
                stroke="#c2cf8f"
                strokeOpacity="0.85"
                strokeLinecap="round"
              >
                <path d="M190 109 C160 86 142 54 118 6" strokeWidth="2.4" />
                <path
                  d="M187 114 C160 102 141 90 122 68"
                  strokeWidth="1.3"
                  strokeOpacity="0.35"
                />
              </g>
              <g
                className="antenna-r"
                fill="none"
                stroke="#c2cf8f"
                strokeOpacity="0.85"
                strokeLinecap="round"
              >
                <path d="M210 109 C240 86 258 54 282 6" strokeWidth="2.4" />
                <path
                  d="M213 114 C240 102 259 90 278 68"
                  strokeWidth="1.3"
                  strokeOpacity="0.35"
                />
              </g>

              <ellipse cx="200" cy="117" rx="16" ry="11" fill="#2b3119" />
              <circle cx="192" cy="113" r="3" fill="#e6edc0" />
              <circle cx="208" cy="113" r="3" fill="#e6edc0" />
              <circle cx="192" cy="113" r="1.2" fill="#171a0e" />
              <circle cx="208" cy="113" r="1.2" fill="#171a0e" />
            </g>

            {/* pronotum */}
            <path
              d="M200 123 C231 123 247 136 247 151 C247 166 226 173 200 173 C174 173 153 166 153 151 C153 136 169 123 200 123 Z"
              fill="url(#shield)"
              stroke="#cddb9d"
              strokeOpacity="0.45"
              strokeWidth="1.4"
            />
            <path
              d="M200 129 C226 129 240 139 240 151 C240 161 223 167 200 167 C177 167 160 161 160 151 C160 139 174 129 200 129 Z"
              fill="none"
              stroke="#0c0e07"
              strokeOpacity="0.22"
              strokeWidth="1"
            />

            {/* wings */}
            <path
              d="M200 168 C176 172 161 205 162 246 C163 288 179 331 200 352 C221 331 237 288 238 246 C239 205 224 172 200 168 Z"
              fill="url(#wing)"
              stroke="#d2dfa2"
              strokeOpacity="0.28"
              strokeWidth="1.2"
            />

            {/* seam + veins */}
            <path
              d="M200 172 L200 351"
              stroke="#0a0c05"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <g fill="none" stroke="#e3edb8" strokeOpacity="0.14" strokeWidth="1">
              <path d="M200 186 C187 214 181 264 187 318" />
              <path d="M200 186 C213 214 219 264 213 318" />
              <path d="M200 255 C190 278 185 308 189 336" />
              <path d="M200 255 C210 278 215 308 211 336" />
            </g>
            <path
              d="M194 178 C176 204 167 240 169 278"
              fill="none"
              stroke="#eaf4c4"
              strokeOpacity="0.26"
              strokeWidth="1.6"
            />

            {/* cerci */}
            <g
              stroke="#7f8d53"
              strokeOpacity="0.7"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M193 348 L187 368" />
              <path d="M207 348 L213 368" />
            </g>
          </g>
        </g>
      </svg>

      <span className="sr-only" aria-live="polite">
        {reaction === "startle"
          ? "The cockroach jolts and skitters its legs."
          : reaction === "headshake"
            ? "The cockroach shakes its head and whips its antennae."
            : reaction === "bristle"
              ? "The cockroach braces and splays its legs."
              : ""}
      </span>
    </button>
  );
}

export function RoachMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <ellipse cx="16" cy="16" rx="5.5" ry="8" fill="currentColor" fillOpacity="0.15" />
        <path d="M12.5 9 C9 6 7 4 5.5 1.5" />
        <path d="M19.5 9 C23 6 25 4 26.5 1.5" />
        <path d="M11 13 L6 11 M21 13 L26 11 M11 17 L6 19 M21 17 L26 19 M12 21 L8 25 M20 21 L24 25" />
      </g>
    </svg>
  );
}
