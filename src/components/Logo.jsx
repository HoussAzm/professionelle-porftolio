export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="logo-mark">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#logo-gradient)" />
      <path d="M18 44 Q32 20 46 44" fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2.5" strokeLinecap="round" />
      <text x="32" y="41" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="24" fill="#ffffff">HA</text>
    </svg>
  );
}
