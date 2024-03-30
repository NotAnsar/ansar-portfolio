'use server';
import { z } from 'zod';
import { createTransport } from 'nodemailer';

const contactSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long.' })
		.max(30, { message: 'Name must be no longer than 30 characters.' }),
	need: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long.' })
		.max(100, { message: 'Name must be no longer than 30 characters.' }),
	message: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long.' })
		.max(254, { message: 'Name must be no longer than 30 characters.' }),
	email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type State =
	| {
			errors?: {
				name?: string[];
				message?: string[];
				need?: string[];
				email?: string[];
			};
			message?: string | null;
	  }
	| undefined;

export async function contactAction(
	prevState: State,
	formData: FormData
): Promise<State> {
	const validatedFields = contactSchema.safeParse({
		name: formData.get('name'),
		message: formData.get('message'),
		need: formData.get('need'),
		email: formData.get('email'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Send Request.',
		};
	}

	const { email, message, name, need } = validatedFields.data;

	try {
		const transport = createTransport({
			service: 'gmail',
			auth: {
				user: process.env.MY_EMAIL,
				pass: process.env.MY_PASSWORD,
			},
		});

		await transport.sendMail({
			from: process.env.MY_EMAIL,
			to: process.env.MY_EMAIL,
			cc: email,
			subject: `Message from ${name} (${email}) | ${need}`,
			text: message,
		});

		return { message: 'Request was sent succesfully.' };
	} catch (error) {
		console.error(error);

		return { message: 'Something Went Wrong: Failed to Send Request.' };
	}
}
