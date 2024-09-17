import React from "react";
import { navigationLinks } from "@/lib/common/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavbarLinks() {
	const pathname = usePathname();
	return (
		<>
			{navigationLinks.map((item, index) => {
				const isActive = pathname === item.href;
				return (
					<Link
						key={index}
						href={item.href}
						className={
							isActive
								? "text-[#5389cf] hover:text-[#a6b6cc]"
								: "text-[#65a5f8] hover:text-[#a6b6cc]"
						}>
						<p>{item.name}</p>
					</Link>
				);
			})}
		</>
	);
}
