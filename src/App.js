import Customer from "components/Customer";
import FinancialServices from "components/FinancialServices";
import HeroSection from "components/HeroSection";
import MedicalServices from "components/MedicalServices";
import SecuritySection from "components/SecuritySection";
import Layout from "./components/Layout";

export default function App() {
	return (
		<Layout>
			<HeroSection />
			<SecuritySection />
			<FinancialServices />
			<MedicalServices />
			<Customer />
		</Layout>
	);
}
