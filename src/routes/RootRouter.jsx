// libs
import React, { Suspense } from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";

// components
import { PublicRoute } from './PublicRoute'
import AppLayout from "../components/layout/AppLayout";
import PublicLayout from "../components/layout/PublicLayout";

// constants
import { ROUTE_CONSTANTS } from "../shared/Routes";

const DEFAULT_GUEST_ROUTE = ROUTE_CONSTANTS.HOME;

const Fallback = () => {
	return (
		<>
			<div className='full-page'>loading ...</div>
		</>
	);
};

const GuestRoutes = () => {
	const routes = [...PublicRoute];
	let defaultGuestRoute = {
		path: "*",
		element: <Navigate to={DEFAULT_GUEST_ROUTE} replace />,
		title: "Home",
	};
	routes.push(defaultGuestRoute);
	const routing = useRoutes(routes);
	return (
		<Suspense fallback={<Fallback />}>
			<PublicLayout>{routing}</PublicLayout>
		</Suspense>
	);
};

const RootRouter = () => { 
	return (
		<BrowserRouter>
			<AppLayout>
				<GuestRoutes />
			</AppLayout>
		</BrowserRouter>
	);
};

export default RootRouter;

