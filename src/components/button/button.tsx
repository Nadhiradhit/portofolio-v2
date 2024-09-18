import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { HTMLAttributeAnchorTarget } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	children?: React.ReactNode;
	className?: string;
	target?: HTMLAttributeAnchorTarget | undefined;
	href: string;
	text?: string;
	typeButton?: "primary" | "secondary" | "submit" | "reset";
}

interface IconButtonProps extends ButtonProps {
	icon?: React.ReactNode;
}

export function Button({
	className,
	disabled,
	children,
	typeButton,
	text,
	href,
	target,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(
				"h-12 md:h-auto w-auto px-4 py-2 rounded-full hover:scale-105 transition transform ease-in-out",
				{
					"bg-white border border-blue-300": typeButton === "primary",
					"cursor-not-allowed opacity-50 bg-gray-400 disabled:hover:scale-100":
						disabled,
					"bg-blue-400 text-white hover:bg-blue-300":
						typeButton === "secondary",
				},
				className
			)}
			disabled={disabled}
			{...props}>
			<Link
				href={href}
				target={target}
				className="text-xs md:text-base line-clamp-1 md:line-clamp-none">
				{text}
			</Link>
		</button>
	);
}

export function IconButton({
	href,
	icon,
	text,
	typeButton,
	disabled,
	className,
	target,
}: IconButtonProps) {
	return (
		<button
			className={cn(
				"w-12 h-12 md:h-auto md:w-auto px-4 py-2 rounded-full hover:scale-105 transition transform ease-in-out",
				{
					"bg-white border border-blue-300": typeButton === "primary",
					"cursor-not-allowed opacity-50 bg-gray-400 disabled:hover:scale-100":
						disabled,
					"bg-blue-400 text-white hover:bg-blue-300":
						typeButton === "secondary",
				},
				className
			)}>
			<Link
				href={href}
				target={target}
				className="flex items-center justify-center gap-2">
				<p className="hidden md:block">{text}</p>
				<p className="">{icon}</p>
			</Link>
		</button>
	);
}
