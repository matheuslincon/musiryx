module.exports = {
    mode: 'jit',
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
      extends:{},
    },
    variants: {
      extends:{},
    },
    plugins:[
      require("tailwind-scrollbar"),
      require("tailwind-scrollbar-hide"),
      require("@tailwindcss/forms"),
    ],
  }
