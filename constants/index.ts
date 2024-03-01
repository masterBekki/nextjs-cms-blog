import {
	Contact2,
	FileCode2,
	FolderArchive,
	Home,
	ListCollapse,
} from 'lucide-react'

export const navLinks = [
	{
		name: 'Home',
		route: '/',
		icon: Home,
	},
	{
		name: 'About',
		route: '/about',
		icon: ListCollapse,
	},
	{
		name: 'Blogs',
		route: '/blogs',
		icon: FileCode2,
	},
	{
		name: 'Home',
		route: '/blogs/archive',
		icon: FolderArchive,
	},
	{
		name: 'Contact',
		route: '/contact',
		icon: Contact2,
	},
]

export const popularCategories = [
	{ name: 'Front End', slug: 'front-end' },
	{ name: 'Back End', slug: 'back-end' },
	{ name: 'Full Stack', slug: 'full-stack' },
	{ name: 'Sun`iy intelect', slug: 'artificial-intelligence' },
]

export const popularTags = [
	{ name: 'ReactJs', slug: 'reactjs' },
	{ name: 'JavaScript', slug: 'java-script' },
	{ name: 'NodeJs', slug: 'node-js' },
	{ name: 'NextJs', slug: 'next-js' },
]
