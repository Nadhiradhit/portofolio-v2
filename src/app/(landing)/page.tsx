import React from "react";

import HeroSections from "./_sections/hero-sections";
import ProjectSections from "./_sections/project-sections";

export default function page() {
	return (
		<section className="pt-16">
			<main>
				<HeroSections />
				<ProjectSections />
			</main>
		</section>
	);
}
