import React from "react";

export default function ProjectsLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	return <div className="w-full min-h-screen pt-[72px]">{children}</div>;
}
