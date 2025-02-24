import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: '#229799',       // Use #3D3BF3 as the primary color
        secondary: '#48CFCB',     // Use #9694FF as the secondary color
        text: '#424242',          // Assuming black for text (you can change this)
        bg: '#F5F5F5',            // Use #EBEAFF as the background color
        accent: '#FF2929',        // Use #FF2929 as an accent color (optional)
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
