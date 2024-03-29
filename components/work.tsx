import React from 'react';
import MarqueeSection from './marquee-section';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
	return (
		<div id='work'>
			<MarqueeSection>Work</MarqueeSection>
			<div className='grid md:grid-cols-2 gap-4'>
				{WORK.map((w) => (
					<div
						key={w.title}
						className='w-full h-auto aspect-square bg-foreground text-background relative group border border-border hover:bg-background/85 transition-all duration-1000 z-10'
					>
						<Image
							alt={w.title}
							src={w.image}
							height={700}
							width={700}
							className='w-full h-auto aspect-square z-0'
						/>
						<div className='bg-black/70 sm:bg-transparent absolute top-0 w-full h-full group-hover:bg-black/70 z-[1] transition-all duration-1000' />

						<Link
							href={w.link}
							target='_blank'
							className='block sm:hidden group-hover:block absolute right-0 top-0 cursor-pointer z-[2] p-8 bg-foreground/85 rounded-bl-3xl group/link'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-move-up-right transition-all duration-300 group-hover/link:translate-x-2 group-hover/link:-translate-y-2 '
							>
								<path d='M7 7h10v10' />
								<path d='M7 17 17 7' />
							</svg>
						</Link>

						<div className='opacity-100 bottom-0 sm:opacity-0 sm:bottom-[150px] absolute p-8 mr-8  group-hover:bottom-0 group-hover:opacity-100 transition-all duration-1000 z-[2] '>
							<h3 className='text-2xl sm:text-[28px] text-white'>{w.title}</h3>
							<p className='my-4 text-sm sm:text-base text-muted-foreground'>
								{w.desc}
							</p>
							<Link
								href={w.source}
								className='text-muted-foreground text-[13px] sm:text-[15px] flex gap-2 items-center hover:gap-4 transition-all duration-300 pb-1 border-b-2 border-transparent hover:border-muted-foreground w-fit'
								target='_blank'
							>
								View Code Source
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='lucide lucide-arrow-right'
								>
									<path d='M5 12h14' />
									<path d='m12 5 7 7-7 7' />
								</svg>{' '}
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const WORK = [
	{
		title: 'Cadency | Music Web App',
		desc: 'Cadency is a music platform developed using cutting-edge technology, including Next.js 14, Tailwind CSS, and Shadcn UI for styling, Prisma with a PostgreSQL database, and NextAuth for authentication.',

		link: 'https://cadency-sage.vercel.app/',
		image: '/Cadency.png',
		source: 'https://github.com/NotAnsar/cadency',
	},
	{
		title: 'Connectify | Social Media App',
		desc: 'Connectify is a social media application developed using React.js, Node.js, SCSS, Express.js, and MySQL as the database.',
		link: 'https://www.youtube.com/watch?v=M3_dqIESm5Y&ab_channel=AnsarKarrouach',
		image: '/Connectify.png',
		source: 'https://github.com/NotAnsar/connectify-client',
	},
];
