"use client";
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import ImageHeader from "../partials/image-header";
export default function AboutSection() {
	const [showMoreParagraph, setShowMoreParagraph] = useState(false);

	return (
		<section className="px-10 ">
			<ImageHeader />
			<div className="pt-16 justify-center items-center ">
				<h2 className={cn("font-bold")}>About Me</h2>
				<article className="pt-4 ">
					<p>
						My name Nadhir Adhitya Zhalifunnas. Im a Fullstack Developer and
						Frontend Developer with 4 years of experience. I enjoy building
						websites with a powerfull design, i also enjoy to design a websites.
						Right now im focused at working in Next.js and Express.js.
					</p>
					<p>
						Experienced with Full Stack Web Developer and Frontend Web Developer
						, Skilled in a wide range of technologies including HTML, CSS,
						Javascript, PHP, Laravel, Next.js, Node.js, Tailwindcss,
						Bootstrapcss. My favorite part of programming is design website, and
						problem-solving aspect. Who has some value to build a creative and
						interactive Website. Able to effectively self-manage during
						independent projects, and weel to collaborate in a team. I am always
						looking to learn new technologies. I am currently looking for a
						full-time position as a Full-Stack Web Developer and Front-End Web
						Developer.
					</p>
				</article>
			</div>
		</section>
	);
}
