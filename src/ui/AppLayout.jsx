import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getUser } from "../features/user/userSlice";
import Menu from "../features/menu/Menu";

function AppLayout() {
	const navigation = useNavigation();
	// const { isAuthenticated } = useSelector(getUser);
	const isLoading = navigation.state === "loading";

	return (
		<div className='grid h-screen grid-rows-[auto_1fr_auto]'>
			{isLoading && <Loader />}

			<Header />

			<div className='overflow-scroll'>
				<main className='mx-auto max-w-3xl'>
					<Outlet />
					{/* {isAuthenticated ? <Outlet /> : <Menu />} */}
				</main>
			</div>

			<CartOverview />
		</div>
	);
}

export default AppLayout;
