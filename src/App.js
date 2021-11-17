import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AllServices from './components/AllServices/AllServices'
import SingleExpertGuide from './Pages/SingleExpertGuide/SingleExpertGuide'
import Homepage from './Pages/homePage/HomePage'
import PricesPage from './Pages/Prices/PricesPage'
import Fof from './Pages/404/404'
import Contact from './Pages/contact/contact'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			{/* <div className='wrapper'></div> */}
			<Header />
			<Routes>
				<Route path='/guides/:id' element={<SingleExpertGuide />} />
				<Route path='/services/:id' element={<Fof />} />
				<Route path='/prices' element={<PricesPage />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/services' element={<AllServices />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/' element={<Homepage />} />
				<Route path='/404' element={<Fof />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
