import Hamburger from "hamburger-react";
import { Row, Col } from "react-bootstrap";
import "./navbar.css";
export function NavigationBar({
	isSideDrawerOpen,
	setShowSideDrawer,
	...props
}) {
	return (
		<Row className="justify-content-between align-items-center py-3">
			<Col md={"1"} sm={"6"} xs={6} className="brand unselectable">
				Sre Printograph
			</Col>
			<Col md={"1"} sm={"6"} xs={6} className="align-items-center">
				<span className="hide-when-big">
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
				<div className="cta hide-when-small unselectable">
					Request a Quote
				</div>
			</Col>
		</Row>
	);
}

function NaviItem({ name, ...props }) {
	return (
		<div className="nav-item hide-when-small unselectable">
			<span className="nav-item-link">{name}</span>
		</div>
	);
}
