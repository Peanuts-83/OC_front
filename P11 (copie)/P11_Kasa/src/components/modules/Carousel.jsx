import "../../styles/modules/carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";

function Carousel({ loc }) {
	const pictures = loc.pictures;
	// console.log(pictures)
	let images = [];
	window.onload = () => {
		for (let n = 0; n < pictures.length; n++) {
			images[n] = new Image();
			images[n].src = pictures[n];
		}
	};
	const [imgNum, setImgNum] = useState(0);
	let picture = imgNum === 0 ? loc.cover : pictures[imgNum];

	return (
		<div className="Carousel">
			{pictures.length <= 1 ? (
				<div
					className="photo"
					style={{ backgroundImage: `url(${picture})` }}
				></div>
			) : (
				<div
				className="photo"
				style={{
					backgroundImage: `url(${picture})`,
				}}
			>
				<FontAwesomeIcon
					onClick={() =>
						setImgNum(imgNum === 0 ? pictures.length - 1 : imgNum - 1)
					}
					icon={solid("chevron-left")}
					className="chevron chevron_left"
				/>
				<FontAwesomeIcon
					onClick={() =>
						setImgNum(imgNum === pictures.length - 1 ? 0 : imgNum + 1)
					}
					icon={solid("chevron-right")}
					className="chevron chevron_right"
				/>
			</div>
			)}
		</div>
	);
}

export default Carousel;
