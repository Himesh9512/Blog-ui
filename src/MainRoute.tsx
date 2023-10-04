import { Route, Routes } from "react-router-dom";

import Home from "./layouts/Home";
import Post from "./layouts/Post";
import NotFound from "./components/NotFound";

const MainRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/:postId" element={<Post />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
};

export default MainRoute;
