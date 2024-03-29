import Image from 'next/image';
import Wrapper from './wrapper';
import { Button, buttonVariants } from './ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Hero() {
	return (
		<Wrapper className='grid grid-cols-1 items-center justify-between py-14  md:grid-cols-7'>
			<div className='md:col-span-4 '>
				<h3 className='text-[2.5rem] sm:text-5xl md:text-7xl my-2 leading-snug sm:leading-normal'>
					Hi, I am{' '}
					<span className='font-medium text-main'>Ansar Karrouach</span>
					<br /> Web Developer
				</h3>
				<p className='text-muted-foreground my-6 text-lg'>
					I enjoy creating delightful, <br />
					human-centered digital experiences.
				</p>

				<a
					href='Karrouach_Ansar_Cv.pdf'
					download='Karrouach_Ansar_Resume.pdf'
					className={cn(buttonVariants(), 'flex gap-2 p-6 font-medium w-fit')}
				>
					<DownloadIcon /> Resume
				</a>
			</div>
			<Image
				alt='hero image'
				src={'/Saly.png'}
				width={500}
				height={500}
				className='md:col-span-3 w-full h-auto aspect-square'
			/>
		</Wrapper>
	);
}
