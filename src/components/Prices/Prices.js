import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import './prices.css'
import 'fontsource-firago/400.css'
import 'fontsource-firago/700.css'

const prices = [
	{
		title: 'Remote Personal Bank Account',
		feeOption: 'One-time Fee',
		price: '199$',
		offers: [
			'Preparing documentation',
			'Opening a personal bank account in BOG',
			'Activating Indernet and Mobive bank',
			'Activation of debit',
		],
		bestOffer: false,
		bgc: `linear-gradient(258.03deg, #610BFC -0.9%, #FF37CC 100%)`,
		checkMarkColor: '#610BFC',
	},
	{
		title: 'Remote LLC Registration',
		feeOption: 'One-time Fee',
		price: '499$',
		offers: [
			'Preparing documentation',
			'Legal Address registration',
			'Full Set up of LLC in Georgia',
		],
		bestOffer: true,
		bgc: `linear-gradient(258.03deg, #EBFF5F -0.9%, #6ABD0D 100%)`,
		checkMarkColor: '#6ABD0D',
	},
	{
		title: 'Accounting and tax returns',
		feeOption: 'Monthly Fee',
		price: '50-200$',
		offers: [
			'Monthly financial Accounting',
			'All due Tax Declarations',
			'Monthly financial Reporting',
		],
		bestOffer: false,
		bgc: `linear-gradient(250.63deg, #FF8E47 46.1%, #FF2CED 100%)`,
		checkMarkColor: '#FF8E47',
	},
]

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
