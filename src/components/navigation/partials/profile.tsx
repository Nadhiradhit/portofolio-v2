import React from "react";
import Link from "next/link";
import { profileUser, personalInfo } from "@/lib/common/profile";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function Profile() {
	return (
		<div className="text-white">
			<p>Nadhir Adhitya Zhalifunnas</p>
			{profileUser.position.items.map((item) => (
				<div key={item} className="py-1 cursor-pointer">
					<ul className="flex flex-col items-center py-1">
						<li className="text-xs text-center bg-[#2d2e30] backdrop-blur-sm rounded-sm w-[150px] p-2">
							{item}
						</li>
					</ul>
				</div>
			))}
		</div>
	);
}

export function ProfileInfo() {
	return (
		<div className="px-5 w-[250px]">
			{personalInfo.map((item, index) => {
				const IconType = item.icons;
				return (
					<div key={index}>
						<ul className="flex flex-col items-center justify-center py-1 cursor-pointer hover:bg-[#252527] hover:rounded-md w-full">
							<li className="text-xs text-center w-full py-2 px-2">
								<div className="flex items-center gap-4">
									<div className="bg-[#2d2e30] backdrop-blur-sm rounded-sm w-auto p-1">
										<IconType size={25} className="text-[#5389cf]" />
									</div>
									<div className="text-slate-50 text-start w-36">
										<p className="font-semibold text-[#5389cf]">{item.title}</p>
										<p className="text-sm truncate">
											{item.links ? (
												<Link href={item.links} className="">
													{item.content}
												</Link>
											) : (
												item.content
											)}
										</p>
									</div>
								</div>
							</li>
						</ul>
						<div></div>
					</div>
				);
			})}
		</div>
	);
}

export function ProfileSocialMedia() {
	return (
		<div className="pt-2">
			<div className="flex justify-center items-center gap-5 pb-6">
				<Link href={"#"} className="bg-[#2d2e30] rounded-full p-2">
					<FaGithub size={25} className="text-[#5389cf]" />
				</Link>
				<Link href={"#"} className="bg-[#2d2e30] rounded-full p-2">
					<FaLinkedin size={25} className="text-[#5389cf]" />
				</Link>
				<Link href={"#"} className="bg-[#2d2e30] rounded-full p-2">
					<FaInstagram size={25} className="text-[#5389cf]" />
				</Link>
			</div>
		</div>
	);
}
