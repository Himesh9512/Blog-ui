import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import Typography from "@mui/material/Typography";
import PostsCatalog from "../components/PostsCatalog";

import axios from "axios";
const Home = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios
			.get("https://blog-api-qede.onrender.com/api/posts")
			.then((res) => {
				setPosts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log("err: ", err);
			});
	}, []);

	return (
		<>
			<Hero>
				<Box component="div" marginX={3} paddingTop={{ xs: 5, md: 20 }}>
					<Typography
						variant="h1"
						component="h1"
						fontSize={{ xs: "3rem", md: "5rem" }}
						color="secondary"
						fontWeight="bold"
						textAlign="center">
						HELLO TO MY BLOG
					</Typography>
				</Box>
			</Hero>
			<Box component="div" sx={{ backgroundColor: "black" }}>
				<Typography
					variant="body1"
					fontSize={{ xs: "2rem", sm: "2rem", md: "3rem" }}
					fontWeight="bold"
					component="div"
					color="secondary"
					textAlign="center">
					BLOGS
				</Typography>
			</Box>
			{loading ? (
				<Box display="flex" justifyContent="center" alignItems="center" margin={5}>
					<Typography component="p" variant="h3">
						Loading...
					</Typography>
				</Box>
			) : (
				<Box component="div" paddingY={5}>
					<PostsCatalog posts={posts}></PostsCatalog>
				</Box>
			)}
		</>
	);
};

export default Home;
