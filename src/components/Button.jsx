function Button({ text, onSubmit }) {
	return (
		<button
			onClick={onSubmit}
			className='btn'>
			{text}
		</button>
	);
}

export default Button;
