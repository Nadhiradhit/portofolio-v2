import Navbar from "@/components/navigation/navbar";
import React from "react";

export default function page() {
	return (
		<div className="p-2 flex gap-4">
			<div className="">
				<Navbar />
			</div>
			<div className="text-white bg-slate-600 w-full rounded-lg text-center h-screen">
				page
			</div>
		</div>
	);
}
