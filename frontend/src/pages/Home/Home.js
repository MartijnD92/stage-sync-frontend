import React from 'react';
import NavBar from 'components/NavBar/NavBar';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Footer from 'components/Footer/Footer';
import { ReactComponent as Spotlight } from 'assets/spotlight.svg';
import dashboard from 'assets/mockup-dashboard.png';
import microphone from 'assets/microphone.jpg';
import './css/Home.scss';

export default function Home() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<section className="teaser">
					<div className="content-container">
						<div className="teaser--left">
							<h1 className="teaser__title">StageSync knows about your gigs</h1>
							<p className="teaser__subtitle">
								A smart booking system for booking agencies and artists that
								does all the work for you.
							</p>
							<Button type={'primary'} isAlt link={'/signup'}>
								Try it now
							</Button>
						</div>
						<div className="teaser--right">
							<Spotlight className="spotlight" />
						</div>
					</div>
				</section>
				<section className="about" id="about">
					<div className="content-container">
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
									StageSync's intuitive and intelligent design allows artists
									and booking agents alike to easily and comfortably get
									insightful details about upcoming shows.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="contact" id="contact">
					<div className="content-container">
						<img className="contact__img" src={microphone} alt="microphone" />
						<div className="contact__right">
							<Form />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
