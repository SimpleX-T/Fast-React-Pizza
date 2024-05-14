function UpdateItemQuantity({ action, onClick }) {
	return (
		<button
			className='w-5 h-5 flex justify-center items-center bg-slate-800 rounded-full hover:bg-slate-600 transition-colors duration-300'
			onClick={onClick}>
			<span className='text-white cursor-pointer'>{action}</span>
		</button>
	);
}
export default UpdateItemQuantity;
