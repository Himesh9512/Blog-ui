import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import Typography from "@mui/material/Typography";

const Home = () => {
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
		</>
	);
};

export default Home;
