function ThankYouCard({ title, content, value }) {
	return (
		<div className='card thank-you'>
			<div className='logo-container '>
				<img
					className='logo'
					src='/images/illustration-thank-you.svg'
					alt='Thank you'
				/>
			</div>
			<div className='summary'>
				<p>You selected {value} out of 5</p>
			</div>

			<h1 className='title'> {title}</h1>
			<p className='content thank-you'>{content}</p>
		</div>
	);
}

export default ThankYouCard;
