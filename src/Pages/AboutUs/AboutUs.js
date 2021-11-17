import React from 'react'
import { useEffect } from 'react'
import './aboutUs.css'

const renderInfo = () => {
	return (
		<div className='aboutUs-info'>
			<p className='aboutUs-info-text'>
				We came together to offer full assistance to businesses and people who
				want to establish themselves in Georgia and do business successfully.
			</p>
			<p className='aboutUs-info-text'>
				Our Services are divided in three major categories.
			</p>
			<div className='aboutUs-info-list'>
				<p>Finance</p>
				<ul>
					<li>financial and tax accounting</li>
					<li>Presentation of Financial Statements</li>
					<li>Audit of Financial Statements</li>
					<li>Managerial reporting</li>
					<li>Tax advisory services.</li>
				</ul>
			</div>
			<div className='aboutUs-info-list'>
				<p>Law</p>
				<ul>
					<li>Establishing Company in Georgia remotely</li>
					<li>Opening a bank account in Georgia remotely</li>
				</ul>
			</div>
			<div className='aboutUs-info-list'>
				<p>Other consultancy services</p>
				<ul>
					<li>Market research for different sectors in Georgia</li>
					<li>
						Arrangement of virtual meetings with importers and distributors in
						Georgia
					</li>
					<li>Real estate research and assistance with investment.</li>
				</ul>
			</div>
		</div>
	)
}

function AboutUs() {
	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<React.Fragment>
			<div className='aboutUs-title-container'>
				<h2>About Us</h2>
				<p>
					We are a team of professionals with expertise in various fields such
					as accounting, finance, Law.
				</p>
			</div>

			{renderInfo()}
		</React.Fragment>
	)
}

export default AboutUs
