import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarHeader } from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";

const PlusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	display: "swap",
	variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
	title: "Nadhir Adhitya",
	description: "My Portofolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${PlusJakartaSans.className} `}>
				<div className="p-5 mx-auto z-30">
					<NavbarHeader />
				</div>
				<Navbar />
				<main className="relative flex flex-col max-w-screen-2xl mx-auto pt-[72px] min-h-screen">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
