import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Wrapper from '@/components/wrapper';
import { cn } from '@/lib/utils';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />

			<Contact />
			<Footer />
		</>
	);
}
