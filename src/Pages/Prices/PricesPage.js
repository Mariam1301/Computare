import React from 'react'
import Prices from '../../components/Prices/Prices'
import './pricesPage.css'

export default function PricesPage() {
	return (
		<>
			<div className='pricesPage-title'>
				<h2>Prices</h2>
				<p>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
			</div>
			<Prices />
		</>
	)
}