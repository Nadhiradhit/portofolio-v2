import React from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Divider from "@/components/divider/divider-line";
import { MdOutlineWebAsset } from "react-icons/md";

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
					<div>
						<p className="text-[2rem] font-semibold text-start">About Me</p>
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
					<div className="">
						<p className="text-[2rem] font-semibold text-start">
							What I&apos;m Doing
						</p>
						<div className="flex flex-wrap justify-center gap-4 pt-4">
							<div className="w-[565px] bg-[#2d2e30] rounded-md flex items-center gap-5 p-5">
								<MdOutlineWebAsset size={100} className="" />
								<div className="w-2/3">
									<p className="text-[1.5rem] font-semibold">Web Design</p>
									<p className="text-sm font-light">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Tempora, excepturi molestias obcaecati quas qui perspiciatis
										cumque sit, explicabo consequuntur, vero consequatur natus
										laudantium velit. Reiciendis ipsum ab commodi architecto
										nisi!
									</p>
								</div>
							</div>
							<div className="w-[565px] bg-[#2d2e30] rounded-md flex items-center gap-5 p-5">
								<MdOutlineWebAsset size={100} />
								<div className="w-2/3">
									<p className="text-[1.5rem] font-semibold">Web Design</p>
									<p className="text-sm font-light">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Tempora, excepturi molestias obcaecati quas qui perspiciatis
										cumque sit, explicabo consequuntur, vero consequatur natus
										laudantium velit. Reiciendis ipsum ab commodi architecto
										nisi!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
