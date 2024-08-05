import React from "react";
import Link from "next/link";
import { profileUser, personalInfo } from "@/lib/common/profile";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Profile() {
	return (
		<div className="text-white">
			<p>Nadhir Adhitya Zhalifunnas</p>
			{profileUser.position.items.map((item) => (
				<div key={item} className="py-1">
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
		<div className="px-6">
			{personalInfo.map(({ title, content, icons, links }) => (
				<div key={title}>
					<ul className="flex flex-col items-center justify-center py-1">
						<li className="text-xs text-center w-full p-2">
							<div className="flex items-center gap-4">
								<div className="bg-[#2d2e30] backdrop-blur-sm rounded-sm w-auto p-1">
									<MdOutlineEmail size={25} className="text-[#2f68b3]" />
								</div>
								<div className="text-slate-50 text-start">
									<p>{title}</p>
									<Link href={"/"}>
										<p>{content}</p>
									</Link>
								</div>
							</div>
						</li>
					</ul>
				</div>
			))}
		</div>
	);
}

export function ProfileSocialMedia(){
	return (
		<div className="pt-2">
			<div className="flex justify-center items-center gap-5 pb-6">
				<Link href={"#"} className="bg-[#2d2e30] rounded-full p-2">
					<FaGithub size={25} className="text-[#2f68b3]" />
				</Link>
				<Link href={"#"} className="bg-[#2d2e30] rounded-full p-2">
					<FaLinkedin size={25} className="text-[#2f68b3]" />
				</Link>
			</div>
		</div>
	)
}
