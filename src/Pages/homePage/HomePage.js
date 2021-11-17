import React from 'react'
import { useEffect } from 'react'
import welcome from './images/welcome.png'
import ServiceSection from '../../components/seviceSection/serviceSection'
import ExpertGuides from './../../components/ExpertGuides/ExpertGuides'
import Button from './../../components/commons/Button/Button'
import './home.css'

const Homepage = () => {
	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<div className='home-page'>
			<div className='welcome'>
				<div className='home-text'>
					<p>
						<p id='underline'>Our mission</p>
						is to help companies achieve their goals in a rapidly changing
						environment, by providing services that are both in compliance with
						local law and also are unique to the needs of each client.
					</p>
					<Button label='Prices' linkTo={'/prices'} />
				</div>
				<img src={welcome} alt=''></img>
			</div>
			<ServiceSection />
			<ExpertGuides />
		</div>
	)
}

export default Homepage
