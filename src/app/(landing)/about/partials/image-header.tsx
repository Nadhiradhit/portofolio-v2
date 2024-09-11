import React from "react";
import Image from "next/image";
import { VelocityScroll } from "@/components/elements/scroll-based-velocity";

export default function ImageHeader() {
	return (
		<section className="w-full flex justify-center items-center">
			<div className="absolute w-full h-full top-64">
				<VelocityScroll
					text="Frontend Developer"
					default_velocity={2}
					className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
				/>
			</div>
			<Image
				width={300}
				height={500}
				src={"/img/profil.jpg"}
				alt="image"
				className="rounded-lg relative bottom-16 grayscale hover:grayscale-0 transition-all ease-in-out cursor-pointer hover:scale-110"
			/>
		</section>
	);
}
