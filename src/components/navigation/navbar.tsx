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
import { IconButton } from "../button/button";

export function NavbarHeader() {
	const [color] = useState("#ffffff");

	return (
		<section
			className={cn(
				`w-full py-10 px-10 bg-[#9fafc4] rounded-xl lg:h-[900px]`,
				`w-full py-10 px-10 bg-[#5389cf] rounded-xl lg:h-[900px]`
			)}>
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
				<IconButton
					icon={<FiArrowUpRight size={24} />}
					text="Start Project"
					href="/"
					typeButton="primary"
				/>
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
			className={`bg-[#fafafa] py-4 px-10 fixed top-0 w-full z-50 ${
				showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
			}`}>
			<nav className="flex justify-between items-center">
				<div>
					<p className="text-[#5389cf] text-lg font-semibold">Dhidd</p>
				</div>
				<div className="hidden md:flex gap-6 ">
					{navigationLinks.map((item, index) => {
						return (
							<Link
								key={index}
								href={item.href}
								onClick={() => handleLinkClick(item.href)}
								className="text-[#5389cf] hover:text-[#a6b6cc]">
								<p>{item.name}</p>
							</Link>
						);
					})}
				</div>
				<IconButton
					icon={<FiArrowUpRight size={24} />}
					text="Start Project"
					href="/"
					typeButton="primary"
				/>
			</nav>
		</section>
	);
}
