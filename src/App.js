import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ExpertGuides from './components/ExpertGuides/ExpertGuides'
import Prices from './components/Prices/Prices'
import AllServices from './components/AllServices/AllServices'
import SingleExpertGuide from './Pages/SingleExpertGuide/SingleExpertGuide'
import Homepage from './Pages/homePage/HomePage'
import PricesPage from './Pages/Prices/PricesPage'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/guides/:id' element={<SingleExpertGuide />} />
				<Route path='/prices' element={<PricesPage />} />
				<Route path='/services' element={<AllServices />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/' element={<Homepage />} />
				<Route path='/' element={<ExpertGuides />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
