import ContactForm from './contact-form';
import MarqueeSection from './marquee-section';
import Wrapper from './wrapper';

export default function Contact() {
	return (
		<div id='contact'>
			<MarqueeSection>Contact</MarqueeSection>
			<Wrapper className='mb-20 '>
				<h2 className='font-bold text-5xl md:text-6xl leading-normal mb-6 font-secondary'>
					Interested?
					<br />
					{"Let's talk!"}
				</h2>
				<ContactForm />
			</Wrapper>
		</div>
	);
}
