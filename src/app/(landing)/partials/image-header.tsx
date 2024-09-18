import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/elements/scroll-based-velocity";

export default function ImageHeader() {
	return (
		<section className="w-full lg:min-h-screen translate-y-[-10%] lg:translate-y-[5%]">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="h-[500px] flex justify-center items-center relative">
				<div className="absolute flex items-center justify-center w-24 text-center">
					<h1 className="font-bold leading-[7rem] lg:leading-normal text-[3.5rem] lg:text-[8rem] uppercase">
						Nadhir Adhitya Zhalifunnas
					</h1>
				</div>
				<Image
					width={300}
					height={500}
					src={"/img/profil.jpg"}
					alt="image"
					className="rounded-lg grayscale hover:grayscale-0 transition-all ease-in-out cursor-pointer hover:scale-110 w-52 lg:w-auto"
				/>
			</motion.div>
			<div className="mt-10 lg:mt-28">
				<VelocityScroll
					text="Frontend Developer"
					className="text-6xl lg:text-8xl font-bold "
				/>
			</div>
		</section>
	);
}
