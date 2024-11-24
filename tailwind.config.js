/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}", "./node_modules/**/*"],
	theme: {
	  fontSize: {
		xs: "0.7rem", // Redusert fra standard 0.75rem
		sm: "0.9rem", // Økt fra standard 0.875rem
		lg: "1.3rem", // Justert for å passe til underoverskrifter
		xl: "1.5rem", // For bedre lesbarhet i overskrifter
	  },
	  extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
  };
  