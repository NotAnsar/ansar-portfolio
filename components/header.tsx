'use client';

import Link from 'next/link';
import ThemeSwitch from './theme-switch';

import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function Header() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<header className='sticky top-0 bg-background/70 backdrop-blur-sm z-10 '>
				<div className='flex justify-between items-center max-w-screen-xl mx-auto h-[72px] px-6 '>
					<Link
						href='/'
						className='text-4xl font-bold hover:text-main transition-all ease-in duration-300 cursor-pointer'
					>
						Ansar
					</Link>
					<nav className='hidden sm:flex gap-8 items-center'>
						{LINKS.map((l) => (
							<Link
								key={l.title}
								href={l.link}
								className='hover:text-muted-foreground transition-all ease-in duration-300'
							>
								{l.title}
							</Link>
						))}

						<ThemeSwitch className='ml-4' />
					</nav>
					<nav className='block sm:hidden '>
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</nav>
				</div>
			</header>
			{isOpen && (
				<div className='w-full px-6 py-4 fixed top-[72px] bg-background/70 backdrop-blur-sm z-10 border-b border-border'>
					{LINKS.map((l) => (
						<Link
							key={l.title}
							href={l.link}
							className='block py-2 hover:text-muted-foreground transition-all ease-in duration-300'
						>
							{l.title}
						</Link>
					))}
					<ThemeSwitch className='my-2' />
				</div>
			)}
		</>
	);
}

const LINKS = [
	{ title: 'About', link: '/#about' },
	{ title: 'Skills', link: '/#skills' },
	{ title: 'Projects', link: '/#projects' },
	{ title: 'Contact', link: '/#contact' },
];
