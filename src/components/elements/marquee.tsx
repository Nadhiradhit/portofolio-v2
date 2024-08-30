import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeProps {
	children?: React.ReactNode;
	direction?: "left" | "right" | "up" | "down";
	speed?: number;
	pauseOnHover?: boolean;
}

export default function MarqueSlider({
	children,
	direction,
	speed,
	pauseOnHover,
}: MarqueeProps) {
	return (
		<section className="cursor-pointer w-full relative">
			<Marquee
				className="relative flex flex-col gap-y-7 justify-start py-2 w-full overflow-hidden"
				direction={direction}
				pauseOnHover={pauseOnHover}
				speed={speed}>
				{children}
			</Marquee>
		</section>
	);
}
