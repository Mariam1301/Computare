import React from 'react'
import prices from './priceObj'
import { IoCheckmarkOutline } from 'react-icons/io5'
import './prices.css'
import 'fontsource-firago/400.css'
import 'fontsource-firago/700.css'

const renderPrices = () => {
	return prices.map((item) => {
		return (
			<div
				style={{
					background: item.bgc,
				}}
				className='price-outer'
			>
				<div className='price-inner'>
					{item.bestOffer ? (
						<div style={{ background: item.bgc }} className='price-best-outer'>
							<div className='price-best-inner'>
								<p className='price-best-inner-text'>BEST OFFER</p>
							</div>
						</div>
					) : (
						''
					)}
					<div
						className='price-title-container'
						style={{ background: item.bgc }}
					>
						<h2 className='price-title-container-title'>{item.title}</h2>
						<p className='price-title-container-feeOpt'>{item.feeOption}</p>
						<h3 className='price-title-container-price'>{item.price}</h3>
					</div>
					<div className='price-offers'>
						{item.offers.map((offer) => {
							return (
								<div className='price-offers-offer'>
									{offer}
									<IoCheckmarkOutline
										style={{
											color: item.checkMarkColor,
										}}
									/>
								</div>
							)
						})}
					</div>
					<button style={{ background: item.bgc }} className='price-button'>
						Enquire
					</button>
				</div>
			</div>
		)
	})
}

const Prices = () => {
	return <div className='prices'>{renderPrices()}</div>
}

export default Prices
