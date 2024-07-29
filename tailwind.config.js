/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
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
        grayColors: {
          100: "hsl(var(--gray-1))",
          200: "hsl(var(--gray-2))",
          300: "hsl(var(--gray-3))",
          400: "hsl(var(--gray-4))",
          500: "hsl(var(--gray-5))",
          600: "hsl(var(--gray-6))",
          700: "hsl(var(--gray-7))",
          800: "hsl(var(--gray-8))",
          900: "hsl(var(--gray-9))",
        },
        grayGreenColors: {
          50: "hsl(var(--green-gray-half))",
          100: "hsl(var(--green-gray-1))",
          200: "hsl(var(--green-gray-2))",
          300: "hsl(var(--green-gray-3))",
          400: "hsl(var(--green-gray-4))",
          500: "hsl(var(--green-gray-5))",
          600: "hsl(var(--green-gray-6))",
          700: "hsl(var(--green-gray-7))",
          800: "hsl(var(--green-gray-8))",
          900: "hsl(var(--green-gray-9))",
        },
        "soft-primary": "hsl(var(--soft-primary))",
        "hard-primary": "hsl(var(--hard-primary))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
