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

export default prices
