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
		"👋 Hey! I'm Ansar Karrouach, a MERN Stack Developer. Proficient in MongoDB, Express.js, React, and Node.js, with expertise in TypeScript and Next.js. Passionate about crafting seamless digital solutions. Let's connect and explore web development possibilities!",
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
