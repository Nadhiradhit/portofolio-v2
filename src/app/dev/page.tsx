import Navbar from "@/components/navigation/navbar";
import React from "react";

export default function page() {
	return (
		<div className=" p-2 flex gap-4">
			<div className="">
				<Navbar />
			</div>
			<div className="">page</div>
		</div>
	);
}
