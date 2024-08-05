import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
		content: "nadhiradhitya@gmail",
		icons: MdOutlineEmail,
	},
	{
		title: "Github",
		content: "Nadhiradhit",
		links: "https://github.com/Nadhiradhit",
		icons: FaGithub,
	},
	{
		title: "LinkedIn",
		content: "https://github.com/Nadhiradhit",
		icons: FaLinkedin,
	},
	{
		title: "Github",
		content: "https://github.com/Nadhiradhit",
		icons: FaGithub,
	},
	{
		title: "Github",
		content: "https://github.com/Nadhiradhit",
		icons: FaGithub,
	},
];

export { profileUser, personalInfo };
