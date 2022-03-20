import "../../styles/modules/photo.scss";
import paysage from "../../assets/fond_paysage.png";
import paysage2 from "../../assets/fond_paysage2.png";


function Photo({ hpImg, loc, index }) {
	const paysages = [paysage, paysage2];
	const choosePaysage = Math.floor(Math.random() * 2);
	const imageURL = hpImg ? paysages[choosePaysage] : loc.cover;

	return (
		<div
      className="Photo"
      style={{ position: !hpImg && "absolute" }}>
			<div
				className="photo_img"
				style={{
					backgroundImage: `url(${imageURL})`,
					filter: hpImg && `brightness(70%)`,
					borderRadius: !hpImg && "10px",
					height: !hpImg && `100%`,
					boxShadow: !hpImg && `inset 0 -50px 40px rgba(0,0,0,0.7)`,
				}}
			></div>
			{hpImg && (
				<div className="photo_title">Chez vous, partout et ailleurs</div>
			)}
			{loc && <div className="photo_sub_title">{loc.title}</div>}
		</div>
	);
}

export default Photo;
