import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import './css/Form.scss';

export default function Form() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = (data) => console.log(data);

	return (
		<form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="name" className="label--name">
				Name
				<input type="text" id="name" name="name" className="form__input" />
			</label>
			<label htmlFor="name" className="label--email">
				E-mail
				<input type="email" id="email" name="email" className="form__input" />
			</label>
			<label htmlFor="message" className="label--message">
				Message
				<textarea
					id="email"
					name="message"
					className="form__textarea"
					cols="30"
					rows="5"
				/>
			</label>
			<Button type={'secondary'}>Send</Button>
		</form>
	);
}

// TODO: register implementeren
