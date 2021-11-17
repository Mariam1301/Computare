import React from 'react'
import { useEffect } from 'react'
import './404.css'

const Fof = () => {
	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<React.Fragment>
			<div className='page-not-found-header'></div>
			<div className='page-not-found'>
				<h1>Page Not Found 404</h1>
			</div>
		</React.Fragment>
	)
}

export default Fof
