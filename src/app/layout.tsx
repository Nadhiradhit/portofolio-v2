import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarHeader } from "@/components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<div className="p-5 mx-auto z-30">
					<NavbarHeader />
				</div>

				<Navbar />
				<main className="relative flex flex-col max-w-screen-2xl mx-auto pt-[72px] min-h-screen">
					{children}
				</main>
			</body>
		</html>
	);
}
