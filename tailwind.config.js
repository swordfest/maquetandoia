/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 16s linear infinite",
        "spin-slow-grad": "spin 120s linear infinite",
      },
      transformOrder: {
        rotate: 1,
        scale: 2,
      },
      backgroundImage: {
        'arrow-up-right': "url(/public/arrow-up-right.svg)",
        'vscode': "url(/public/vscode.svg)",
        'jetbrains': "url(/public/jetbrains.svg)",
        'ide': "url(/public/ide.svg)",
        'logo-mono': "url(/public/logo-mono.svg)",
      }
    },
  },
  plugins: [],
};
