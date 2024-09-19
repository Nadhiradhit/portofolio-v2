import React from "react";
import { useParams } from "next/navigation";
export default function page({ params }: any) {
	return <div>This is a page {params.slug}</div>;
}
