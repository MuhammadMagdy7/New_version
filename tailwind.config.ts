import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      colors: {
        primaryColor: "#00A6E9",
        primaryColorLight: "#F0FBFF",
        secondaryColor: "#FF56A5",
        paragraphColor: "#9095A1",
        whiteColor: "#fff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem"
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [

      'light',
    ],
  },
  darkMode: 'class', // تأكد من أنك تريد التحكم في الوضع الداكن باستخدام فئة
}
export default config