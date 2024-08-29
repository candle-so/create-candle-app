import type { Config } from "tailwindcss";

export const candleColors = {
  dark: "#0D122D",
  light: "#F9FBFB",
  primary: {
    "50": "#F3EEFD",
    "100": "#D9CCF9",
    "200": "#C7B3F6",
    "300": "#AD90F2",
    "400": "#9D7AF0",
    "500": "#8559EC",
    "600": "#7951D7",
    "700": "#5E3FA8",
    "800": "#493182",
    "900": "#382563",
  },
  secondary: {
    "50": "#E7F9F8",
    "100": "#B5ECE8",
    "200": "#91E3DD",
    "300": "#5ED6CE",
    "400": "#3FCEC5",
    "500": "#0FC2B6",
    "600": "#0EB1A6",
    "700": "#0B8A81",
    "800": "#086B64",
    "900": "#06514C",
  },
  accent: {
    "50": "#FDF3EE",
    "100": "#F8DBCA",
    "200": "#F4C9B1",
    "300": "#EFB18D",
    "400": "#ECA177",
    "500": "#E78A55",
    "600": "#D27E4D",
    "700": "#A4623C",
    "800": "#7F4C2F",
    "900": "#613A24",
  },
  neutral: {
    "50": "#F6F7F9",
    "100": "#E4E7ED",
    "200": "#D7DCE5",
    "300": "#C5CCD9",
    "400": "#BAC2D1",
    "500": "#A9B3C6",
    "600": "#9AA3B4",
    "700": "#787F8D",
    "800": "#5D626D",
    "900": "#474B53",
  },
  positive: {
    "50": "#EEF8ED",
    "100": "#CBEBC6",
    "200": "#B2E1AA",
    "300": "#8FD384",
    "400": "#79CA6C",
    "500": "#58BD47",
    "600": "#50AC41",
    "700": "#3E8632",
    "800": "#306827",
    "900": "#254F1E",
  },
  negative: {
    "50": "#FDEDEC",
    "100": "#F7C6C3",
    "200": "#F4AAA5",
    "300": "#EE837C",
    "400": "#EB6B63",
    "500": "#E6463C",
    "600": "#D14037",
    "700": "#A3322B",
    "800": "#7F2721",
    "900": "#611D19",
  },
  warn: {
    "50": "#FCF6EA",
    "100": "#F5E3BF",
    "200": "#F1D5A0",
    "300": "#EAC274",
    "400": "#E6B659",
    "500": "#E0A430",
    "600": "#CC952C",
    "700": "#9F7422",
    "800": "#7B5A1A",
    "900": "#5E4514",
  },
};

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        anonymous_pro: ["Anonymous Pro", "monospace"],
      },
      colors: {
        cndl: candleColors,

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
          // "0%": { transform: "translateX(100%)" },
          // "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
