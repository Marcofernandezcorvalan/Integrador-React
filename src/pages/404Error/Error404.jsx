import React from "react";
import { ContGeneral, TitleGen } from "../Login/Login";

const Error404 = () => {
	return (
		<ContGeneral>
			<TitleGen style={{ color: "rgba(187, 24, 24, 0.973)" }}>Error 404 :/</TitleGen>
			<p style={{ color: "rgba(202, 47, 47, 0.973)" }}>La Página que buscaste, no existe.</p>
		</ContGeneral>
	);
};

export default Error404;
