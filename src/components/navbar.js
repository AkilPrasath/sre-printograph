import Hamburger from "hamburger-react";
import { Col } from "react-bootstrap";
import "./navbar.css";
import logo from "../assets/images/logo.png";
export function NavigationBar({
	isSideDrawerOpen,
	setShowSideDrawer,
	...props
}) {
	return (
		<div
			style={{
				position: "fixed",
				display: "flex",
				flexDirection: "row",
				width: "100%",
				zIndex: 2000,
			}}
			className="svg-bg justify-content-between align-items-start py-3">
			<Col
				md={"1"}
				sm={"6"}
				xs={6}
				style={{ paddingLeft: "30px" }}
				className="brand unselectable pointer">
				<div>
					<img
						src={logo}
						style={{
							height: "75px",
							position: "relative",
							left: "10px",
						}}
						alt="Sre Printograph Brand Logo"
					/>
				</div>
				<span>SRE PRINTOGRAPH</span>
			</Col>
			<Col md={"1"} sm={"6"} xs={6} className="align-items-center">
				<span
					style={{ paddingRight: "50px" }}
					className="hide-when-big">
					<Hamburger
						toggled={isSideDrawerOpen}
						toggle={isSideDrawerOpen}
						rounded
						onToggle={(toggled) => {
							setShowSideDrawer(toggled);
						}}
					/>
				</span>
			</Col>
			<Col md={"2"}>
				<NaviItem name={"Home"} />
			</Col>
			<Col md={"2"}>
				<NaviItem name={"Our Products"} />
			</Col>
			<Col md={"2"}>
				<NaviItem name={"Our Process"} />
			</Col>
			<Col md={"2"}>
				<NaviItem name={"About Us"} />
			</Col>

			<Col md={"2"}>
				<button className="cta shimmerable hide-when-small unselectable">
					Request a Quote
				</button>
			</Col>
		</div>
	);
}

function NaviItem({ name, ...props }) {
	return (
		<div className="nav-item hide-when-small unselectable">
			<span className="nav-item-link">{name}</span>
		</div>
	);
}
