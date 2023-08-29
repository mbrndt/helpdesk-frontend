import "./globals.css";

import Header from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata = {
	title: "Pikurate Helpdesk",
	description:
		"Pikurate is a tailored knowledge curation platform, powered by AI and our community",
	keywords: "pikurate, knowlege curation , AI",
	
};

<link rel="icon" href="/favicon.ico" sizes="any" />

export default function RootLayout({ children }) {
	return (
		<html lang="en" >
			<body className="text-black">
				<Header />
				{children}
			
				<Footer />
			</body>
		</html>
	);
}