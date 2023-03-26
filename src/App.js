import HeroSection from "components/HeroSection";
import SecuritySection from "components/SecuritySection";
import Layout from "./components/Layout";

export default function App() {
	return (
		<Layout>
			<HeroSection />
			<SecuritySection />
		</Layout>
	);
}
