import React from 'react';
import Button from 'components/Button/Button';
import { ReactComponent as Spotlight } from 'assets/spotlight.svg';
import dashboard from 'assets/mockup-dashboard.png';
import microphone from 'assets/microphone.jpg';
import './css/Home.scss';

export default function Home() {
	return (
		<main>
			<section className="teaser">
				<div className="teaser--left">
					<h1 className="teaser__title">StageSync knows about your gigs</h1>
					<p className="teaser__subtitle">
						A smart booking system for booking agencies and artists that does
						all the work for you.
					</p>
					<Button type={'primary'} link={'/signup'}>
						Try it now
					</Button>
				</div>
				<div className="teaser--right">
					<Spotlight className="spotlight" />
				</div>
			</section>
			<div className="about__wrapper">
				<section className="about" id="about">
					<div className="about__left">
						<div className="about__img-container">
							<div className="about__border">
								<img
									className="about__img"
									src={dashboard}
									alt="dashboard preview"
								/>
							</div>
						</div>
					</div>
					<div className="about__right">
						<div className="about__text-container">
							<h2 className="about__title">About StageSync</h2>
							<p className="about__text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Perferendis praesentium, quibusdam laudantium officiis
								architecto aliquid iure natus beatae earum unde nostrum quia
								accusamus cum voluptates dolor sint inventore ab alias eveniet
								fuga exercitationem. Repellat debitis possimus similique
								inventore consectetur, omnis quisquam, autem ducimus hic
								mollitia earum odio, esse ea quae.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className="contact__wrapper">
				<section className="contact" id="contact">
					<div className="contact__left">
						<div className="contact__img-container">
							<img className="contact__img" src={microphone} alt="microphone" />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
