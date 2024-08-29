"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { navigationLinks } from "@/lib/common/navigation";
import { FiArrowUpRight } from "react-icons/fi";

import manImage from "@/public/assets/man.png";
import TypingAnimation from "../magicui/typing-animation";
import { cn } from "@/lib/utils";
import Particles from "../magicui/particles";

export function NavbarHeader() {
	const [color, setColor] = useState("#ffffff");
	// const router = useRouter();
	// const pathname = usePathname();
	// useEffect(() => {
	// 	setColor(theme === "dark" ? "#ffffff" : "#000000");
	// }, [theme]);

	return (
		<section className="w-full py-10 px-10 bg-[#5389cf] rounded-xl lg:h-[900px]">
			<nav className="flex justify-between items-center">
				<div>
					<p className="text-white text-lg font-semibold">Dhidd</p>
				</div>
				<div className="hidden md:flex gap-6 ">
					{navigationLinks.map((item, index) => {
						return (
							<Link
								key={index}
								href={item.href}
								scroll={false}
								className="text-white hover:text-[#b9cfec]">
								<p>{item.name}</p>
							</Link>
						);
					})}
				</div>
				<div className="bg-white px-5 py-2 rounded-full">
					<button>
						<Link href={"/"} className={cn(`flex items-center gap-2`)}>
							Start Project
							<FiArrowUpRight />
						</Link>
					</button>
				</div>
			</nav>
			<main className="flex flex-col-reverse lg:flex-row pt-7 items-center gap-6">
				<div className="text-white">
					<TypingAnimation text="Hello Everyone !" className="text-start" />
					<h2>I&apos;m Dhidd, Fullstack Developer and Frontend Developer </h2>
				</div>
				<div className="relative flex justify-center items-center py-5 w-full cursor-pointer">
					<Image src={manImage} alt="header-image" width={300} height={200} />
					<Particles
						className="absolute inset-0"
						quantity={100}
						ease={100}
						color={color}
						refresh
					/>
				</div>
			</main>
		</section>
	);
}

export function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const showingNavbarLocal = localStorage.getItem("showNavbar");
		if (showingNavbarLocal) {
			setShowNavbar(JSON.parse(showingNavbarLocal));
		}

		const handleScroll = () => {
			const sectionElement = document.querySelector("section");
			const scrollPosition = window.scrollY;
			if (sectionElement) {
				const headerHeight = sectionElement.offsetHeight;
				if (scrollPosition > headerHeight) {
					setShowNavbar(true);
					localStorage.setItem("showNavbar", "" + true);
				} else {
					setShowNavbar(false);
					localStorage.setItem("showNavbar", "" + false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const handleLinkClick = (href: string) => {
		router.push(href);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<section
			className={`bg-white py-4 px-10 fixed top-0 w-full z-50 ${
				showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
			}`}>
			<nav className="flex justify-between items-center">
				<div>
					<p className="text-blue-500 text-lg font-semibold">Dhidd</p>
				</div>
				<div className="hidden md:flex gap-6 ">
					{navigationLinks.map((item, index) => {
						return (
							<Link
								key={index}
								href={item.href}
								onClick={() => handleLinkClick(item.href)}
								className="text-blue-500 hover:text-[#a6b6cc]">
								<p>{item.name}</p>
							</Link>
						);
					})}
				</div>
				<div className="bg-[#5389cf] px-5 py-2 rounded-full">
					<button className="flex items-center gap-2 text-white ">
						Start Project
						<FiArrowUpRight />
					</button>
				</div>
			</nav>
		</section>
	);
}
