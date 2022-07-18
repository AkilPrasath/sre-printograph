import { Outlet } from "react-router-dom";
import "./base.css";
import { Container } from "react-bootstrap";
import { NavigationBar } from "../components/navbar";
import SlideDrawer from "../components/SlideDrawer";
import Backdrop from "../components/Backdrop";
import { useState, useEffect } from "react";
import { Background } from "../components/Background";
import { useLocation, useNavigate } from "react-router-dom";
export function Base({ ...props }) {
	const [showDrawer, setShowDrawer] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(location);
		if (location.pathname === "/") {
			navigate("/home", { replace: true });
		}
	}, []);

	return (
		<div>
			<Background />
			<NavigationBar
				isSideDrawerOpen={showDrawer}
				setShowSideDrawer={setShowDrawer}
			/>
			<Container>
				<Backdrop
					closeDrawer={() => {
						setShowDrawer(false);
					}}
					showBackdrop={showDrawer}
				/>
				<SlideDrawer showDrawer={showDrawer} />
				<div style={{ height: "140px" }}></div>
				<Outlet />
			</Container>
		</div>
	);
}
