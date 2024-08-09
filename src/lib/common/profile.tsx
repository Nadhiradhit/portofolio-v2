import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { describe } from "node:test";

const profileUser = {
	profile: {
		name: "Nadhir Adhitya Zhalifunnas",
	},
	position: {
		items: ["Software Engineer", "Fullstack Developer"],
	},
};

const personalInfo = [
	{
		title: "Email",
		content: "nadhiradhitya@gmail.com",
		links: "",
		icons: MdOutlineEmail,
	},
	{
		title: "Github",
		content: "Nadhiradhit",
		links: "https://github.com/Nadhiradhit",
		icons: FaGithub,
	},
	{
		title: "Location",
		content: "Bogor, West Java",
		links: "https://goo.gl/maps/1DGM5WrWnATgkSN9A",
		icons: IoLocationSharp,
	},
];

const personalTask = [
	{
		title: "Frontend Developer",
		description: "",
	},
];

export { profileUser, personalInfo, personalTask };
