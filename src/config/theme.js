import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	breakpoints: ["", "640px", "768px", "1024px", "1280px", "1536px"],
	colors: {
		white: "#fff",
		black: "#000",
		blue: "#083e9e",
		green: "#30c57b",
		silver: "silver",
		lightPurple: "#e3ecff",
	},
	fonts: {
		body: "Aller",
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: "500",
				padding: "16px 32px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "5px",
				transition: "none",
				whiteSpace: "wrap",
			},
			variants: {
				primary: {
					color: "white",
					bg: "green",
					border: "1px solid",
					"&:hover": {
						color: "blue",
						bg: "transparent",
						borderColor: "blue",
					},
				},
				light: {
					color: "blue",
					bg: "white",
				},
				outline: {
					color: "blue",
					bg: "transparent",
					border: "1px solid",
					borderColor: "blue",
					"&:hover": {
						color: "white",
						bg: "blue",
						borderColor: "transparent",
					},
				},
			},
			defaultProps: {
				size: null,
			},
		},
	},
});

export default theme;
