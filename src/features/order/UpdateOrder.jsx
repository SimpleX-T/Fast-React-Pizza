import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
import { useState } from "react";

function UpdateOrder({ order }) {
	const fetcher = useFetcher();

	const [isPriority, setIsPriority] = useState(false);

	return (
		<fetcher.Form method='PATCH' className='text-left'>
			{/* <div className='mb-3 relative'>
				<input
					type='text'
					name='updateAddress'
					className='input focus:w-72w-[125px]'
					placeholder='Update Address'
				/>
			</div>
			<div className='mb-3 relative'>
				<input
					type='checkbox'
					name='priority'
					checked={isPriority}
					onChange={() => setIsPriority((val) => !val)}
					className='h-4 w-4 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1'
				/>
			</div> */}
			<Button type='small'>Update Order</Button>
		</fetcher.Form>
	);
}
export default UpdateOrder;

export async function action({ request, params }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const UpdatedOrder = { ...data, priority: data.priority === "on" };
	console.log(UpdatedOrder);
	await updateOrder(params.orderId, UpdatedOrder);
	return null;
}
