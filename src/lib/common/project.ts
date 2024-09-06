import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import paperImage from "@/public/assets/paper.jpg";
import { SiTypescript } from "react-icons/si";

import AudioBookImage from "@/public/images/audiobookImg.png";
import NewsInImage from "@/public/images/newsinImg.png";
import EventifyImage from "@/public/images/eventifyImg.png";
import PersonalImage from "@/public/images/personalImg.png";

const projects = [
	{
		name: "Portofolio Website",
		description:
			"Web-base an application as a portofolio website that's include an experince skill.",
		image: PersonalImage,
		url: "https://porto-nadhir.vercel.app/",
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
		name: "Eventify",
		description:
			"Web base an application as an event management system includes catering, videography, photography, makeup and more.",
		image: EventifyImage,
		url: "https://github.com/kelompok-1-Gitsid/Eventify",
	},
	{
		name: "AudioBook Polimedia",
		description:
			"Web base an application as an audio book management system for reading while listening to stories.",
		image: AudioBookImage,
		url: "https://github.com/asyarbre/audiobook-web",
	},
	{
		name: "NewsIn",
		description:
			"Simple web base an application as a web to input the latest news with a simple CRUD system.",
		image: NewsInImage,
		url: "https://github.com/Nadhiradhit/newsin-app",
	},
	{
		name: "Pilih",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, quibusdam omnis! Error, blanditiis deleniti, unde laboriosam ex quas, vitae soluta dolore eos minima porro dolor neque reprehenderit ea omnis necessitatibus.",
		image: paperImage,
		url: "https://porto-nadhir.vercel.app/",
	},
];

export { projects };
