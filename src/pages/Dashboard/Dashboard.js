import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import NavBar from 'components/NavBar/NavBar';
import SideMenu from 'components/SideMenu/SideMenu';
import Hamburger from 'components/Hamburger/Hamburger';
import Button from 'components/Button/Button';
import SettingsModal from 'components/SettingsModal/SettingsModal';
import ProfileModal from 'components/ProfileModal/ProfileModal';
import AddArtistModal from 'components/AddArtistModal/AddArtistModal';
import AddGigModal from 'components/AddGigModal/AddGigModal';
import AddButton from 'components/AddButton/AddButton';
import SearchBar from 'components/SearchBar/SearchBar';
import ResultsList from 'components/ResultsList/ResultsList';
import getGigs from 'helpers/getGigs';
import deleteGigsById from 'helpers/deleteGigsById';
import hasPermission, { actions } from 'user-permissions/permissions';
import styles from './css/Dashboard.module.scss';

export default function Dashboard() {
	const { user, logOut } = useContext(AuthContext);
	const [mobileMenu, toggleMobileMenu] = useState(false);

	const userPredefinedSettings = JSON.parse(
		localStorage.getItem('userSettings')
	);
	const [settings, setSettings] = useState(
		userPredefinedSettings || {
			ticketStats: true,
			invoiceStatus: false,
			gigType: false,
			room: false,
			transparency: true,
		}
	);
	const [error, setError] = useState(false);

	const [isModalOpen, setIsModalOpen] = useState({
		settings: false,
		artist: false,
		gig: false,
		profile: false,
	});

	const [gigResults, setGigResults] = useState(null);
	const [gigQuery, setGigQuery] = useState({
		query: '',
		time: Date.now(),
	});

	useEffect(() => {
		gigQuery.query && getGigs(setGigResults, gigQuery, setError);
	}, [gigQuery]);

	return (
		<>
			<div className={styles.hamburgerBtn}>
				<Hamburger
					active={mobileMenu}
					onClick={() => toggleMobileMenu(!mobileMenu)}
				/>
			</div>
			<div
				className={styles.mobileSideMenu}
				style={{ display: mobileMenu && 'flex' }}
			>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavHashLink
							to="/dashboard#profile"
							onClick={() => {
								setIsModalOpen({ profile: true });
								toggleMobileMenu(false);
							}}
						>
							Profile
						</NavHashLink>
					</li>
					<li>
						<NavHashLink
							to="/dashboard#settings"
							onClick={() => {
								setIsModalOpen({ settings: true });
								toggleMobileMenu(false);
							}}
						>
							Settings
						</NavHashLink>
					</li>
					<Button variant={'secondary'} url={'/'} onClick={logOut}>
						Log out
					</Button>
				</ul>
			</div>
			<SideMenu isModalOpen={isModalOpen} modalHandler={setIsModalOpen} />
			<main className={styles.content}>
				<NavBar>
					<AddButton modalSetter={setIsModalOpen} />
					<SearchBar setGigHandler={setGigQuery} />
				</NavBar>
				{error ? (
					<div className={styles['title-container']}>
						<h1 className={styles['no-content']}>
							Sorry! We couldn't find the thing you were looking for!
						</h1>
					</div>
				) : gigResults !== null ? (
					<div className={styles['table-container']}>
						{hasPermission(user, actions.DELETE_RECORD) &&
							gigResults.some((gig) => gig.select) && (
								<button
									className={styles.deleteBtn}
									onClick={() => {
										deleteGigsById(
											gigResults,
											setGigResults,
											gigQuery,
											setError
										);
									}}
								>
									Delete
								</button>
							)}
						<ResultsList
							results={gigResults}
							setGigStatus={setGigResults}
							settings={settings}
						/>
					</div>
				) : (
					<div className={styles['title-container']}>
						<h1 className={styles['no-content']}>
							Let's give that search bar a try!
							<br />
							(Or add an artist or gig if it's your first time)
						</h1>
					</div>
				)}
				{isModalOpen.settings && (
					<SettingsModal
						settings={settings}
						settingsHandler={setSettings}
						modalHandler={setIsModalOpen}
					/>
				)}
				{isModalOpen.profile && <ProfileModal modalHandler={setIsModalOpen} />}
				{isModalOpen.artist && <AddArtistModal modalHandler={setIsModalOpen} />}
				{isModalOpen.gig && <AddGigModal modalHandler={setIsModalOpen} />}
			</main>
		</>
	);
}
