import React from "react";

export default function Divider() {
	const borderWidth = "border-t-[2px] border-[#ffffff]";
	const borderRounded = "rounded-full";
	const borderStyle = "border-solid";
	const marginTopBottom = "my-3";
	const className = `${borderWidth} ${borderStyle} ${marginTopBottom} ${borderRounded}`;
	return <hr className={`${className} w-auto`} />;
}

// Old Method
// const Divider = ({
// 	color = "[#2d2e30]",
// 	thickness = "1",
// 	marginY = "4",
// 	style = "solid",
// }) => {
// 	const borderColor = `border-${color}`;
// 	const borderWidth = `border-t-${thickness}`;
// 	const borderStyle = `border-${style}`;
// 	const marginTopBottom = `my-${marginY}`;

// 	return (
// 		<hr
// 			className={`${borderWidth} ${borderColor} ${borderStyle} ${marginTopBottom}`}
// 		/>
// 	);
// };

// export default Divider;
