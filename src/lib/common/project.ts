import paperImage from "@/public/assets/paper.jpg";
import AudioBookImage from "@/public/images/audiobookImg.png";
import NewsInImage from "@/public/images/newsinImg.png";
import EventifyImage from "@/public/images/eventifyImg.png";
import PersonalImage from "@/public/images/personalImg.png";

import { FaLaravel } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiDaisyui, SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

const projects = [
	{
		slug: "piljur-app",
		name: "Pilih Jurusan Website",
		description:
			"Pilih Jurusan is a career guidance consultation services consisting in workshops, psychological test, and coaching.",
		image: paperImage,
		url: "https://pilihjurusan.id/",
		github: null,
		language: [
			{
				name: "Next.js",
				icon: RiNextjsLine,
			},
			{
				name: "Tailwind",
				icon: RiTailwindCssLine,
			},
			{
				name: "TypeScript",
				icon: SiTypescript,
			},
		],
	},
	{
		slug: "personal-app",
		name: "Portofolio Website",
		description:
			"Web-base an application as a portofolio website that's include an experince skill. This made a version 1.0",
		image: PersonalImage,
		url: "https://porto-nadhir.vercel.app/",
		github: "https://github.com/Nadhiradhit/personal-website.git",
		language: [
			{
				name: "Next.js",
				icon: RiNextjsLine,
			},
			{
				name: "Tailwind",
				icon: RiTailwindCssLine,
			},
			{
				name: "TypeScript",
				icon: SiTypescript,
			},
		],
	},
	{
		slug: "eventify-app",
		name: "Eventify",
		description:
			"Web base an application as an event management system includes catering, videography, photography, makeup and more.",
		image: EventifyImage,
		url: null,
		github: "https://github.com/kelompok-1-Gitsid/Eventify",
		language: [
			{
				name: "Laravel",
				icon: FaLaravel,
			},
			{
				name: "JavaScript",
				icon: IoLogoJavascript,
			},
			{
				name: "Tailwind",
				icon: RiTailwindCssLine,
			},
			{
				name: "MySQL",
				icon: DiMysql,
			},
		],
	},
	{
		slug: "audiobook-app",
		name: "AudioBook Polimedia",
		description:
			"Web base an application as an audio book management system for reading while listening to stories.",
		image: AudioBookImage,
		url: null,
		github: "https://github.com/asyarbre/audiobook-web",
		language: [
			{
				name: "Laravel",
				icon: FaLaravel,
			},
			{
				name: "JavaScript",
				icon: IoLogoJavascript,
			},
			{
				name: "Tailwind",
				icon: RiTailwindCssLine,
			},
			{
				name: "DaisyUi",
				icon: SiDaisyui,
			},
			{
				name: "MySQL",
				icon: DiMysql,
			},
		],
	},
	{
		slug: "newsin-app",
		name: "NewsIn",
		description:
			"Simple web base an application as a web to input the latest news with a simple CRUD system.",
		image: NewsInImage,
		url: null,
		github: "https://github.com/Nadhiradhit/newsin-app",
		language: [
			{
				name: "Laravel",
				icon: FaLaravel,
			},
			{
				name: "JavaScript",
				icon: IoLogoJavascript,
			},
			{
				name: "Tailwind",
				icon: RiTailwindCssLine,
			},
			{
				name: "DaisyUi",
				icon: SiDaisyui,
			},
		],
	},
];

export { projects };
