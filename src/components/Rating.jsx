function Rating({ rating, onSelection }) {
	return (
		<li
			onClick={() => onSelection(rating.id)}
			className={rating.selected ? 'active' : 'rating'}>
			{rating.value}
		</li>
	);
}

export default Rating;
