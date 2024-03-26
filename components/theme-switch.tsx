'use client';

import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';
import { cn } from '@/lib/utils';

export default function ThemeSwitch({ className }: { className?: string }) {
	const { setTheme, theme } = useTheme();

	return (
		<Switch
			className={cn('w-8 h-4', className)}
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		/>
	);
}
