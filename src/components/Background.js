export function Background({ ...props }) {
	return (
		<div
			style={{
				zIndex: -1,
				position: "fixed",
				height: "100vh",
				width: "100vw",
			}}>
			{/* <svg id="visual" width="100%" height="100%" version="1.1">
				<rect
					x="0"
					y="0"
					width="100%"
					height="100%"
					fill="#201035"></rect>
				<path
					d="M0 94L20 99.2C40 104.3 80 114.7 120 119.2C160 123.7 200 122.3 240 119.5C280 116.7 320 112.3 360 113.5C400 114.7 440 121.3 480 123.7C520 126 560 124 600 117.8C640 111.7 680 101.3 720 99.8C760 98.3 800 105.7 840 105.7C880 105.7 920 98.3 940 94.7L960 91L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
					fill="#ed9510"
					strokeLinecap="round"
					strokeLinejoin="miter"></path>
			</svg> */}
			<svg id="visual" width="100%" height="100%" version="1.1">
				<rect
					x="0"
					y="0"
					width="100%"
					height="100%"
					fill="#201035"></rect>
				{/* <path
					d="M0 124L53.3 124.7C106.7 125.3 213.3 126.7 320 117.5C426.7 108.3 533.3 88.7 640 88.3C746.7 88 853.3 107 960 119C1066.7 131 1173.3 136 1280 134C1386.7 132 1493.3 123 1546.7 118.5L1600 114L1600 0L1546.7 0C1493.3 0 1386.7 0 1280 0C1173.3 0 1066.7 0 960 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0L0 0Z"
					fill="#ed9510"
					strokeLinecap="round"
					strokeLinejoin="miter"></path> */}
			</svg>
		</div>
	);
}
