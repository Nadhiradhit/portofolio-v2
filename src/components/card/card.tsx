import React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

// interface CardImageProps extends CardProps {
// 	width?: number;
// 	height?: number;
// 	alt?: string | undefined;
// 	src?: string | undefined;
// }

export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={cn(
				"max-w-sm w-full mx-auto rounded-xl border border-neutral-100 bg-[#E3F1F8]",
				className
			)}>
			{children}
		</div>
	);
};

export const CardImage = ({ children, className }: CardProps) => {
	return <div className={cn("flex items-center", className)}>{children}</div>;
};

export const CardTitle = ({ children, className }: CardProps) => {
	return (
		<h2
			className={cn(
				"text-lg text-gray-800 font-semibold pt-4 pb-2 px-4 lg:px-6",
				className
			)}>
			{children}
		</h2>
	);
};

export const CardDescription = ({ children, className }: CardProps) => {
	return (
		<p
			className={cn(
				"text-sm font-normal text-start leading-relaxed hyphens-auto text-neutral-600 max-w-sm h-24 px-4 lg:px-6",
				className
			)}>
			{children}
		</p>
	);
};

export const CardFooter = ({ children, className }: CardProps) => {
	return <div className={cn("px-4 lg:px-6 pb-6", className)}>{children}</div>;
};

export function CardSkils({ children, className }: CardProps) {
	return <div className={cn("px-4 lg:px-6 pb-6", className)}>{children}</div>;
}
