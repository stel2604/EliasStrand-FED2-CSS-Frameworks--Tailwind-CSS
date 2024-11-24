/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './**/*.{html,js}', // Søk gjennom alle mapper for HTML- og JS-filer
	  './node_modules/**/*' // Inkluderer innhold fra node_modules hvis nødvendig
	],
	theme: {
	  extend: {
		fontSize: {
		  xs: "0.7rem", // Redusert fra standard 0.75rem
		  sm: "0.9rem", // Økt fra standard 0.875rem
		  lg: "1.3rem", // Justert for å passe til underoverskrifter
		  xl: "1.5rem", // For bedre lesbarhet i overskrifter
		},
		colors: {
		  primary: "#3490dc", // Eksempel på en tilpasset farge
		  secondary: "#ffed4a",
		  danger: "#e3342f",
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'), // Legger til støtte for typografi
	],
  };
  