import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Divider from "@/components/divider/divider-line";
import { MdOutlineWebAsset } from "react-icons/md";
import { personalTask } from "@/lib/common/profile";
import Image from "next/image";
import paperImage from "@/public/assets/paper.jpg";

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
				<div className="w-full p-10 absolute top-0">
					<div>
						<p className="text-[1.5rem] font-semibold text-start">About Me</p>
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
						<p className="text-[1.5rem] font-semibold text-start">
							What I&apos;m Doing
						</p>
						<div className="h-screen bg-cover bg-center bg-no-repeat">
							<div className="grid grid-cols-2 gap-2 p-1.5 ">
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
					</div>
				</div>
			</div>
		</div>
	);
}
