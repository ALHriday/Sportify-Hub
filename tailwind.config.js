import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        secondary: "#32CD32",
        accent: "#FF6F00",
        neutral: "#1C1C1C",
        base100: "#F5F5F5",
        info: "#3ABFF8",
        success: "#2E8B57",
        warning: "#FBBD23",
        error: "#FF3B3B",
      },
    },  
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'emerald', 'corporate', 'bumblebee', 'synthwave', 'retro']
  }
}