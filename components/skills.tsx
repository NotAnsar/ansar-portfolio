import { cn } from '@/lib/utils';
import MarqueeSection from './marquee-section';
import Wrapper from './wrapper';

export default function Skills() {
	return (
		<div id='skills'>
			<MarqueeSection>Skills</MarqueeSection>
			<Wrapper className='mb-20 py-14'>
				<h2 className='font-bold text-5xl md:text-6xl leading-normal mb-20 font-secondary'>
					Tools
					<br />
					{'I work With!'}
				</h2>

				<div className='grid sm:grid-cols-2 gap-6 lg:flex justify-between'>
					<div>
						<h3 className='text-3xl mb-3 font-medium'>Front-end</h3>
						<ul className='flex flex-col gap-3'>
							<li>HTML . CSS . SCSS</li>
							<li>
								JavaScript . Typescript
								<Dot />
							</li>
							<li>
								React.js <Dot /> . Redux Toolkit . React Query <Dot />
							</li>
							<li>
								Next.js <Dot /> . Next Auth
							</li>
							<li>
								TailwindCSS
								<Dot /> . Shadcn-ui
								<Dot />
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-3xl mb-3 font-medium'>Database or ORM</h3>
						<ul className='flex flex-col gap-3'>
							<li>
								MongoDB . Mongoose <Dot />
							</li>
							<li>
								MySQL . PostgreSQL
								<Dot />
							</li>
							<li>T-SQL . PL-SQL</li>
							<li>
								Prisma
								<Dot />
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-3xl mb-3 font-medium'>Back-end</h3>
						<ul className='flex flex-col gap-3'>
							<li>Node.js</li>
							<li>
								Express.js
								<Dot />
							</li>
							<li>Socket.io</li>
							<li>Postman</li>
						</ul>
					</div>
					<div>
						<h3 className='text-3xl mb-3 font-medium'>Other Tools</h3>
						<ul className='flex flex-col gap-3'>
							<li>
								Figma
								<Dot /> . Adobe XD
							</li>
							<li>Uml</li>
							<li>
								Git <Dot />, GitHub <Dot />
							</li>
							<li>
								Vs code
								<Dot />
							</li>
						</ul>
					</div>
				</div>
				<p className='mt-12 text-center text-sm text-muted-foreground'>
					{'*Tools with a dot are the ones i use the most ;)'}
				</p>
			</Wrapper>
		</div>
	);
}

function Dot({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'w-[6px] h-[6px] rounded-full bg-foreground inline-block mb-2 ml-1',
				className
			)}
		/>
	);
}
