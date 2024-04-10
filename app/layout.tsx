import type { Metadata } from 'next';
import { Poppins, Lora } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600'],
});

const secondaryfont = Lora({
	subsets: ['latin'],
	variable: '--secondary',
});

export const metadata: Metadata = {
	title: 'Ansar Karrouach',
	description:
		"👋 Hey there! I'm Karrouach Ansar, a Full Stack Web Developer based in Morocco. I specialize in crafting dynamic web applications using Next.js. With 4+ years of experience in MongoDB, Express.js, React, and Node.js, along with proficiency in TypeScript, I'm passionate about crafting visually stunning designs and seamless digital solutions. I love creating exceptional online experiences that effectively communicate brand messages to audiences. Let's connect and explore exciting web development possibilities together!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				className={cn(secondaryfont.variable, poppins.className, 'bg-noise')}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
