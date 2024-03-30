import { cn } from '@/lib/utils';

export default function Wrapper({
	children,
	className,
	...props
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section
			className={cn('max-w-screen-xl mx-auto px-4 sm:px-6 ', className)}
			{...props}
		>
			{children}
		</section>
	);
}
