import { Outlet } from "react-router-dom";
import "./base.css";
import { Container } from "react-bootstrap";
import { NavigationBar } from "../components/navbar";
import SlideDrawer from "../components/SlideDrawer";
import Backdrop from "../components/Backdrop";
import { useState } from "react";
export function Base({ ...props }) {
	const [showDrawer, setShowDrawer] = useState(false);
	return (
		<div>
			<div
				style={{
					zIndex: -1,
					position: "fixed",
					height: "100vh",
					width: "100vw",
				}}>
				<svg id="visual" width="100%" height="100%" version="1.1">
					<rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						fill="#201035"></rect>
					<path
						d="M0 124L53.3 124.7C106.7 125.3 213.3 126.7 320 117.5C426.7 108.3 533.3 88.7 640 88.3C746.7 88 853.3 107 960 119C1066.7 131 1173.3 136 1280 134C1386.7 132 1493.3 123 1546.7 118.5L1600 114L1600 0L1546.7 0C1493.3 0 1386.7 0 1280 0C1173.3 0 1066.7 0 960 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0L0 0Z"
						fill="#ed9510"
						strokeLinecap="round"
						strokeLinejoin="miter"></path>
				</svg>
			</div>
			<Container>
				<NavigationBar
					isSideDrawerOpen={showDrawer}
					setShowSideDrawer={setShowDrawer}
				/>
				<Backdrop
					closeDrawer={() => {
						setShowDrawer(false);
					}}
					showBackdrop={showDrawer}
				/>
				<SlideDrawer showDrawer={showDrawer} />
				<Outlet />
			</Container>
		</div>
	);
}
