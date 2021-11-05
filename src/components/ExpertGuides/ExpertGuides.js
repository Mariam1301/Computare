import { Link } from 'react-router-dom'
import guides from './guides'

const handleClick = (e) => {
	console.log(e)
}

const ExpertGuides = () => {
	return guides.map((guide) => {
		return (
			<div key={guide._id} className='guide-container'>
				<div className='guide-img'>
					<img width='255' height='250' src={guide.imgSrc} alt='guides' />
				</div>
				<div className='guide-info'>
					<h2 className='guide-info-title'>{guide.title}</h2>
					<Link to={`/guides/${guide.name}`}>view all</Link>
					<div
						style={{ height: 40, overflow: 'hidden' }}
						className='guide-info-description'
					>
						{guide.info.map((i) => {
							return <p>{i}</p>
						})}
					</div>
				</div>
			</div>
		)
	})
}

export default ExpertGuides
