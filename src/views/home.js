import { Col, Row } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import "./home.css";
import ImageGallery from "react-image-gallery";

const images = [
	{
		original: "https://picsum.photos/id/1018/1000/600/",
		thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
		original: "https://picsum.photos/id/1015/1000/600/",
		thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/1000/600/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
	{
		original: "https://picsum.photos/id/1018/1000/600/",
		thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
		original: "https://picsum.photos/id/1015/1000/600/",
		thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/1000/600/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
	{
		original: "https://picsum.photos/id/1018/1000/600/",
		thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
		original: "https://picsum.photos/id/1015/1000/600/",
		thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/1000/600/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
	{
		original: "https://picsum.photos/id/1018/1000/600/",
		thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
		original: "https://picsum.photos/id/1015/1000/600/",
		thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
		original: "https://picsum.photos/id/1019/1000/600/",
		thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
];
export function Home(props) {
	return (
		<div
			style={{
				width: "100%",
				height: "200px",
				marginTop: "20px",
			}}>
			<Row>
				<Col md="6">
					<p className="home-header" style={{}}>
						Printing Made Easy with Us
					</p>
					<p className="home-subtext">
						Since 1997, We Sre Printograph have been furnished with
						a satisfactory quality offset printers in and around
						Tamilnadu. We have been operating for the past 25 years
						in Sivakasi under the sole ownership of Mr. Sivakumar D.
						In the event of Silver Jubilee, we stepped into the
						Network accessible environment for people like you to
						reach us sooner for a Dazzling Printing Works.
					</p>
				</Col>
				<Col md="6">
					<ImageGallery
						autoPlay
						slideDuration="3"
						showNav={false}
						showBullets
						disableSwipe={false}
						showPlayButton={false}
						showFullscreenButton={false}
						items={images}
					/>
				</Col>
			</Row>
			<div style={{ height: "1000px" }}></div>
		</div>
	);
}
