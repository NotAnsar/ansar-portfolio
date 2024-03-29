import Image from 'next/image';
import Wrapper from './wrapper';
import { Button } from './ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

export default function Hero() {
	return (
		<Wrapper className='grid grid-cols-1 items-center justify-between py-14  md:grid-cols-7'>
			<div className='md:col-span-4 '>
				{/* <h3 className='text-4xl my-2 leading-relaxed'> */}
				<h3 className='text-[2.5rem] sm:text-5xl md:text-7xl my-2 leading-snug sm:leading-normal'>
					Hi, I am{' '}
					<span className='font-medium text-main'>Ansar Karrouach</span>
					<br /> Web Developer
				</h3>
				<p className='text-muted-foreground my-6 text-lg'>
					I enjoy creating delightful, <br />
					human-centered digital experiences.
				</p>
				<Button className='flex gap-2 p-6 font-medium'>
					<DownloadIcon /> Resume
				</Button>
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
