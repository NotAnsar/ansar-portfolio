import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
	// const poppins = Montserrat({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
	title: 'Ansar Karrouach',
	description: "Ansar's Karrouach Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
