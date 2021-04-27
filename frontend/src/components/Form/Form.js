import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import styles from './css/Form.module.scss';

export default function Form() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = (data) => console.log(data);

	return (
		<form className={styles['contact-form']} onSubmit={handleSubmit(onSubmit)}>
			<label
				htmlFor="name"
				className={`${styles.label} ${styles['label--name']}`}
			>
				Name
				<input
					type="text"
					id="name"
					name="name"
					className={styles['form__input']}
				/>
			</label>
			<label htmlFor="name" className="label label--email">
				E-mail
				<input
					type="email"
					id="email"
					name="email"
					className={styles['form__input']}
				/>
			</label>
			<label htmlFor="message" className="label label--message">
				Message
				<textarea
					id="email"
					name="message"
					className={styles['form__textarea']}
					cols="30"
					rows="5"
				/>
			</label>
			<Button type={'secondary'} isAlt>Send</Button>
		</form>
	);
}

// TODO: register implementeren
