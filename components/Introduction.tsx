'use client';

import { useScroll, motion, MotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Introduction({ value }: { value: string }) {
	const el = useRef<HTMLParagraphElement>(null);
	const { scrollYProgress } = useScroll({
		target: el,
		offset: ['start end', 'start start'],
	});
	const words = value.split(' ');

	return (
		<p
			className='text-2xl p-4 sm:text-3xl  md:leading-snug font-semibold  md:p-10 font-secondary flex flex-wrap mt-16 mb-48'
			ref={el}
		>
			{words.map((w, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;

				return (
					<Word key={i} range={[start, end]} progress={scrollYProgress}>
						{w}
					</Word>
				);
			})}
		</p>
	);
}

export function Word({
	children,
	range,
	progress,
}: {
	children: React.ReactNode;
	range: number[];
	progress: MotionValue<number>;
}) {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className='mr-3 mt-3 relative text-main'>
			<motion.span style={{ opacity }} className='text-main absolute'>
				{children}
			</motion.span>
			<span className='text-muted-foreground/50 '>{children}</span>
		</span>
	);
}
