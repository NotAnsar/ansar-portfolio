import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MarqueeSection({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Marquee speed={100} autoFill={true}>
			<p className='py-16 text-[#414141] text-8xl font-black mr-12 '>
				{children}
			</p>
		</Marquee>
	);
}
