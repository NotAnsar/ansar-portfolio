'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { contactAction } from '@/action/contact-action';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { toast } from './ui/use-toast';

export default function ContactForm() {
	const initialState = { message: null, errors: {} };
	const [state, dispatch] = useFormState(contactAction, initialState);
	const form = useRef<HTMLFormElement>(null);

	if (state?.message === 'Request was sent succesfully.') {
		toast({
			title: 'Success',
			description: state.message,
		});
		form.current?.reset();
	}
	if (state?.message === 'Something Went Wrong: Failed to Send Request.') {
		toast({
			variant: 'destructive',
			title: 'Failed',
			description: state.message,
		});
		form.current?.reset();
	}

	return (
		<form className='md:w-2/3 grid' action={dispatch} ref={form}>
			<input
				className={cn(
					'text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none placeholder:text-[#898989]',
					state?.errors?.need ? ' border-b-destructive' : ''
				)}
				type='text'
				placeholder='I need'
				name='need'
				required
			/>
			<div className='grid md:grid-cols-2 md:gap-8'>
				<input
					className={cn(
						'text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none placeholder:text-[#898989]',
						state?.errors?.name ? ' border-b-destructive' : ''
					)}
					type='text'
					placeholder='Your Name'
					name='name'
					required
				/>
				<input
					className={cn(
						'text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none placeholder:text-[#898989]',
						state?.errors?.email ? ' border-b-destructive' : ''
					)}
					type='email'
					placeholder='Your Email'
					name='email'
					required
				/>
			</div>

			<textarea
				placeholder='Your Message'
				className={cn(
					'text-xl md:text-2xl pb-4 my-5  border-b-foreground border-b-2 bg-transparent outline-none placeholder:text-[#898989]',
					state?.errors?.message ? ' border-b-destructive' : ''
				)}
				rows={4}
				required
				name='message'
			/>
			<LoadingButton />
		</form>
	);
}

function LoadingButton() {
	const { pending } = useFormStatus();

	return (
		<Button className='px-6 py-7 w-fit mt-6' type='submit' disabled={pending}>
			{pending ? 'Sending Request...' : 'Send Request'}
		</Button>
	);
}
