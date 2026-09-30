import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const core = JSON.parse(readFileSync(join(root, "src/tokens/core.json"), "utf8"));
const brand = core.brand;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: brand.color["blue-500"],
          foreground: brand.color["gray-50"],
        },
        secondary: {
          DEFAULT: brand.color["gray-100"],
          foreground: brand.color["gray-900"],
        },
        destructive: {
          DEFAULT: brand.color["red-500"],
          foreground: brand.color["gray-50"],
        },
        muted: {
          DEFAULT: brand.color["gray-100"],
          foreground: brand.color["gray-400"],
        },
        accent: {
          DEFAULT: brand.color["blue-50"],
          foreground: brand.color["blue-600"],
        },
        background: brand.color.white,
        foreground: brand.color["gray-900"],
        border: brand.color["gray-200"],
        ring: brand.color["blue-500"],
        card: {
          DEFAULT: brand.color.white,
          foreground: brand.color["gray-900"],
        },
        popover: {
          DEFAULT: brand.color.white,
          foreground: brand.color["gray-900"],
        },
      },
      spacing: {
        0: brand.space["0"],
        1: brand.space["1"],
        2: brand.space["2"],
        3: brand.space["3"],
        4: brand.space["4"],
        5: brand.space["5"],
        6: brand.space["6"],
        7: brand.space["7"],
        8: brand.space["8"],
        9: brand.space["9"],
        10: brand.space["10"],
        11: brand.space["11"],
        12: brand.space["12"],
      },
      borderRadius: {
        none: brand.radius.none,
        sm: brand.radius.sm,
        md: brand.radius.md,
        lg: brand.radius.lg,
        full: brand.radius.full,
      },
      fontFamily: {
        sans: brand.fontFamily.sans.split(",").map((item) => item.trim().replace(/^"|"$/g, "")),
      },
      fontSize: {
        xs: brand.fontSize.xs,
        sm: brand.fontSize.sm,
        md: brand.fontSize.md,
        lg: brand.fontSize.lg,
        xl: brand.fontSize.xl,
        "2xl": brand.fontSize["2xl"],
        "3xl": brand.fontSize["3xl"],
      },
      fontWeight: {
        normal: brand.fontWeight.normal,
        medium: brand.fontWeight.medium,
        semibold: brand.fontWeight.semibold,
        bold: brand.fontWeight.bold,
      },
      lineHeight: {
        tight: brand.lineHeight.tight,
        normal: brand.lineHeight.normal,
        relaxed: brand.lineHeight.relaxed,
      },
      boxShadow: {
        sm: brand.shadow.sm,
        md: brand.shadow.md,
        lg: brand.shadow.lg,
      },
    },
  },
  plugins: [],
};
