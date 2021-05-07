import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Button from 'components/Button/Button';
import Preloader from 'components/Preloader/Preloader';
import styles from './css/Form.module.scss';

export default function Form() {
	const [loading, toggleLoading] = useState(false);
	const [messageSent, toggleMessageSent] = useState(false);
	const [messageError, toggleMessageError] = useState(false);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const onSubmit = async (data, e) => {
		const serviceId = 'service_stagesync';
		const templateId = 'contact_form';
		const userId = 'user_pkIu9zb1W7pqdFO2mcyhy';

		toggleLoading(true);
		try {
			await emailjs.sendForm(serviceId, templateId, '#contact-form', userId);
			e.target.reset();
			toggleLoading(false);
			toggleMessageSent(true);
		} catch (e) {
			console.error(e);
			toggleMessageError(true);
		}
		toggleLoading(false);
	};
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
			id="contact-form"
		>
			{loading && (
				<div className={styles.overlay}>
					<Preloader />
				</div>
			)}

			{!messageSent && !messageError && (
				<>
					<h2 className={styles.title}>We'd love to hear from you!</h2>

					<input type="hidden" name="contact_number" />
					<label htmlFor="name" className={styles.label}>
						Name
						{errors.name && (
							<span className={styles['error-message']}>
								Please provide a name
							</span>
						)}
						<input
							type="text"
							id="name"
							name="name"
							className={`${styles.input} ${errors.name ? styles.error : ''}`}
							{...register('name', { required: true })}
						/>
					</label>
					<label htmlFor="email" className={styles.label}>
						E-mail
						{errors.email && (
							<span className={styles['error-message']}>
								Please provide an email address
							</span>
						)}
						<input
							type="email"
							id="email"
							name="email"
							className={`${styles.input} ${errors.email ? styles.error : ''}`}
							{...register('email', { required: true })}
						/>
					</label>
					<label htmlFor="message" className={styles.label}>
						Message
						{errors.message && (
							<span className={styles['error-message']}>
								Please provide a message
							</span>
						)}
						<textarea
							id="message"
							name="message"
							className={`${styles.textarea} ${errors.message && styles.error}`}
							cols="30"
							rows="5"
							{...register('message', { required: true })}
						/>
					</label>
					<Button type={'secondary'} isAlt>
						Send
					</Button>
				</>
			)}
			{messageSent && <h2>Thanks for your message!</h2>}
			{messageError && (
				<>
					<h2>Oops! We didn't quite catch that...</h2>
					<p>Please refresh the page and try again.</p>
				</>
			)}
		</form>
	);
}
