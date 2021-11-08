import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
	return (
		<div>
			{/* <h1>I love you Marmaarr</h1> */}
			<h1>hello</h1>
			<Header />
			<Routes></Routes>
			<Footer />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
