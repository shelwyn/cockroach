export function Roach({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Illustration of a cockroach, viewed from above"
      className={className}
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

      <circle cx="200" cy="230" r="148" fill="url(#glow)" filter="url(#soft)" />

      <g transform="rotate(-7 200 250)">
        {/* legs */}
        <g fill="none" stroke="#7f8d53" strokeLinecap="round">
          <g strokeWidth="7" strokeOpacity="0.85">
            <path d="M160 143 L128 118" />
            <path d="M152 164 L112 158" />
            <path d="M160 183 L124 212" />
            <path d="M240 143 L272 118" />
            <path d="M248 164 L288 158" />
            <path d="M240 183 L276 212" />
          </g>
          <g strokeWidth="3.6" strokeOpacity="0.8">
            <path d="M128 118 L104 90" />
            <path d="M112 158 L88 176" />
            <path d="M124 212 L106 250" />
            <path d="M272 118 L296 90" />
            <path d="M288 158 L312 176" />
            <path d="M276 212 L294 250" />
          </g>
          <g strokeWidth="2.4" strokeOpacity="0.65">
            <path d="M104 90 L93 74" />
            <path d="M88 176 L78 187" />
            <path d="M106 250 L100 268" />
            <path d="M296 90 L307 74" />
            <path d="M312 176 L322 187" />
            <path d="M294 250 L300 268" />
          </g>
          <g strokeWidth="1.8" strokeOpacity="0.5">
            <path d="M118 104 L110 97" />
            <path d="M104 143 L96 137" />
            <path d="M116 232 L108 226" />
            <path d="M282 104 L290 97" />
            <path d="M296 143 L304 137" />
            <path d="M284 232 L292 226" />
          </g>
        </g>

        {/* antennae */}
        <g className="antenna-l" fill="none" stroke="#c2cf8f" strokeOpacity="0.85" strokeLinecap="round">
          <path d="M190 109 C160 86 142 54 118 6" strokeWidth="2.4" />
          <path d="M187 114 C160 102 141 90 122 68" strokeWidth="1.3" strokeOpacity="0.35" />
        </g>
        <g className="antenna-r" fill="none" stroke="#c2cf8f" strokeOpacity="0.85" strokeLinecap="round">
          <path d="M210 109 C240 86 258 54 282 6" strokeWidth="2.4" />
          <path d="M213 114 C240 102 259 90 278 68" strokeWidth="1.3" strokeOpacity="0.35" />
        </g>

        {/* head */}
        <ellipse cx="200" cy="117" rx="16" ry="11" fill="#2b3119" />
        <circle cx="192" cy="113" r="3" fill="#e6edc0" />
        <circle cx="208" cy="113" r="3" fill="#e6edc0" />
        <circle cx="192" cy="113" r="1.2" fill="#171a0e" />
        <circle cx="208" cy="113" r="1.2" fill="#171a0e" />

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
        <path d="M200 172 L200 351" stroke="#0a0c05" strokeOpacity="0.55" strokeWidth="1.5" />
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
        <g stroke="#7f8d53" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round">
          <path d="M193 348 L187 368" />
          <path d="M207 348 L213 368" />
        </g>
      </g>
    </svg>
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
