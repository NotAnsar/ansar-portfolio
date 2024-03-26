import { cn } from '@/lib/utils';

export default function Wrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section className={cn('max-w-screen-xl mx-auto px-6', className)}>
			{children}
		</section>
	);
}
