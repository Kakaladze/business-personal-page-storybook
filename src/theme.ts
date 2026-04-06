export const theme = {
  colors: {
    // backgrounds
    primary: '#0f172a',
    secondary: '#111827',
    cardBackground: '#1f2937',

    // accents
    accent: '#22c55e',
    accentSecond: '#15803D',
    accentHover: '#16a34a',

    // text
    text: {
        textPrimary: '#e5e7eb',
        textSecondary: '#9ca3af',
        textMuted: '#6b7280',
    },
    // borders / UI
    border: '#1E293B',
    borderHover: '#4b5563',

    // optional extras
    overlay: 'rgba(15, 23, 42, 0.8)',
    accentGlow: 'rgba(34, 197, 94, 0.2)',
  },

  fontFamily: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
  },

  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
    '2xl': '64px',
  },

  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
  },

  shadows: {
    card: '0 10px 30px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(34, 197, 94, 0.25)',
  },

  transitions: {
    default: 'all 0.3s ease',
  },
};

export type Theme = typeof theme;