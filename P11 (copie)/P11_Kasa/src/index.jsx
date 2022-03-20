import ReactDOM from "react-dom";
import Router from "./app/router";

import "./styles/index.scss";
// import 'bear-react-carousel/dist/index.css';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faStar as faStarS} from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";


// library.add(faStar, faStarS);

// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<Router />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
