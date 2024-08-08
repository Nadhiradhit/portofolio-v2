import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";

export default function page() {
	return (
		<div className="p-2 flex lg:gap-4">
			<div className="">
				<Navbar />
			</div>
			<div className="text-white bg-[#2d2e30]/50 w-full rounded-lg h-screen relative">
				<div className="flex justify-end gap-4">
					<div className="w-auto h-12 bg-[#2d2e30] flex gap-24 items-center justify-center px-16 rounded-bl-xl rounded-tr-xl">
						<Link
							href="https://github.com/nadhiradhitt"
							className="hover:text-[#5389cf]">
							<p>Home</p>
						</Link>
						<Link
							href="https://github.com/nadhiradhitt"
							className="hover:text-[#5389cf]">
							<p>About</p>
						</Link>
						<Link
							href="https://github.com/nadhiradhitt"
							className="hover:text-[#5389cf]">
							<p>Experience</p>
						</Link>
						<Link
							href="https://github.com/nadhiradhitt"
							className="hover:text-[#5389cf]">
							<p>Portofolio</p>
						</Link>
					</div>
				</div>
				<div className="w-auto p-10 absolute top-0">
					<p className="text-[4rem] font-semibold text-start">About Me</p>
					<p className="text-justify">
						My name Nadhir Adhitya Zhalifunnas. Im a Full-Stack Web Developer
						with 4 years of experience. I enjoy building websites with a
						powerfull design, i also enjoy to design a websites. Right now im
						focused at working in Next.js and Tailwind. Able to effectively
						self-manage during independent projects, and weel to collaborate in
						a team. I am always looking to learn new technologies. I am
						currently looking for a full-time position as a Full-Stack Web
						Developer and Front-End Web Developer.
					</p>
				</div>
			</div>
		</div>
	);
}
