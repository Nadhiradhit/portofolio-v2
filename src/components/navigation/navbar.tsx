import React from "react";
import Image from "next/image";
import { Profile, ProfileInfo, ProfileSocialMedia } from "./partials/profile";
import Divider from "../divider/divider-line";

export default function Navbar() {
	return (
		<main className="bg-[#2d2e30]/50 backdrop-blur-sm rounded-2xl h-auto p-3">
			<div className="flex flex-col justify-center items-center gap-3 pt-6">
				<Image
					src="/img/profil.jpg"
					alt="logo"
					width={150}
					height={100}
					className="rounded-xl"
				/>
				<Profile />
			</div>
			<div className="px-6">
				<Divider />
			</div>
			<div className="">
				<ProfileInfo />
				<ProfileSocialMedia />
			</div>
		</main>
	);
}
