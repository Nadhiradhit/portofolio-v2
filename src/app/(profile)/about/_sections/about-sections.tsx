"use client";
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AboutSection() {
	const [showMoreParagraph, setShowMoreParagraph] = useState(false);

	return (
		<section className="px-10 ">
			<div className="pt-16 justify-center items-center ">
				<h2 className={cn("font-bold")}>About Me</h2>
				<h3 className="text-lg text-blue-500">Find out more about me.</h3>
				<article className="pt-4 text-justify w-6/12">
					<p>
						I&apos; m a{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 font-bold">
							Frontend Developer
						</span>{" "}
						who interested to be a{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-blue-800 font-bold">
							Full-stack Developer
						</span>
					</p>
					<div className="pt-4 space-y-4 leading-[1.8] md:leading-loose">
						<p>
							Experienced with in Frontend Devloper and Full-stack Developer
							with strong foundation in diserve set of technologies. Procient in
							Frontend Developer using JavaScript,React.js, Next.js, SaSS,
							TailwindCSS. Backend expertise in Laravel, PHP with database
							management using a MySQL.
						</p>
						<p>
							I&apos;m proficient in creating a responsive website and
							interactive website using a technologies like react.js and
							next.js.
						</p>
						<p>I&apos;m always looking for new opportunities. </p>
					</div>
				</article>
			</div>
		</section>
	);
}
