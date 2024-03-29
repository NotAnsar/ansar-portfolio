'use client';
import { useTheme } from 'next-themes';
import Marquee from 'react-fast-marquee';

export default function MarqueeSection({
	children,
}: {
	children: React.ReactNode;
}) {
	const { theme } = useTheme();
	return (
		<Marquee speed={100} autoFill={true}>
			<p
				className='py-16  text-8xl font-black mr-12 text-transparent'
				style={{
					WebkitTextStroke: `0.5px ${theme === 'dark' ? '#fff' : '#000'}`,
				}}
			>
				{children}
			</p>
		</Marquee>
	);
}
