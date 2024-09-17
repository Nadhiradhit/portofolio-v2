"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { navigationLinks } from "@/lib/common/navigation";
import { FiArrowUpRight } from "react-icons/fi";

import { IconButton } from "../button/button";
import { cn } from "@/lib/utils";
import NavbarLinks from "./nav-link";

export function Navbar() {
	return (
		<section className={cn(`w-full bg-[#fafafa] fixed top-0 z-20`)}>
			<nav className="flex justify-between items-center h-20 mx-auto">
				<Link href={"/"} className="text-3xl font-bold text-[#5389cf]">
					Dhidd
				</Link>
				<div className="hidden md:flex gap-6">
					<NavbarLinks />
				</div>
				<IconButton
					icon={<FiArrowUpRight size={24} />}
					text="Start Project"
					href="/"
				/>
			</nav>
		</section>
	);
}
