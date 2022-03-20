import "../../styles/modules/carousel.scss";
// import "bear-react-carousel/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import BearCarousel, { elClassName, BearSlideItem } from "bear-react-carousel";

function Carousel({ loc }) {
	let pictures = loc.pictures;
	pictures = pictures.map((picture, i) => {
		return { id: i + 1, image: pictures[i] };
	});
	// console.log(pictures);

	const bearSlideItemData = pictures.map((row) => {
		return {
			key: row.id,
			children: <BearSlideItem imageUrl={row.image} />,
		};
	});

	return (
		<div className="Carousel">
            {pictures.length <= 1 ? (
                <div className="photo" style={{backgroundImage: `url(${pictures[0].image})`}}></div>
            ):(
                <BearCarousel
                    className="carousel_flow"
                    data={bearSlideItemData}
                    staticHeight="415px"
                    renderNavButton={(toPrev, toNext) => {
                        return (
                            <div className={elClassName.navGroup}>
                                <button
                                    type="button"
                                    id="prev"
                                    className={elClassName.navPrevButton}
                                    style={{
                                        background: "transparent",
                                    }}
                                    onClick={() => toPrev()}
                                >
                                    <FontAwesomeIcon
                                        icon={solid("chevron-left")}
                                        style={{
                                            fontSize: "30px",
                                            filter: "drop-shadow(1px 1px 3px rgba(0,0,0,.3))",
                                        }}
                                        className="chevron chevron_left"
                                    />
                                </button>
                                <button
                                    type="button"
                                    id="next"
                                    className={elClassName.navNextButton}
                                    style={{
                                        background: "transparent",
                                    }}
                                    onClick={() => toNext()}
                                >
                                    <FontAwesomeIcon
                                        icon={solid("chevron-right")}
                                        style={{
                                            fontSize: "30px",
                                            filter: "drop-shadow(1px 1px 3px rgba(0,0,0,.3))",
                                        }}
                                        className="chevron chevron_right"
                                    />
                                </button>
                            </div>
                        );
                    }}
                    isEnableLoop
                    isEnableNavButton
                    isEnablePagination
                />

            )}
		</div>
	);
}

export default Carousel;
