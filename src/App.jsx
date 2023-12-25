import { useState } from 'react';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';

const initialRatings = [
	{ value: '1', id: '1', selected: false },
	{ value: '2', id: '2', selected: false },
	{ value: '3', id: '3', selected: false },
	{ value: '4', id: '4', selected: false },
	{ value: '5', id: '5', selected: false },
];

function App() {
	const [ratings, setRatings] = useState(initialRatings);
	const [submited, setSubmited] = useState(false);

	let selectedRatingValue = ratings.filter((r) => r.selected)[0]?.value;

	function handelSelection(id) {
		setRatings(ratings.map((rating) => (rating.id === id ? { ...rating, selected: true } : { ...rating, selected: false })));
	}

	function handleSubmit() {
		if (!selectedRatingValue) return;
		setSubmited(true);

		// setTimeout(() => {
		// 	setRatings(initialRatings);
		// 	setSubmited(false);
		// }, 4000);
	}

	return (
		<div className='container'>
			{!submited ? (
				<RatingCard
					title={'How did we do?'}
					content={'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}
					onSelection={handelSelection}
					ratings={ratings}
					onSubmit={handleSubmit}
				/>
			) : (
				<ThankYouCard
					title={'Thank you!'}
					content={'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'}
					value={selectedRatingValue}
				/>
			)}
		</div>
	);
}

export default App;
