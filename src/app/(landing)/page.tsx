import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import { personalTask } from "@/lib/common/profile";
import { navigationLinks } from "@/lib/common/navigation";
import { projects } from "@/lib/common/project";
import Image from "next/image";

export default function page() {
	return (
		<div className="p-2 flex lg:gap-4">
			<div className="">
				<Navbar />
			</div>
			<div className="text-white bg-[#2d2e30]/50 w-full min-h-[125vh] lg:min-h-[140vh] rounded-lg relative">
				<div className="flex justify-end gap-4 z-10 relative">
					<div className="w-auto h-12 bg-[#2d2e30] flex gap-24 items-center justify-center px-16 rounded-bl-xl rounded-tr-xl ">
						{navigationLinks.map((item, index) => {
							return (
								<Link
									key={index}
									href={item.href}
									className="hover:text-[#5389cf]">
									<p>{item.name}</p>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="w-full p-10 absolute top-0">
					<div>
						<h2 className="text-[1.5rem] font-semibold text-start pt-5">
							About Me
						</h2>
						<div className="w-14 h-1 bg-[#5389cf] rounded-md"></div>
						<div className="py-5 text-sm">
							<p className="text-justify">
								My name Nadhir Adhitya Zhalifunnas. Im a Full-Stack Web
								Developer with 4 years of experience. I enjoy building websites
								with a powerfull design, i also enjoy to design a websites.
							</p>
							<p className="text-justify pt-2">
								Right now im focused at working in Next.js and Tailwind. Able to
								effectively self-manage during independent projects, and weel to
								collaborate in a team. I am always looking to learn new
								technologies. I am currently looking for a full-time position as
								a Full-Stack Web Developer and Front-End Web Developer.
							</p>
						</div>
					</div>
					<div>
						<h2 className="text-[1.5rem] font-semibold text-start">
							What I&apos;m Doing
						</h2>
						<div className="w-14 h-1 bg-[#5389cf] rounded-md"></div>
						<div className="grid grid-cols-2 gap-2 py-5 ">
							{personalTask.map((item, index) => {
								const IconType = item.icons;
								return (
									<div
										className="w-full h-32 bg-[#2d2e30] rounded-md flex items-center justify-center gap-5 p-5"
										key={index}>
										<IconType size={65} className=" text-[#5389cf]" />
										<div className="w-3/4">
											<p className="text-[1.2rem] font-semibold text-justify">
												{item.title}
											</p>
											<p className="text-sm font-light">{item.description}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h2 className="text-[1.5rem] font-semibold text-start">Project</h2>
						<div className="w-14 h-1 bg-[#5389cf] rounded-md"></div>
						<div className="flex justify-between text-sm py-5">
							<p>This is my project</p>
							<Link href={"/project"} className="text-[#5389cf]">
								More About My Project
							</Link>
						</div>
						<div className="grid grid-cols-3 gap-4">
							{projects.map((item, index) => {
								return (
									<div
										className="w-full bg-[#2d2e30] rounded-xl p-3 flex flex-col justify-center hover:scale-[1.02] hover:outline-[#5389cf] hover:outline hover:outline-2"
										key={index}>
										<Link href={item.url}>
											<Image
												src={item.image}
												alt={item.name}
												width={350}
												height={200}
												className="p-1 rounded-lg"
											/>
											<div className="p-1 mt-2">
												<h6 className="text-lg">{item.name}</h6>
												<p>{item.description}</p>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h2 className="text-[1.5rem] font-semibold text-start">Project</h2>
						<div className="w-14 h-1 bg-[#5389cf] rounded-md"></div>
						<div className="flex justify-between text-sm py-5">
							<p>This is my project</p>
							<Link href={"/project"} className="text-[#5389cf]">
								More About My Project
							</Link>
						</div>
						<div className="grid grid-cols-3 gap-4">
							{projects.map((item, index) => {
								return (
									<div
										className="w-full bg-[#2d2e30] rounded-xl p-3 flex flex-col justify-center hover:scale-[1.02] hover:outline-[#5389cf] hover:outline hover:outline-2"
										key={index}>
										<Link href={item.url}>
											<Image
												src={item.image}
												alt={item.name}
												width={350}
												height={200}
												className="p-1 rounded-lg"
											/>
											<div className="p-1 mt-2">
												<h6 className="text-lg">{item.name}</h6>
												<p>{item.description}</p>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
