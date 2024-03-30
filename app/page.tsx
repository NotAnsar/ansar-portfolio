import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Work from '@/components/work';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Skills />

			<Work />
			<Contact />
			<Footer />
		</>
	);
}
