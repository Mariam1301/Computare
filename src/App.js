import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'

function App() {
	return (
		<div>
			{/* <h1>I love you Marmaarr</h1> */}
			<BrowserRouter>
				<Header />
				<Routes></Routes>
				<Footer />
			</BrowserRouter>
			{/* <Footer /> */}
		</div>
	)
}

export default App
