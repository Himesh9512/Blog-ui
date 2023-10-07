import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Header = () => {
	const iconSize = window.innerWidth >= 380 ? "3rem" : "2rem";

	return (
		<AppBar position="static" color="primary">
			<Box
				padding={1}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				paddingX={5}>
				<Typography
					variant="body1"
					fontSize={{ xs: "2rem", sm: "2rem", md: "3rem" }}
					fontWeight="bold"
					component="div">
					BLOG
				</Typography>
				<Box marginX={5}>
					<Link href="https://github.com/Himesh9512" color="inherit">
						<GitHub color="inherit" sx={{ fontSize: iconSize }} />
					</Link>
				</Box>
			</Box>
		</AppBar>
	);
};

export default Header;
