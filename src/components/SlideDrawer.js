import "./SlideDrawer.css";
export default function SlideDrawer({ showDrawer, ...props }) {
	var drawerClasses = "side-drawer";
	if (showDrawer === true) {
		drawerClasses = "side-drawer open";
	}
	return (
		<div className={drawerClasses}>
			<h1>Hello, I'm sliding!</h1>
		</div>
	);
}
