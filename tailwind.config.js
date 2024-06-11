/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        lg: "1312px",
      },
    },
    fontFamily: {
      "inter-light": ["Inter Light", "sans-serif"],
      "inter-regular": ["Inter Regular", "sans-serif"],
      "inter-medium": ["Inter Medium", "sans-serif"],
      "inter-semibold": ["Inter Semibold", "sans-serif"],
      "inter-bold": ["Inter Bold", "sans-serif"],
    },
    boxShadow: {
      "shadow-primary": "0px 0px 0px 4px rgba(235, 233, 254, 1)",
      "shadow-secondary":
        "0px 0px 0px 4px rgba(242, 244, 247, 1), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      "shadow-error":
        "0px 0px 0px 4px rgba(255, 234, 241, 1), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      "shadow-small": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      "shadow-disabled": "0px 1px 2px 0px rgba(0, 0, 0, 0.10)",
      "shadow-block":
        "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
    },
    extend: {
      colors: {
        white: "rgba(255, 255, 255, 1)",
        orange: "#FB6514",
        "primary-text": "rgba(16, 24, 40, 1)",
        "secondary-text": "rgba(71, 84, 103, 1)",
        "secondary-text-2": "rgba(102, 112, 133, 1)",
        stroke: "rgba(208, 213, 221, 1)",
        "primary-bg": "rgba(255, 255, 255, 1)",
        "secondary-bg": "rgba(249, 250, 251, 1)",
        "secondary-bg-2": "rgba(242, 244, 247, 1)",
        error: "rgba(240, 68, 56, 1)",
        "secondary-error": "rgba(253, 162, 155, 1)",
        "positive-primary": "rgba(3, 152, 85, 1)",
        "positive-secondary": "rgba(209, 250, 223, 1)",
        "dark-50": "rgba(16, 24, 40, 0.5)",
        primary: "rgba(68, 76, 231, 1)",
        hovered: "rgba(53, 56, 205, 1)",
        focused: "rgba(45, 49, 166, 1)",
        disabled: "rgba(238, 244, 255, 1)",
        "blue-light": "rgba(42, 171, 238, 1)",
      },
      fontSize: {
        xs: ["0.75rem", "14.5px"],
        sm: ["0.875rem", "initial"],
        xl: ["1.25rem", "initial"],
        "2xl": ["1.5rem", "initial"],
        "3xl": ["1.875rem", "initial"],
        "4xl": ["2rem", "initial"],
        "5xl": ["3rem", "initial"],
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
}
