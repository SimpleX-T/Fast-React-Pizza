import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
	const pizzas = useSelector((state) => state.cart.cart);
	const numPizzas = pizzas.length;
	const totalPizzaPrice = pizzas.reduce(
		(acc, pizza) => pizza.totalPrice + acc,
		0
	);

	return (
		<div className='flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base'>
			<p className='space-x-4 font-semibold text-stone-300 sm:space-x-6'>
				{numPizzas ? (
					<>
						<span>
							{numPizzas} pizza{numPizzas > 1 && "s"}
						</span>
						<span>{formatCurrency(totalPizzaPrice)}</span>
					</>
				) : (
					<span>
						You have nothing in your cart. Start ordering by
						inputting your name above👆🏽.
					</span>
				)}
			</p>
			<Link to='/cart'>Open cart &rarr;</Link>
		</div>
	);
}

export default CartOverview;
