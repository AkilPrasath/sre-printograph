import { useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import "./SlideDrawer.css";
import logo from "../assets/images/logo.png";
export default function SlideDrawer({ showDrawer, ...props }) {
	//Accepted Values: home | products | process | about
	const [linkState, setLinkState] = useState("home");
	var drawerClasses = "side-drawer";
	if (showDrawer === true) {
		drawerClasses = "side-drawer open";
	}
	return (
		<div className={drawerClasses}>
			<Row>
				<Col>
					<div className="brand unselectable side-drawer-brand">
						<img
							src={logo}
							style={{ height: "20vw" }}
							alt="Sre Printograph Brand Logo"
						/>
						<div>SRE PRINTOGRAPH</div>
					</div>
					<ListGroup variant="flush" className="unselectable pointer">
						<ListGroup.Item
							className="side-drawer-nav-item"
							active={linkState === "home"}
							onClick={() => {
								setLinkState("home");
							}}>
							Home
						</ListGroup.Item>
						<ListGroup.Item
							className="side-drawer-nav-item"
							active={linkState === "products"}
							onClick={() => {
								setLinkState("products");
							}}>
							Our Products
						</ListGroup.Item>
						<ListGroup.Item
							className="side-drawer-nav-item"
							active={linkState === "process"}
							onClick={() => {
								setLinkState("process");
							}}>
							Our Process
						</ListGroup.Item>
						<ListGroup.Item
							className="side-drawer-nav-item"
							active={linkState === "about"}
							onClick={() => {
								setLinkState("about");
							}}>
							About Us
						</ListGroup.Item>
						{/* <ListGroup.Item>
							className="side-drawer-nav-item"
							<div className="cta unselectable">
								Request a Quote
							</div>
						</ListGroup.Item> */}
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}
