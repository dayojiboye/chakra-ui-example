import React from "react";
import HeroImg from "assets/images/photo-1521500875084-9ad8838c5f4bbb.jfif";
import { Box, Button, Text } from "@chakra-ui/react";
import Wrapper from "./Wrapper";

export default function HeroSection() {
	return (
		<Box as="section">
			<Wrapper
				display="flex"
				flexDirection={["column", null, "row"]}
				alignItems="center"
				gap={["40px 0px", null, "0px 40px"]}
				paddingTop="40px"
				paddingBottom="100px"
			>
				<Box flex="1">
					<Text
						as="h1"
						fontSize={["32px", null, "40px"]}
						maxWidth={["600px", null, "300px"]}
						color="blue"
						fontWeight="700"
						textAlign={["center", null, "left"]}
					>
						HERO HEADER TEXT
					</Text>
					<Text
						as="p"
						fontSize={["16px", "18px"]}
						maxWidth={["600px", null, "500px"]}
						marginY="32px"
						textAlign={["center", null, "left"]}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu at sem finibus
						congue. Vestibulum nec hendrerit nisi. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Mauris quis arcu at sem finibus congue. Vestibulum nec hendrerit nisi.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu at sem finibus
						congue. Vestibulum nec hendrerit nisi.
					</Text>
					<Button
						as="a"
						href="/"
						variant="primary"
						fontSize={["16px", null, "20px"]}
						fontWeight="600"
						width="fit-content"
						marginX={["auto", null, "0px"]}
					>
						Create a Free Account
					</Button>
				</Box>

				<Box flex="1">
					<Box
						as="img"
						alt="Hero Section"
						src={HeroImg}
						width="100%"
						height="100%"
						borderRadius="5px"
					/>
				</Box>
			</Wrapper>
		</Box>
	);
}
