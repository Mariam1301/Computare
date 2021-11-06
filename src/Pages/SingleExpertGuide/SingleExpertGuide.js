import React from 'react'
import guides from '../../components/ExpertGuides/guides'
import { useParams } from 'react-router'

const SingleExpertGuide = (props) => {
	const params = useParams()
	const guide = guides.find((g) => g._id === params.id)
	return <div>{guide.info}</div>
}

export default SingleExpertGuide
