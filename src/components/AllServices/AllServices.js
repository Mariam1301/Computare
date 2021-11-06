import React from 'react'
import servicesObj from './servicesObj'
import './allServices.css'

const { allServicesObj, popularServicesObj } = servicesObj

const renderPopularServices = () => {
	return popularServicesObj.map((s) => {
		return (
			<div className='service-popular'>
				<h2 className='service-title'>{s.title}</h2>
				<p className='service-text'>{s.info}</p>
			</div>
		)
	})
}

const renderAllServices = () => {
	return allServicesObj.map((s) => {
		return (
			<div className='service-all'>
				<h2 className='service-title'>{s.title}</h2>
				<p className='service-text'>{s.info}</p>
			</div>
		)
	})
}

export default function AllServices() {
	return (
		<div className='service-wrapper'>
			<h1 className='service-popular-title'>Our Most Popular Services</h1>
			<div className='popular-services'>{renderPopularServices()}</div>
			<h1 className='all-services-title'>All Services</h1>
			<div className='all-services'>{renderAllServices()}</div>
		</div>
	)
}
