"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { PiArrowElbowDownRight } from "react-icons/pi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, IconButton } from "@/components/button/button";
import ImageHeader from "../partials/image-header";
import { Cover } from "@/components/elements/cover";

export default function HeroSections() {
	const router = useRouter();
	const handleLinkClick = (href: string) => {
		router.push(href);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<section className="px-10 w-full">
			<ImageHeader />
			<div className="max-w-screen-2xl">
				<article>
					<div className="flex items-center gap-2 text-blue-400">
						<PiArrowElbowDownRight size={40} />
						<h3 className="relative top-1">About me</h3>
					</div>
					<h2 className="w-full lg:w-[1400px] text-2xl lg:text-3xl py-6 text-start">
						My name Nadhir Adhitya Zhalifunnas. Im a Fullstack Developer and
						Frontend Developer with 4 years of experience.I enjoy building
						websites with a powerfull design, i also enjoy to design a websites.
						Right now im focused at working in{" "}
						<Cover className="cursor-pointer font-bold"> Next.js </Cover>
						for frontend and{" "}
						<Cover className="cursor-pointer font-bold">Express.js </Cover>for
						backend.
					</h2>
					<div className="flex items-center gap-5 mb-6">
						<Button
							typeButton="primary"
							disabled={false}
							text="Learn More About Me"
							href="/about"
							onClick={() => handleLinkClick("/about")}
						/>
						<IconButton
							icon={<FaLinkedin color="#5389cf" />}
							href="https://www.linkedin.com/in/nadhiradhitt/"
							target="_blank"
							text="Linkedin"
							typeButton="primary"
						/>
						<IconButton
							icon={<FaGithub color="#5389cf" />}
							href="https://github.com/Nadhiradhit"
							target={"_blank"}
							text="Github"
							typeButton="primary"
						/>
					</div>
				</article>
			</div>
		</section>
	);
}
