import Rating from './Rating';
import Button from './Button';

/* 

*/

function RatingCard({ title, content, ratings, onSelection, onSubmit }) {
	return (
		<div className='card'>
			<div className='logo-container'>
				<img
					className='logo'
					src='/images/icon-star.svg'
					alt='logo'
				/>
			</div>
			<h1 className='title'>{title}</h1>
			<p className='content'> {content}</p>
			<ul className='ratings'>
				{ratings.map((r) => (
					<Rating
						onSelection={onSelection}
						key={r.id}
						rating={r}
					/>
				))}
			</ul>

			<Button
				text={'submit'}
				onSubmit={onSubmit}
			/>
		</div>
	);
}

export default RatingCard;
