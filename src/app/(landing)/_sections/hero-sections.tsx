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
		<section className="px-10 w-full h-72 flex items-center">
			<article>
				<div className="flex items-center gap-2 text-blue-400">
					<PiArrowElbowDownRight size={40} />
					<h3 className="relative top-1">About me</h3>
				</div>
				<p className="text-2xl lg:text-3xl py-6 text-justify">
					My name Nadhir Adhitya Zhalifunnas. Im a Fullstack Developer and
					Frontend Developer with 4 years of experience.
				</p>
				<div className="flex gap-5">
					<button className="w-56 h-10 border border-blue-300 rounded-full hover:scale-105 hover:bg-[#edf5ff] transition transform ease-in-out">
						<Link href="/about" onClick={() => handleLinkClick("/about")}>
							Learn More About Me
						</Link>
					</button>
					<button className="flex items-center gap-2 px-4 border border-blue-300 rounded-full hover:scale-105 hover:bg-[#edf5ff] transition transform ease-in-out">
						<FaLinkedin color="#5389cf" />
						<Link
							href={"https://www.linkedin.com/in/nadhiradhitt/"}
							target={"_blank"}
							className="text-md">
							Linkedin
						</Link>
					</button>
					<button className="flex items-center gap-2 px-4 border border-blue-300 rounded-full hover:scale-105 hover:bg-[#edf5ff] transition transform ease-in-out">
						<FaGithub color="#5389cf" />
						<Link
							href={"https://github.com/Nadhiradhit"}
							target={"_blank"}
							className="text-md">
							Github
						</Link>
					</button>
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
