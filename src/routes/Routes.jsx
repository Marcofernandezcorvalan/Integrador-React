import React from "react";
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Layout from "../components/layout/Layout";
import FormCompra from "../pages/FormCompra/FormCompra";
import Congrats from "../pages/Congrats/Congrats";
import Error404 from "../pages/404Error/Error404";
import Verified from "../pages/Verified/Verified";

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<ReactDomRoutes>
						<Route path="/" element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="verified" element={<Verified />} />
						<Route path="ConfirmarCompra" element={<FormCompra />} />
						<Route path="Congrats" element={<Congrats />} />
						<Route path="*" element={<Error404 />} />
					</ReactDomRoutes>
				</Layout>
			</BrowserRouter>
		</>
	);
};

export default Routes;
