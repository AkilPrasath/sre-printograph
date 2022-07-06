import "./Backdrop.css";
export default function Backdrop({ closeDrawer, showBackdrop, ...props }) {
	return (
		<div
			className={showBackdrop ? "backdrop" : ""}
			onClick={() => {
				closeDrawer();
			}}
		/>
	);
}
