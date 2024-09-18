import React from "react";
import Image from "next/image";
import { projects } from "@/lib/common/project";
import {
	Card,
	CardImage,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/card/card";
import { Button, IconButton } from "@/components/button/button";
import { FiAlignJustify } from "react-icons/fi";

export default function ProjectSections() {
	const haveMoreProjects = projects.length > 3;
	const maxProjects = projects.slice(0, 3);
	return (
		<section className="px-10 py-10 w-full">
			<main className=" bg-[#D0E8F4] rounded-xl px-5 py-2">
				<div className="py-6 flex justify-between items-center">
					<h3 className="text-[#0F88BC] font-semibold">Featured Projects</h3>
					{haveMoreProjects && (
						<div className="">
							<IconButton
								href="/projects"
								icon={<FiAlignJustify size={24} />}
								typeButton="primary"
								className="block md:hidden"
							/>
							<Button
								href="/projects"
								text="View All"
								className="hidden md:block"
								typeButton="primary"
							/>
						</div>
					)}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-4 pb-6 ">
					{maxProjects.map((project, index) => {
						return (
							<Card key={index}>
								<CardImage>
									<Image
										src={project.image}
										alt={project.name}
										width={500}
										height={300}
										className="rounded-t-xl cursor-pointer h-36 lg:h-56 hover:scale-90 hover:rounded-lg transition transform ease-in-out "
									/>
								</CardImage>
								<CardTitle className="text-[#0F88BC]">{project.name}</CardTitle>
								<CardDescription className="text-[#0F88BC]">
									{project.description}
								</CardDescription>
								<CardFooter>
									<Button
										href={project.url}
										text="View Project"
										className="text-white bg-[#0F88BC] w-full rounded-md hover:bg-[#0a5e81]"
									/>
								</CardFooter>
							</Card>
						);
					})}
				</div>
			</main>
		</section>
	);
}
