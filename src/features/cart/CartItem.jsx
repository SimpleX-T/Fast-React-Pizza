import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItemButton from "./DeleteItemButton";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function CartItem({ item }) {
	const { pizzaId, name, quantity, totalPrice } = item;
	const dispatch = useDispatch();

	return (
		<li className='py-3 sm:flex sm:items-center sm:justify-between'>
			<p className='mb-1 sm:mb-0'>
				{quantity}&times; {name}
			</p>
			<div className='flex items-center justify-between sm:gap-6'>
				<p className='text-sm font-bold'>
					{formatCurrency(totalPrice)}
				</p>
				<UpdateItemQuantity
					action='+'
					onClick={() => dispatch(increaseItemQuantity(pizzaId))}
				/>
				<UpdateItemQuantity
					action='-'
					onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
				/>
				<DeleteItemButton pizzaId={pizzaId} />
			</div>
		</li>
	);
}

export default CartItem;
