"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import MarqueeSlider from "@/components/elements/marquee";

import { PiArrowElbowDownRight } from "react-icons/pi";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
	FaBootstrap,
	FaGithub,
	FaLaravel,
	FaLinkedin,
	FaNodeJs,
	FaReact,
	FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { Button, IconButton } from "@/components/button/button";
import { cn } from "@/lib/utils";

const SkillsIcon = [
	{
		name: "JavaScript",
		icons: IoLogoJavascript,
	},
	{
		name: "TypeScript",
		icons: SiTypescript,
	},
	{
		name: "Node.js",
		icons: FaNodeJs,
	},
	{
		name: "Sass",
		icons: FaSass,
	},
	{
		name: "Tailwind",
		icons: RiTailwindCssFill,
	},
	{
		name: "Bootstrap",
		icons: FaBootstrap,
	},
	{
		name: "Laravel",
		icons: FaLaravel,
	},
	{
		name: "React.js",
		icons: FaReact,
	},
	{
		name: "Next.js",
		icons: RiNextjsFill,
	},
	{
		name: "firebase",
		icons: IoLogoFirebase,
	},
];

export default function HeroSections() {
	const router = useRouter();
	const handleLinkClick = (href: string) => {
		router.push(href);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<section className="px-10 w-full h-72 flex items-center ">
			<article>
				<div className="flex items-center gap-2 text-blue-400">
					<PiArrowElbowDownRight size={40} />
					<h3 className="relative top-1">About me</h3>
				</div>
				<p className="w-full lg:w-[770px] text-2xl lg:text-3xl py-6 text-start">
					My name Nadhir Adhitya Zhalifunnas. Im a Fullstack Developer and
					Frontend Developer with 4 years of experience.
				</p>
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
					<div className="flex gap-4 "></div>
				</div>
			</article>
			{/* <div className="py-10">
				<MarqueeSlider direction="left" speed={65} pauseOnHover={false}>
					{SkillsIcon.map((item, index) => {
						const IconType = item.icons;
						return (
							<div key={index}>
								<div className="flex items-center gap-4 mr-7 rounded-full py-2 px-5 border border-border">
									<p className="text-lg">{item.name}</p>
									<IconType size={40} className="text-[#5389cf]" />
								</div>
							</div>
						);
					})}
				</MarqueeSlider>
			</div> */}
		</section>
	);
}
