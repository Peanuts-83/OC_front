import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import About from "../pages/About";
import Error404 from "../pages/Error";
import { ProviderLogements } from "../utils/context_logements";

function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter className="container">
				<ProviderLogements>
					<div className="App">
						<Header />
						<Routes>
							<Route exact path="/" element={<Home />} />
							{/* TODO: manage /logement:errorID */}
							<Route path="/logement:idPage" element={<Logement />} />
							<Route path="/apropos" element={<About />} />
							<Route path="*" element={<Error404 />} />
						</Routes>
					</div>
				</ProviderLogements>
				<Footer className="footer" />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
