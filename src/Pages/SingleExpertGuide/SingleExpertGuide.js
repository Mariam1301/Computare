import React from 'react';
import guides from '../../components/ExpertGuides/guides';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import './singleExpertGuide.css';

const SingleExpertGuide = (props) => {
	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' });
	}, []);
	const params = useParams();
	const guide = guides.find((g) => g._id === params.id);
	return (
		<div className='singleExpert-container'>
			<div className='singleExpert-title'>
				<h2>{guide.title}</h2>
			</div>
			<div className='singleExpert-info'>
				{guide.info.map((i) => {
					return <p>{i}</p>;
				})}
			</div>
		</div>
	);
};

export default SingleExpertGuide;
