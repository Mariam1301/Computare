import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ExpertGuides from './components/ExpertGuides/ExpertGuides'
import SingleExpertGuide from './Pages/SingleExpertGuide/SingleExpertGuide'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/guides/:id' element={<SingleExpertGuide />} />
				<Route path='/' element={<ExpertGuides />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
