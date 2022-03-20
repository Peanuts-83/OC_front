import Photo from "../components/modules/Photo";
import Grid from "../components/modules/Grid";

import { useContext, useEffect } from "react";
import { ContextLogements } from "../utils/context_logements";
import logements from "../app/fetcher";

function Home() {
	const { locs, setLocs } = useContext(ContextLogements);
	useEffect(() => setLocs(logements.get()));

	return (
		<div>
			<Photo hpImg={true} />
			<Grid locs={locs} />
		</div>
	);
}

export default Home;
