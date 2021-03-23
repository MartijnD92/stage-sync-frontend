import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import SearchBar from './components/SearchBar';
// import ResultsList from './components/ResultsList';

function App() {

  async function getArtists() {
    try {
      const response = await axios.get('http://localhost:8080/artists');
      return response.data[0];

    } catch (error) {
      console.error(error);
    }
  }

	return (
		<div className="container">
			<header>
				<NavBar />
			</header>
			<aside>
				<SideMenu />
			</aside>
			<main>
				<SearchBar />
			</main>
		</div>
	);
}

export default App;
