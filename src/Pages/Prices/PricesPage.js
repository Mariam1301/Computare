import React from 'react'
import Prices from '../../components/Prices/Prices'
import { useEffect } from 'react'
import './pricesPage.css'

export default function PricesPage() {
	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<>
			<div className='pricesPage-title'>
				<h2>Prices</h2>
			</div>
			<Prices />
		</>
	)
}
