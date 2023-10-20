import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRedirect = (redirectTo) => {
	const { actualUser } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (actualUser) {
			navigate(redirectTo);
		}
	}, [actualUser, redirectTo]);
};

export default useRedirect;
