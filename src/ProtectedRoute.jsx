import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
	const username = useSelector((state) => state.user.userName);
	const navigate = useNavigate();

	if (username === "") navigate("/");
	return children;
}
export default ProtectedRoute;
