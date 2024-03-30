import React from 'react';
import Wrapper from './wrapper';
import Link from 'next/link';

export default function Footer() {
	return (
		<Wrapper className='border-t border-foreground py-8 grid md:grid-cols-4'>
			<div className='sm:col-span-2 my-4 text-[15px] text-muted-foreground'>
				<p>© 2021 Ansar.</p>
				<p>All rights reserved</p>
			</div>
			<div className='col-span-1'>
				<h4>Work with me</h4>
				<Link
					href={''}
					className='text-muted-foreground text-sm hover:opacity-70 transition-all duration-300'
				>
					ansar.karrouach@icloud.com
				</Link>
			</div>
			<ul className='col-span-1 mt-4 sm:ml-8 sm:mt-0'>
				<li>Follow me</li>
				<Link
					href={'http://github.com/NotAnsar'}
					className='text-sm text-muted-foreground block my-1 hover:opacity-70 transition-all duration-300'
					target='_blank'
				>
					Github
				</Link>
				<Link
					href={'https://twitter.com/vnsvrKarrouach'}
					className='text-sm text-muted-foreground block my-1 hover:opacity-70 transition-all duration-300'
					target='_blank'
				>
					Twitter
				</Link>
				<Link
					href={'https://www.linkedin.com/in/ansarkarrouach/'}
					className='text-sm text-muted-foreground block my-1 hover:opacity-70 transition-all duration-300'
					target='_blank'
				>
					Linkdin
				</Link>
			</ul>
		</Wrapper>
	);
}
