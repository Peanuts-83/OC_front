import "../../styles/modules/grid.scss";
import Photo from "./Photo";
import { Link } from "react-router-dom";

function Grid({ locs }) {
	return (
		<div className="Grid">
			{locs.map(loc => (
				<Link to={`/logement:${loc.id}`} key={loc.id}>
					<div className="photo_grid">
						<Photo loc={loc} />
					</div>
				</Link>
			))}
		</div>
	);
}

export default Grid;
