import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItemButton from "../cart/DeleteItemButton";

function MenuItem({ pizza }) {
	const dispatch = useDispatch();
	const cart = useSelector(getCart);
	const cartIDs = cart.map((item) => item.pizzaId);
	// console.log(cartIDs);
	const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

	function handleAddItem() {
		const newItem = {
			pizzaId: id,
			name,
			unitPrice,
			quantity: 1,
			totalPrice: unitPrice * 1,
		};
		dispatch(addItem(newItem));
	}

	return (
		<li className='flex gap-4 py-2'>
			<img
				src={imageUrl}
				alt={name}
				className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
			/>
			<div className='flex grow flex-col pt-0.5'>
				<p className='font-medium'>{name}</p>
				<p className='text-sm capitalize italic text-stone-500'>
					{ingredients.join(", ")}
				</p>
				<div className='mt-auto flex items-center justify-between'>
					{!soldOut ? (
						<p className='text-sm'>{formatCurrency(unitPrice)}</p>
					) : (
						<p className='text-sm font-medium uppercase text-stone-500'>
							Sold out
						</p>
					)}

					{!soldOut && (
						<div className='flex items-center justify-between gap-4'>
							{cartIDs.includes(id) && (
								<DeleteItemButton pizzaId={id} />
							)}
							<Button type='small' onClick={handleAddItem}>
								Add to cart
							</Button>
						</div>
					)}
				</div>
			</div>
		</li>
	);
}

// function action
export default MenuItem;
