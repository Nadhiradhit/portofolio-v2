import React from "react";
import MarqueeSlider from "@/components/elements/marquee";

import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
	FaBootstrap,
	FaLaravel,
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

export default function SkillSection() {
	return (
		<section className="px-10 py-10 w-full">
			<h3>My Skills</h3>
			<div className="py-10">
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
			</div>
		</section>
	);
}
