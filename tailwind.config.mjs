// tailwind.config.js
module.exports = {
	content: [
	  "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this to match your project structure
	],
	theme: {
	  extend: {},
	},
	plugins: [
	  require("daisyui"),
	],
	daisyui: {
	  themes: [
		{
		  light: {
			"primary": "oklch(57% 0.245 27.325)",
			"primary-content": "oklch(93% 0.034 272.788)",
			"secondary": "oklch(64% 0.222 41.116)",
			"secondary-content": "oklch(94% 0.028 342.258)",
			"accent": "oklch(87% 0.169 91.605)",
			"accent-content": "oklch(38% 0.063 188.416)",
			"neutral": "oklch(39% 0.141 25.723)",
			"neutral-content": "oklch(92% 0.004 286.32)",
			"base-100": "oklch(100% 0 0)",
			"base-200": "oklch(98% 0 0)",
			"base-300": "oklch(98% 0.001 106.423)",
			"base-content": "oklch(21% 0.006 285.885)",
			"info": "oklch(74% 0.16 232.661)",
			"info-content": "oklch(29% 0.066 243.157)",
			"success": "oklch(76% 0.177 163.223)",
			"success-content": "oklch(37% 0.077 168.94)",
			"warning": "oklch(82% 0.189 84.429)",
			"warning-content": "oklch(41% 0.112 45.904)",
			"error": "oklch(71% 0.194 13.428)",
			"error-content": "oklch(27% 0.105 12.094)",
			"border-radius": "0.5rem",
			"border-radius-field": "0.5rem",
			"border-radius-box": "1rem",
			"size-selector": "0.25rem",
			"size-field": "0.28125rem",
			"border": "1px",
			"depth": "1",
			"noise": "0",
		  },
		},
	  ],
	  darkTheme: false, // Set to false if you don't want a dark theme
	},
  };