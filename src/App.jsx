import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
	action as orderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as UpdateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { updateName } from "./features/user/userSlice";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
				element: <Menu />,
				loader: menuLoader,
				errorElement: <Error />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/order/new",
				element: <CreateOrder />,
				action: orderAction,
			},
			{
				path: "/order/:orderId",
				element: <Order />,
				loader: orderLoader,
				errorElement: <Error />,
				action: UpdateOrderAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
