import { useSelector } from "react-redux";
import { getUserFirstname } from "./userSlice";

function Username() {
	const username = useSelector(getUserFirstname);
	if (!username) return null;
	return (
		<div className='hidden text-sm font-semibold md:block'>{username}</div>
	);
}

export default Username;
