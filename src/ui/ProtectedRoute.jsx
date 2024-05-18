import { useSelector } from "react-redux";
import { getUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
	const { isAuthenticated } = useSelector(getUser);
	const navigate = useNavigate();

	useEffect(
		function () {
			if (!isAuthenticated) navigate("/", { replace });
		},
		[isAuthenticated, navigate]
	);
	return isAuthenticated ? children : null;
}
export default ProtectedRoute;
