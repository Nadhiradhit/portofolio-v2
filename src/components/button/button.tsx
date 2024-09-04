import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	children?: React.ReactNode;
	className?: string;
	type?: "primary" | "secondary" | "submit" | "reset";
}

export default function Button({
	className,
	disabled,
	children,
	type,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(
				"px-4 py-2 rounded-full hover:scale-105 transition transform ease-in-out",
				{
					"bg-white border border-blue-300": type === "primary",
					"cursor-not-allowed opacity-50 bg-gray-400 disabled:hover:scale-100":
						disabled,
					"bg-blue-400 text-white hover:bg-blue-300": type === "secondary",
				},
				className
			)}
			disabled={disabled}
			{...props}>
			{children}
		</button>
	);
}
