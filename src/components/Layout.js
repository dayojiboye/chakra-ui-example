import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Box as="main" width="100%" mt="77px">
				{children}
			</Box>
		</>
	);
}
