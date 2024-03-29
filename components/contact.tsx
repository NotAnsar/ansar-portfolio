import MarqueeSection from './marquee-section';
import { Button } from './ui/button';
import Wrapper from './wrapper';

export default function Contact() {
	return (
		<div id='contact'>
			<MarqueeSection>Contact</MarqueeSection>
			<Wrapper className='mb-20 '>
				<h2 className='font-bold text-5xl md:text-6xl leading-normal mb-6'>
					Interested?
					<br />
					Let’s talk!
				</h2>
				<form className='md:w-2/3 grid'>
					<input
						className='text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none'
						type='text'
						placeholder='I need'
					/>
					<div className='grid md:grid-cols-2 md:gap-8'>
						<input
							className='text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none'
							type='text'
							placeholder='Your Name'
						/>
						<input
							className='text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none'
							type='text'
							placeholder='Your Email'
						/>
					</div>

					<textarea
						placeholder='Your Message'
						className='text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none'
						rows={4}
					/>
					<Button className='px-6 py-7 w-fit mt-6'>Send Request</Button>
				</form>
			</Wrapper>
		</div>
	);
}
